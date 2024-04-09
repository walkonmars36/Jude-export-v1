const fullName = document.getElementById("name");
const email = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const formDone = document.querySelector(".w-form-done");
const formFail = document.querySelector(".w-form-fail");
const submitButton = document.getElementById("submit-button");

let hasError = false;

fullName.addEventListener("blur", function () {
  if (fullName.value === "") {
    nameError.style.display = "block";
    fullName.style.borderColor = "var(--swatch--error)";
    hasError = true;
  } else {
    nameError.style.display = "none";
    fullName.style.borderColor = "";
    hasError = false; // Update error state
  }
});

email.addEventListener("blur", function () {
  if (email.value === "" || !validateEmail(email.value)) {
    emailError.style.display = "block";
    email.style.borderColor = "var(--swatch--error)";
    hasError = true;
  } else {
    emailError.style.display = "none";
    email.style.borderColor = "";
    hasError = false; // Update error state
  }
});

// Listen for form submission
submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Additional validation to prevent form submission when either name or email field is empty
  if (fullName.value === "" || email.value === "") {
    // Display error messages
    nameError.style.display = fullName.value === "" ? "block" : "none";
    emailError.style.display = email.value === "" ? "block" : "none";
    fullName.style.borderColor =
      fullName.value === "" ? "var(--swatch--error)" : "";
    email.style.borderColor = email.value === "" ? "var(--swatch--error)" : "";
    hasError = true;
  }

  // Check for errors before submitting the form
  if (hasError) {
    formFail.style.display = "block";
    formDone.style.display = "none";
  } else {
    formFail.style.display = "none";
    formDone.style.display = "block";
    // Form is valid, submit the form
    this.closest("form").submit();
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
