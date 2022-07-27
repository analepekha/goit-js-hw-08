const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const LOCALSTORAGE_KEY = "feedback-form-state";
const userData = {}

form.addEventListener('input', handleInput)

function handleInput (event) {
    event.preventDefault()
    userData[event.target.name] = event.target.value
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
}

form.addEventListener('submit', handleSubmit) 

function handleSubmit (event) {
    event.preventDefault()
    const { email, message } = event.target.elements
    if (email.value === "" || message.value === "") {
        alert("Please, fill in all fields");
    }
    const formData = new FormData(form)
        formData.forEach((value, name) => { userData[name] = value });
    console.log(userData);
    event.currentTarget.reset();
    // localStorage.removeItem(LOCALSTORAGE_KEY)
}

