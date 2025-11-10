document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailGroup = document.getElementById("emailGroup");
  // Mobile Query
  const mobileQuery = window.matchMedia("(max-width: 767px");
  const MOBILE_URL = "mobile-success.html";
  const DESKTOP_URL = "desktop-success.html";
  const SUBMISSION_DELAY_MS = 2000;

  // Function to determine the correct error message
  function getErrorMessage() {
    if (emailInput.validity.valueMissing) {
      return "Email address is required";
    } else if (emailInput.validity.typeMismatch) {
      return "Valid email required";
    }
    return "Invalid input";
  }

  // Function to show/hide the error styles and message
  function updateValidationState() {
    if (emailInput.validity.valid) {
      // Valid: remove the invalid styles from the parent group
      emailGroup.classList.remove("invalid-group");
      emailError.textContent = "";
    } else {
      // Invalid: add the invalid styles to the parent group
      emailGroup.classList.add("invalid-group");
      emailError.textContent = getErrorMessage();
    }
  }

  // 1. Real-time validation as the user types
  emailInput.addEventListener("input", updateValidationState);

  // 2. Final validation on form submission
  form.addEventListener("submit", (event) => {
    if (!emailInput.validity.valid) {
      updateValidationState();
      event.preventDefault();
    } else {
      event.preventDefault();
      alert("Form is valid! Ready for submission/redirect.");

      let redirectURL;
      if (mobileQuery.matches) {
        redirectURL = MOBILE_URL;
      } else {
        redirectURL = DESKTOP_URL;
      }

      setTimeout(() => {
        console.log("Submission successful. Redirecting to:", redirectURL);

        // 4. Perform the redirection
        window.location.href = redirectURL;
      }, SUBMISSION_DELAY_MS);
    }
  });

  // Run once on load to establish the initial state
  updateValidationState();
});
