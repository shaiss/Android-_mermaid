// Get the form element
const form = document.getElementById("mermaid-form");

// Add an event listener to the form to handle submit events
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the markdown input from the form
  const markdown = document.getElementById("markdown").value;

  // Convert the markdown to SVG using the mermaid SVG API
  mermaid.mermaidAPI.render("svg-container", markdown, (svgCode) => {
    // Use insertAdjacentHTML to update the HTML content of the mermaid container
    document
      .getElementById("mermaid-container")
      .insertAdjacentHTML("beforeend", svgCode);

    // Show the start over button
    document.getElementById("start-over-button").style.display = "block";
  });
});

// Get the start over button
const startOverButton = document.getElementById("start-over-button");

// Add an event listener to the start over button to handle click events
startOverButton.addEventListener("click", () => {
  // Clear the content of the mermaid container
  document.getElementById("mermaid-container").innerHTML = "";

  // Hide the start over button
  document.getElementById("start-over-button").style.display = "none";
});
