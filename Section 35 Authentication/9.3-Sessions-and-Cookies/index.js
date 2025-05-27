import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
// need session along with passport
import session from "express-session";
import passport from "passport";
// local strategy
import { Strategy } from "passport-local";

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    // the secret can be anything and is set by me
    secret: "SUPERSECRET",
    // session can be saved to db but not always the way to go
    resave: false,
    // do we want to force save session to store(in our case server memory)
    saveUninitialized: true,
    // can add the cookie option to save the cookie if the user closes the window
    cookie: {
      // milliseconds -one day
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
// passport must be after the session is initialized
app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "midnight",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});
// does the user have a active session ?
app.get("/secrets", (req, res) => {
  // comes from passport, gets saved into the request
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
});
// use passport middleware- this method triggers the strategy
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  })
);
app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          // save this in const
          const result = await db.query(
            // SQL returning command to return what was just inserted
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          // set user to the result
          const user = result.rows[0];
          // res.render("secrets.ejs");
          // replace res.render with passports req.login() - it takes user to save to session
          // and a call back
          req.login(user, (err) => {
            console.log(err);
            res.redirect("/secrets");
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// username and password here match the "name=" attribute on the input in the front end log in form
passport.use(
  new Strategy(async function verify(username, password, cb) {
    console.log(username);
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
        // email,
        username,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        // bcrypt.compare(loginPassword, storedHashedPassword, (err, result) => {
        bcrypt.compare(password, storedHashedPassword, (err, result) => {
          if (err) {
            // console.error("Error comparing passwords:", err);
            return cb(err);
          } else {
            if (result) {
              // succcess
              return cb(null, user);
            } else {
              // res.send("Incorrect Password");
              return cb(null, false);
            }
          }
        });
      } else {
        // res.send("User not found");
        return cb("User not found");
      }
    } catch (err) {
      // db query
      // console.log(err);
      return cb(err);
    }
  })
);
// need to include serializeUser and deserialize user
passport.serializeUser((user, cb) => {
  // save user to local storage
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  // get user from local storage
  cb(null, user);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
