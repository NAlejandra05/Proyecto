var users = [
    { email: 'usuario1@example.com', password: 'MySecret12' },
    { email: 'usuario2@example.com', password: 'StrongPwd99' },
    { email: 'usuario3@example.com', password: 'Abcd1234' }
];

// logica botón de iniciar sesión
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (!username || !password) {
        displayError('Por favor, complete ambos campos.');
        return;
    }

    // Valida la contraseña antes de verificar al usuario
    if (validatePassword(password)) {
        // autenticación con una promesa 
        authenticate(username, password)
            .then(function(isValidUser) {
                if (isValidUser) {
                    window.location.href = 'index.html';
                } else {
                    alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
                }
            })
            .catch(function(error) {
                console.error('Error en la autenticación:', error);
            });
    } else {
        // alerta si la contraseña no cumple con los requisitos
        alert('La contraseña no cumple con los requisitos. Debe tener al menos 8 caracteres, una minúscula, una mayúscula y al menos 2 números.');
    }
}

// botón de limpiar campos
function clearFields() {
    // Limpia campos de entrada
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function authenticate(username, password) {
    return new Promise(function(resolve, reject) {
        // autenticación 
        var isValidUser = users.some(function(user) {
            return user.email === username && user.password === password;
        });

        // promesa de validacion usuario 
        setTimeout(function() {
            resolve(isValidUser);
        }, 2000);
    });
}

function validatePassword(password) {
    var lengthRegex = /^.{8,}$/;
    var lowercaseRegex = /[a-z]/;
    var uppercaseRegex = /[A-Z]/;
    var digitRegex = /\d/g;

    return (
        lengthRegex.test(password) &&
        lowercaseRegex.test(password) &&
        uppercaseRegex.test(password) &&
        (password.match(digitRegex) || []).length >= 2
    );
}
function displayError(message) {
    // Muestra un mensaje de error en el formulario
    var errorElement = document.createElement('p');
    errorElement.style.color = 'red';
    errorElement.textContent = message;
    document.getElementById('loginForm').appendChild(errorElement);

    // Elimina el mensaje después de 3 segundos
    setTimeout(function () {
        errorElement.remove();
    }, 3000);
}