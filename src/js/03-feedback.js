const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form')
const email = document.querySelector('input[name="email"]')
const message = document.querySelector('textarea[name="message"]')

form.addEventListener('submit', onSubmit) 

function onSubmit (event) {
    event.preventDefault()
    const { email, message } = event.target.elements
    if (email.value === "" || message.value === "") {
        console.log("full fields");
    }
}

console.log("hi");