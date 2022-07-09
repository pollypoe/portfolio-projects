const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});


signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    /*var psd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;*/
    var lowercase = /^(?=.*[a-z]).+$/;
    var uppercase = /^(?=.*[A-Z]).+$/;
    var digit = /^(?=.*[0-9]).+$/;
    var character = /^(?=.*[^a-zA-Z0-9]).+$/;
    

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 characters long.')
    } else if (passwordValue != password.value.match(lowercase)) {
        setError(password, 'Password must have at least one lowercase letter.')
    } else if (passwordValue != password.value.match(uppercase)) {
        setError(password, 'Password must have at least one uppercase letter.')
    } else if (passwordValue != password.value.match(digit)) {
        setError(password, 'Password must have at least one numeric digit.')
    } else if (passwordValue != password.value.match(character)) {
        setError(password, 'Password must have at least one special character.')
    } /*else if (passwordValue != password.value.match(psd) ) {
        setError(password, 'Password must have at least one lowercase letter. one uppercase letter, one numeric digit, and one special character.')
    }*/ else {
        setSuccess(password);
    }
};