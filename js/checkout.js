const form = document.querySelector("#checkoutform");
const userNamelength = document.querySelector("#name");
const userNamelengthError = document.querySelector("#namelengthError");
const userName = document.querySelector("#name");
const userNameError = document.querySelector("#nameError");
const userPhone = document.querySelector("#phone");
const userPhoneError = document.querySelector("#phoneError");
const userEmail = document.querySelector("#email");
const userEmailError = document.querySelector("#emailError");
const userStreet = document.querySelector("#street");
const userStreetError = document.querySelector("#streetError");
const userStreetnr = document.querySelector("#streetnr");
const userStreetnrError = document.querySelector("#streetnrError");
const userPostal = document.querySelector("#postal");
const userPostalError = document.querySelector("#postalError");
const userCity = document.querySelector("#city");
const userCityError = document.querySelector("#cityError");
const userCreditCard = document.querySelector("#CreditCard");
const userCreditCardError = document.querySelector("#CreditCardError");
const userCvc = document.querySelector("#cvc");
const userCvcError = document.querySelector("#cvcError");

function validateForm() {
  event.preventDefault();

  if (checkLength(userName.value, 0) === true) {
    userNamelengthError.style.display = "none";
  } else {
    userNamelengthError.style.display = "block";
  }

  if (validateLetters(userName.value) === true) {
    userNameError.style.display = "none";
  } else {
    userNameError.style.display = "block";
  }

  if (checkLength(userPhone.value, 7) === true) {
    userPhoneError.style.display = "none";
  } else {
    userPhoneError.style.display = "block";
  }

  if (validateEmail(userEmail.value) === true) {
    userEmailError.style.display = "none";
  } else {
    userEmailError.style.display = "block";
  }

  if (checkLength(userStreet.value, 0) === true) {
    userStreetError.style.display = "none";
  } else {
    userStreetError.style.display = "block";
  }

  if (checkLength(userPostal.value, 3) === true) {
    userPostalError.style.display = "none";
  } else {
    userPostalError.style.display = "block";
  }

  if (checkLength(userStreetnr.value, 0) === true) {
    userStreetnrError.style.display = "none";
  } else {
    userStreetnrError.style.display = "block";
  }

  if (checkLength(userCity.value, 0) === true) {
    userCityError.style.display = "none";
  } else {
    userCityError.style.display = "block";
  }

  if (checkLength(userCreditCard.value, 14) === true) {
    userCreditCardError.style.display = "none";
  } else {
    userCreditCardError.style.display = "block";
  }

  if (checkLength(userCvc.value, 0) === true) {
    userCvc.style.display = "none";
  } else {
    userCvcError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validateLetters(name) {
  const regEx = /^[a-zA-Z]*$/g;
  const patternMatches = regEx.test(name);
  return patternMatches;
}
