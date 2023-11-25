var users = [
    { email: 'usuario1@example.com', password: 'MySecret12' },
    { email: 'usuario2@example.com', password: 'StrongPwd99' },
    { email: 'usuario3@example.com', password: 'Abcd1234' }
];

// Función que se llama al hacer clic en el botón de iniciar sesión
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

     // Validar que se ingrese información en ambos campos
     if (!username || !password) {
        alert('Por favor, complete ambos campos.');
        return;
    }


    // Validar la contraseña antes de verificar al usuario
    if (validatePassword(password)) {
        // Simulación de autenticación con una promesa (puedes personalizar según tus necesidades)
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
        // Mostrar alerta si la contraseña no cumple con los requisitos
        alert('La contraseña no cumple con los requisitos. Debe tener al menos 8 caracteres, una minúscula, una mayúscula y al menos 2 números.');
    }
}

// Función que se llama al hacer clic en el botón de limpiar campos
function clearFields() {
    // Limpiar los valores de los campos de entrada
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function authenticate(username, password) {
    return new Promise(function(resolve, reject) {
        // Lógica de autenticación (simulación)
        var isValidUser = users.some(function(user) {
            return user.email === username && user.password === password;
        });

        // Simular una pequeña demora antes de resolver la promesa
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