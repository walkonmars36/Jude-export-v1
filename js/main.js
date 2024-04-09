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

// read more button
const readMore = document.querySelector(".read-more");
const readLess = document.querySelector(".read-less");
const moreText = document.querySelector(".therapy_read-more");
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();

readMore.addEventListener("click", () => {
  console.log("clicked");
  moreText.classList.add("visible");
  readMore.style.display = "none";
  readLess.style.display = "block";
});

readLess.addEventListener("click", () => {
  moreText.classList.remove("visible");
  readMore.style.display = "block";
  readLess.style.display = "none";
});

// back to top button
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  const scrollPercent =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  if (scrollPercent >= 40) {
    backToTopBtn.style.opacity = "1";
  } else {
    backToTopBtn.style.opacity = "0";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// nav link underline
const links = document.querySelectorAll(".primary-navigation li a");
links.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    this.classList.add("underline");
  });
  link.addEventListener("mouseleave", function () {
    this.classList.remove("underline");
  });
});

// copyright
year.textContent = currentYear;
