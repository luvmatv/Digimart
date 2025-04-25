const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit',(e)=> {
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('Users')) || []
    const isUsersRegistered = Users.find(user => user.email === email)
    if(isUsersRegistered) {
        return alert('User already registered')
        
    }

    Users.push({name :name , email: email, password: password})
    localStorage.setItem('Users', JSON.stringify(Users))
    alert('User registered successfully')
    window.location.href = 'login.html' 
})


