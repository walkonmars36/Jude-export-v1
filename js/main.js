const fullName = document.getElementById("name");
const email = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const formFail = document.querySelector(".w-form-fail");
const submitButton = document.getElementById("submit-button");
const readMore = document.querySelector(".read-more");
const readLess = document.querySelector(".read-less");
const moreText = document.querySelector(".therapy_read-more");
const backToTopBtn = document.getElementById("backToTopBtn");
const year = document.querySelector(".year");
const menuBtn = document.querySelector(".mob-menu-btn");

let hasError = false;

// Mobile menu

function toggleAriaExpanded() {
  const currentExpanded = menuBtn.getAttribute("aria-expanded");
  const newExpanded = currentExpanded === "true" ? "false" : "true";
  menuBtn.setAttribute("aria-expanded", newExpanded);
}

if (menuBtn) {
  menuBtn.addEventListener("click", toggleAriaExpanded);
}

// Form validation
if (fullName && email && nameError && emailError && formFail && submitButton) {
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
      email.style.borderColor =
        email.value === "" ? "var(--swatch--error)" : "";
      hasError = true;
    }

    // Check for errors before submitting the form
    if (hasError) {
      formFail.style.display = "block";
    } else {
      formFail.style.display = "none";
      // Form is valid, submit the form
      this.closest("form").submit();
    }
  });

  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
// read more button
if (readMore && readLess && moreText) {
  const readMore = document.querySelector(".read-more");
  const readLess = document.querySelector(".read-less");
  const moreText = document.querySelector(".therapy_read-more");
  const year = document.querySelector(".year");

  readMore.addEventListener("click", () => {
    moreText.classList.add("visible");
    readMore.style.display = "none";
    readLess.style.display = "inline-block";
  });

  readLess.addEventListener("click", () => {
    moreText.classList.remove("visible");
    readMore.style.display = "inline-block";
    readLess.style.display = "none";
  });
}
// back to top button
if (backToTopBtn) {
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    const scrollPercent =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;

    if (scrollPercent >= 35) {
      backToTopBtn.style.opacity = "1";
    } else {
      backToTopBtn.style.opacity = "0";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// copyright
if (year) {
  const currentYear = new Date().getFullYear();
  year.textContent = currentYear;
}
// link underline
function underlineOnHover(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      this.classList.add("underline");
    });
    element.addEventListener("mouseleave", function () {
      this.classList.remove("underline");
    });
  });
}

// Usage
underlineOnHover("a:not(.logo_wrap");
underlineOnHover(".read-more");
underlineOnHover(".read-less");
