// Function to load and replace content dynamically
async function loadContent(section, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    document.getElementById(section).innerHTML = await response.text();
  } catch (error) {
    console.error(`Error loading ${section}:`, error);
    document.getElementById(
      section
    ).innerHTML = `<p style="color:red;">Failed to load content.</p>`;
  }
}

// Load header, footer, and default content on page load
document.addEventListener("DOMContentLoaded", () => {
  loadContent("header", "/header");
  loadContent("footer", "/footer");
  loadContent("main-content", "/content"); // Default home content

  // Handle navigation dynamically
  document.addEventListener("click", (event) => {
    if (event.target.tagName === "A" && event.target.dataset.route) {
      event.preventDefault();
      const route = event.target.dataset.route;
      loadContent("main-content", `/content${route}`);
      window.history.pushState({}, "", route); // Update URL without reload
    }
  });

  // Handle back/forward browser navigation
  window.addEventListener("popstate", () => {
    loadContent("main-content", `/content${window.location.pathname}`);
  });
});
