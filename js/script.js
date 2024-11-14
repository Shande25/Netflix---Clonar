let inputTouched = {
    email: false,
    password: false
}

let codeLoginActive = false; // Variable para controlar el estado de la funcionalidad

const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const inputWrapperEmail = document.getElementById("input-wrapper-email");
const inputWrapperPassword = document.getElementById("input-wrapper-password");
const warningEmail = document.getElementById("warningEmail");
const warningPassword = document.getElementById("warningPassword");

const inputOnBlur = (ev) => {
    if (inputTouched.email) {
        if (!validateEmail(inputEmail.value) && !validatePhone(inputEmail.value)) {
            warningEmail.style.display = "block";
            inputEmail.style.borderBottom = '2px solid #e87c03';
        } else {
            warningEmail.style.display = "none";
            inputEmail.style.borderBottom = "none";
        }
    }
    if (inputTouched.password) {
        if (!(inputPassword.value.length >= 4 && inputPassword.value.length <= 60)) {
            warningPassword.style.display = "block";
            inputPassword.style.borderBottom = '2px solid #e87c03';
        } else {
            warningPassword.style.display = "none";
            inputPassword.style.borderBottom = "none";
        }
    }
}

function toggleCodeLogin() {
    // Elementos de la interfaz
    const passwordWrapper = document.getElementById("passwordWrapper");
    const signinButtonWrapper = document.getElementById("loginButtonWrapper");
    const signinCodeButton = document.getElementById("signinCodeButton");

    // Verificar si el mensaje ya existe, si no, lo creamos
    let inaccessibleMessage = document.getElementById("inaccessibleMessage");
    if (!inaccessibleMessage) {
        inaccessibleMessage = document.createElement("div");
        inaccessibleMessage.id = "inaccessibleMessage";
        inaccessibleMessage.style.color = "#e87c03";
        inaccessibleMessage.style.fontSize = "16px";
        inaccessibleMessage.style.marginTop = "20px";
        inaccessibleMessage.textContent = "Función no accesible";
        // Añadirlo al final del formulario o en el lugar que desees
        document.querySelector(".login").appendChild(inaccessibleMessage);
    }

    // Si ya está activa la opción de código, mostrar la contraseña
    if (codeLoginActive) {
        // Restaurar la sección de contraseña
        passwordWrapper.style.display = "block"; // Mostrar la sección de contraseña
        signinButtonWrapper.style.display = "block"; // Mostrar el botón de inicio de sesión
        inaccessibleMessage.style.display = "none"; // Ocultar el mensaje de "Función no accesible"

        signinCodeButton.textContent = "Usar un código de inicio de sesión"; // Restablecer el texto del botón
        signinCodeButton.disabled = false; // Habilitar el botón nuevamente

        // Cambiar el estado a desactivado
        codeLoginActive = false;
    } else {
        // Ocultar la sección de contraseña y el botón de inicio de sesión
        passwordWrapper.style.display = "none"; 
        signinButtonWrapper.style.display = "none"; 

        // Mostrar el mensaje de "Función no accesible"
        inaccessibleMessage.style.display = "block"; 
        signinCodeButton.textContent = "Función no accesible"; // Cambiar el texto del botón
        signinCodeButton.disabled = true; // Deshabilitar el botón

        // Cambiar el estado a activado
        codeLoginActive = true;
    }
}

const inputOnFocus = (ev) => {
    inputTouched[ev.name] = true;
}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validatePhone = email => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(email).toLowerCase());
}
