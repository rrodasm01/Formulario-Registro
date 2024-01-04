let formElement = document.getElementById("loginForm");
let inputNameElement = document.getElementById("userName");
let inputTelefonoElement = document.getElementById("numeroTelefono");
let inputPasswordElement = document.getElementById("userPassword");
let inputPassword2Element = document.getElementById("userPassword2");
let submitButtonElement = document.getElementById("submitButton");
let condicionesElement = document.getElementById("condiciones");

let nameValid = false;
let telefonoValid = false;
let passwordValid = false;
let password2Valid = false;
let condicionesValid = false;
let regexName = /^[a-zA-Z ]{1,20}$/;
let regexTelefono = /^[0-9]{9}$/;
let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const USERNAME_INVALID = "Nombre con sólo letras y espacios";
const TELEFONO_INVALID = "Tiene que tener 9 dígitos";
const PASSWORD_INVALID = "Contraseña con 6 o más carácteres un dígito y letra Mayus y Minus";
const PASSWORD2_INVALID = "La contraseña debe coincidir con la anterior";

inputNameElement.addEventListener("blur", validateName);
inputTelefonoElement.addEventListener("blur", validateTelefono);
inputPasswordElement.addEventListener("blur", validatePassword);
inputPassword2Element.addEventListener("blur", validatePassword2);
condicionesElement.addEventListener("click", validateCondiciones);

function checkFullForm() {
  if (nameValid && passwordValid && telefonoValid && password2Valid && condicionesValid) {
    submitButtonElement.classList.remove("notAvailable");
    submitButtonElement.disabled = false;
  } else {
    submitButtonElement.classList = "notAvailable";
    submitButtonElement.disabled = true;
  }
}

function validateName() {
  nameValid = regexName.test(inputNameElement.value);
  inputNameElement.className = nameValid ? "success" : "error";

  if (!nameValid) {
    // Obtenemos la etiqueta <small> del div al que pertenece el input
    inputNameElement.parentNode.getElementsByTagName("small")[0].innerHTML = USERNAME_INVALID;
  } else {
    inputNameElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
  }

  checkFullForm();
}

function validatePassword() {
  passwordValid = regexPassword.test(inputPasswordElement.value);
  inputPasswordElement.className = passwordValid ? "success" : "error";

  if (!passwordValid) {
    inputPasswordElement.parentNode.getElementsByTagName("small")[0].innerHTML = PASSWORD_INVALID;
  } else {
    inputPasswordElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
  }

  checkFullForm();
}

function validateTelefono() {
    telefonoValid = regexTelefono.test(inputTelefonoElement.value);
    inputTelefonoElement.className = telefonoValid ? "success" : "error";
  
    if (!telefonoValid) {
        inputTelefonoElement.parentNode.getElementsByTagName("small")[0].innerHTML = TELEFONO_INVALID;
    } else {
        inputTelefonoElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }
  
    checkFullForm();
  }

  function validatePassword2() {

    if (inputPasswordElement.value === inputPassword2Element.value){
        password2Valid = true;
    } else {
        password2Valid = false;
    }

    inputPassword2Element.className = password2Valid ? "success" : "error";
  
    if (!password2Valid) {
      inputPassword2Element.parentNode.getElementsByTagName("small")[0].innerHTML = PASSWORD2_INVALID;
    } else {
      inputPassword2Element.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }
  
    checkFullForm();
  }

  function validateCondiciones() {

    if (condicionesElement.checked) {
      condicionesValid = true;
    } else {
      condicionesValid = false;
    }
  
    checkFullForm();
  }

/*
Cuando envíamos el formulario (submit), el evento de envío (submit) se activa antes de que
la solicitud se envíe al servidor. Esto le da la oportunidad de validar los datos del
formulario. Si los datos del formulario no son válidos, puede dejar de enviar el formulario.
*/
formElement.addEventListener('submit', event => {
  /*
  Para detener el envío del formulario, llamar al método preventDefault() del objeto de evento
  dentro del controlador de eventos de envío de esta manera:
  */
  event.preventDefault();

  /*
  Para enviar el formulario tras validarlo, llamariamos al método submit() del objeto del
  formulario:
  */
  //formElement.submit();

  // Sólo probamos que funciona con un alert()
  alert("Enviado");


});
