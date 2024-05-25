document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    const newTransformValue = `translateX(-${currentIndex * 100}%)`;
    document.querySelector(".slides").style.transform = newTransformValue;
  }

  prevButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 15000);
});
window.addEventListener("load", function () {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  // Helper functions for validation
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidName(name) {
    return name.trim().length >= 3;
  }

  function isValidPhoneNumber(phoneNumber) {
    return phoneNumber.trim().length >= 7;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted");

    // Reset previous error messages
    clearErrorMessages();

    let isFormValid = true;

    if (!isValidName(nameInput.value)) {
      displayErrorMessage(
        nameInput,
        "Name must be at least 3 characters long."
      );
      isFormValid = false;
    }
    if (!isValidPhoneNumber(phoneInput.value)) {
      displayErrorMessage(
        phoneInput,
        "Phone number must be atleast 7 digits long"
      );
      isFormValid = false;
    }
    if (!isValidEmail(emailInput.value)) {
      displayErrorMessage(emailInput, "Please enter a valid email address.");
      isFormValid = false;
    }

    if (messageInput.value.trim() === "") {
      displayErrorMessage(messageInput, "Please enter a message.");
      isFormValid = false;
    }

    if (isFormValid) {
      // Form is valid, you can submit the form or perform any other action
      console.log("Form is valid");
      // form.submit(); // Uncomment this line to submit the form
    }
  });

  function displayErrorMessage(input, message) {
    const errorContainer = document.createElement("div");
    errorContainer.classList.add("error-message");
    errorContainer.textContent = message;
    input.parentNode.appendChild(errorContainer);
  }

  function clearErrorMessages() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((message) => message.remove());
  }

  const bookingForm = document.querySelector(".booking_form");
  if (bookingForm) {
    //booking form
    const emailInput = document.getElementById("email");
    const guestsInput = document.getElementById("guests");
    const arrivalDateInput = document.getElementById("arrival-date");
    const departureDateInput = document.getElementById("departure-date");

    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      clearErrorMessages();

      let isFormValid = true;

      if (!validateName(nameInput.value)) {
        displayErrorMessage(nameInput, "Please enter a valid name.");
        isFormValid = false;
      }
      if (!validateEmail(emailInput.value)) {
        displayErrorMessage(emailInput, "Please enter a valid email address.");
        isFormValid = false;
      }
      if (!validateGuests(guestsInput.value)) {
        displayErrorMessage(
          guestsInput,
          "Please enter a valid number of guests."
        );
        isFormValid = false;
      }
      if (!validateDate(arrivalDateInput.value)) {
        displayErrorMessage(arrivalDateInput, "Please select an arrival date.");
        isFormValid = false;
      }
      if (!validateDate(departureDateInput.value)) {
        displayErrorMessage(
          departureDateInput,
          "Please select a departure date."
        );
        isFormValid = false;
      }
      if (isFormValid) {
        showSuccessAlert();
      }
    });
    function validateName(name) {
      return name.trim().length >= 3;
    }
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
      return emailRegex.test(email);
    }
    function validateGuests(guests) {
      return guests >= 1;
    }
    function validateDate(date) {
      return date !== "";
    }
    function displayErrorMessage(input, message) {
      const errorContainer = input.nextElementSibling;
      errorContainer.textContent = message;
    }
    function clearErrorMessages() {
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach((message) => (message.textContent = ""));
    }
    function showSuccessAlert() {
      const alertContainer = document.createElement("div");
      alertContainer.classList.add("success-alert");
      alertContainer.textContent = "Your tour has been booked successfully!";
      document.body.appendChild(alertContainer);
      setTimeout(() => {
        alertContainer.remove();
      }, 10000);
    }
    //booking form ends
  }
});
