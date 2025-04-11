document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recipeForm");
  const container = document.getElementById("recipeContainer");
  form.addEventListener("submit", async (event) => {
    // event.preventDefault();
    // const formData = newFormData(form);
    // const response = await fetch("/recipe", {
    //   method: "POST",
    //   body: formData,
    // });
    // const data = await response.text();
    // container.innerHTML = data;
    console.log("got the submit");
  });
});
