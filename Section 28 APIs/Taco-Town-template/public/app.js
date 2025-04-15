document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recipeForm");
  const buttons = document.querySelectorAll("button[name='choice']");
  const container = document.getElementById("recipeContainer");

  //   form.addEventListener("submit", async (event) => {
  //     event.preventDefault();
  //     const formData = new FormData(form);
  //     const response = await fetch("/recipe", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     const data = await response.text();
  //     container.innerHTML = data;
  //   });
  buttons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      const choice = event.target.value;
      const formData = new FormData();
      formData.append("choice", choice);
      const response = await fetch("/recipe", {
        method: "POST",
        body: formData,
      });
      const data = await response.text();
      container.innerHTML = data;
      container.classList.remove("hidden");
    });
  });
});
