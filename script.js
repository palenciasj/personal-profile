// Get the form and response paragraph
const form = document.getElementById("contactForm");
const response = document.getElementById("response");

// Listen for form submission
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page refresh

  // Get user input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple feedback message
  response.textContent = `Thanks ${name}! Your message has been sent.`;

  // Clear form fields
  form.reset();
});