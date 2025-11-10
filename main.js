const form = document.querySelector("form");
const email = document.getElementById("mail");
const subscribe = document.getElementById("submit");

// Perform usual validation
// Trigger and Open modal when validation is successful
//Dismiss modal when button is clicked </mobile>

// Add conditions to check for screen size

//First submit button in mobile view

document.addEventListener("DOMContentLoaded", function () {
  const mobileQuery = window.matchMedia("(max-width: 767px)");
  const firstbtn = document.getElementById("create");
  const secondbtn = document.getElementById("mobile-back");
  const thirdbtn = document.getElementById("desktop-back");
  const email = document.getElementById("mail");
  const emailError = document.querySelector("#mail + span.error");

  // if (firstbtn) {
  //   firstbtn.addEventListener("click", smartClick);
  // }

  form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
      showError();
      event.preventDefault();
    }
  });
  // Add custom div emailError
  // remove novalidate from <form></form>
  // specify minlength in <input> field
  // check for @ symbol in entered input

  function showError() {
    if (!email.validity.valueMissing) {
      emailError.textContent = "You need to enter an email address";
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Entered value needs to be an email address";
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${email.minLength} characters long`;
    }
  }

  // function smartClick() {
  //   if (mobileQuery.matches) {
  //     console.log("Clicked on mobile size!");
  //     window.location.href = "mobile-success.html";
  //   } else {
  //     console.log("Desktop Mode");
  //     window.location.href = "desktop-success.html";
  //   }
  // }
});

// If valid
//  Screen check
// Display Mobile or Display Desktop
