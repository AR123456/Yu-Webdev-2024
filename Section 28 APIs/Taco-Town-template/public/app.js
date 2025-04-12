document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recipeForm");
  const container = document.getElementById("recipeContainer");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const response = await fetch("/recipe", {
      method: "POST",
      body: formData,
    });
    const data = await response.text();
    container.innerHTML = data;
  });
});
