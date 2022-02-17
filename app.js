const password = document.querySelector('#password')
const confirmed = document.querySelector('#confirmed')
const errorText = document.querySelector('.error_text')

confirmed.addEventListener('focusout',()=> {
    console.log(password.value,confirmed.value)
    if(password.value !== confirmed.value) {
        password.classList.add('error')
        confirmed.classList.add('error')
        errorText.innerText = "*Passwords do not match"
    }
    if(password.value === confirmed.value && password.value !== "" & confirmed.value !== "") { 
        password.classList.add('correct')
        confirmed.classList.add('correct')
    }
})

