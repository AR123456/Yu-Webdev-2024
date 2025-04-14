document.addEventListener("DOMContentLoaded", () => {
  // const form = document.getElementById("recipeForm");
  const buttons = document.querySelectorAll("button[name='choice']");
  const container = document.getElementById("recipeContainer");

  buttons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      const choice = event.target.value;

      const response = await fetch("/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Ensures proper parsing
        },
        body: `choice=${encodeURIComponent(choice)}`,
      });
      const data = await response.text();
      container.innerHTML = data;
      container.classList.remove("hidden");
    });
  });
});
