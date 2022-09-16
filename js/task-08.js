const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault();
    
    const {email, password} = event.currentTarget;
    const loginValues = {};

    if (email.value === '' || password.value === '') alert('Будь ласка, заповніть усі поля!');
    else {
        loginValues.email = email.value;
        loginValues.password = password.value;
        console.log(loginValues);
        event.currentTarget.reset();
    }
}