document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.querySelector('#loginForm');

    if(loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const Users = JSON.parse(localStorage.getItem('Users')) || []
            const validUser = Users.find(user => user.email === email && user.password === password)
            if (!validUser) {
                return alert('Usuario y/o contraseña incorrectos')
            }
            alert (`Bienvenido ${validUser.name}`)
            window.location.href = 'index.html'
        });
    } else {
        console.error('No se encontró el formulario de inicio de sesión');
    }
});