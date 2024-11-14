// Función para alternar entre los formularios de inicio de sesión
const toggleCodeLogin = () => {
    const codeLogin = document.getElementById("codeLogin");
    const passwordWrapper = document.getElementById("passwordWrapper");
    const signinCodeButton = document.getElementById("signinCodeButton");

    // Si el formulario con el código está oculto, lo mostramos y ocultamos el formulario de contraseña
    if (codeLogin.style.display === "none") {
        codeLogin.style.display = "block"; // Muestra el formulario para ingresar el código
        passwordWrapper.style.display = "none"; // Oculta el formulario de contraseña
        signinCodeButton.textContent = "Usar contraseña"; // Cambia el texto del botón a "Usar contraseña"
    } else {
        // Si el formulario con el código está visible, lo ocultamos y mostramos el formulario de contraseña
        codeLogin.style.display = "none"; // Oculta el formulario para ingresar el código
        passwordWrapper.style.display = "block"; // Muestra el formulario de contraseña
        signinCodeButton.textContent = "Usar un código de inicio de sesión"; // Cambia el texto del botón a "Usar un código de inicio de sesión"
    }
}

// Función para validar el correo electrónico
const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Función para validar la contraseña
const validatePassword = (password) => {
    return password.length >= 4 && password.length <= 60;
}

// Función para validar el código de inicio de sesión
const validateCode = (code) => {
    const regex = /^[0-9]{6}$/;
    return regex.test(code);
}

// Función para manejar la validación del formulario al intentar iniciar sesión
const handleLoginSubmit = (event) => {
    event.preventDefault();

    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    const code = document.getElementById("codeInput").value;

    const emailWarning = document.getElementById("warningEmail");
    const passwordWarning = document.getElementById("warningPassword");
    const codeWarning = document.getElementById("warningCode");

    let isValid = true;

    // Validación del correo electrónico
    if (!validateEmail(email)) {
        emailWarning.style.display = "block";
        isValid = false;
    } else {
        emailWarning.style.display = "none";
    }

    // Validación de la contraseña
    if (password && !validatePassword(password)) {
        passwordWarning.style.display = "block";
        isValid = false;
    } else {
        passwordWarning.style.display = "none";
    }

    // Validación del código, solo si se está utilizando el inicio de sesión con código
    if (code && !validateCode(code)) {
        codeWarning.style.display = "block";
        isValid = false;
    } else {
        codeWarning.style.display = "none";
    }

    // Si todo es válido, se realiza la acción correspondiente
    if (isValid) {
        // Aquí puedes agregar la lógica para enviar el formulario o realizar una acción, como la autenticación
        console.log("Formulario válido. Procediendo con el inicio de sesión.");
        // Ejemplo: document.getElementById("loginForm").submit();
    }
}

// Agregar el evento para manejar el envío del formulario
document.getElementById("loginForm").addEventListener("submit", handleLoginSubmit);
