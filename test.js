const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Perform validation on user input
  if (!name) {
    showError("name", "Name is required.");
    return;
  }

  if (!email) {
    showError("email", "Email is required.");
    return;
  }

  if (!message) {
    showError("message", "Message is required.");
    return;
  }

  // Send the form data to the server
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  // Replace the URL with the appropriate endpoint for your server
  fetch("https://example.com/contact", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("There was a problem submitting the form.");
      }
      alert("Your message has been sent!");
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
});

function showError(fieldName, errorMessage) {
  const field = document.getElementById(fieldName);
  const errorText = document.createElement("div");
  errorText.classList.add("error-text");
  errorText.innerText = errorMessage;
  field.insertAdjacentElement("afterend", errorText);
  field.classList.add("error");
  field.addEventListener("input", () => {
    field.classList.remove("error");
    errorText.remove();
  });
}
const openWindowButton = document.getElementById("open-window-button");
const hoverWindow = document.getElementById("hover-window");

openWindowButton.addEventListener("click", () => {
  hoverWindow.classList.toggle("hidden");
});
