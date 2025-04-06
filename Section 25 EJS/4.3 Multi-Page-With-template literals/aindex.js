import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
const header = ` <header>
  <nav class="navbar navbar-expand-custom navbar-mainbg">
    <a class="navbar-brand navbar-logo" href="#">My Portfolio</a>
    <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <i class="fas fa-bars text-white"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <div class="hori-selector">
          <div class="left"></div>

        </div>

        <li class="nav-item">
          <a class="nav-link" href="/"><i class="far fa-copy"></i>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about"><i class="far fa-clone"></i>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact"><i class="far fa-calendar-alt"></i>Contact</a>
        </li>

      </ul>
    </div>
  </nav>
</header> `;
const footer = `   <footer>
  <div class="waves">
    <div class="wave" id="wave1"></div>
    <div class="wave" id="wave2"></div>
    <div class="wave" id="wave3"></div>
    <div class="wave" id="wave4"></div>
  </div>
  <ul class="social_icon">
    <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
    <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
    <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
    <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
  </ul>

  <ul class="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Team</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <p class="copyright"> Made with ❤️ in USA.</p>
</footer>`;
const main = ` <h1>Home Page</h1>
  <p>Lorem ipsum dolor sit amet, et proin, justo mus. Porta suspendisse turpis netus sagittis tortor at, vitae aliquet
    pharetra cras velit, id gravida, neque nulla lorem, posuere hac. Ultricies eget lacus vehicula, in ante aliquam
    et,facilisis tempor duis orci. Sed molestie sem in duis eu id, nisl id ultricies metus blandit eget praesent, pede
    tempornullam, vitae arcu tortor suspendisse nibh risus. Nulla id suscipit reiciendis nulla erat. Porta enim aute
    luctus,ducimus sodales dolor.
  </p>
  <p>
    Quam purus justo enim purus, dolor enim, ut eu lectus nam eget nibh. Ante illum nullam leo, vivamus aliquam massa
    massainceptos fermentum porttitor, blandit vehicula, lorem in placerat ut aliquam at sociosqu. Vivamus duis
    ultricies
    aliquam placerat, tincidunt scelerisque imperdiet, egestas erat vel. Libero rerum. Donec ligula tristique, purus
    montes,
    feugiatid nunc in a nec. Duis odio, vitae sed etiam mi massa, laoreet amet purus amet rhoncus, eget sed, arcu
    urna.
    Maecenaswisi id, at donec enim. Proin nisl, pulvinar leo suspendisse, cum parturient non, congue leo et ut in,
    neque ut
    lacusauctor quam fermentum urna. Metus quis, mauris dictum aptent ultrices nulla viverra ornare, tempor elit enim
    leo
    donec,sed sed. Vivamus sapien facilisi, tempor arcu nulla justo sed et, eget suspendisse lacus sed nunc mattis
    lectus.
    Metusgravida.</p>`;
const body = ` 
    <body>
  ${header}
    ${main}
  ${footer}
    </body>
 `;
function buildPage(req, res, next) {
  console.log("buildPage ");
  next();
  //  write the js to append the const to the index.html
}
app.use(buildPage);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
