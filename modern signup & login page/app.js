const form = document.getElementById("form")
const firstname_input = document.getElementById("firstname-input")
const email_input = document.getElementById("email-input")
const password_input = document.getElementById("password-input")
const repeat_password_input = document.getElementById("repeat-password-input")
const error_message = document.getElementById("error-message")


form.addEventListener("submit", (e) => {
  let errors = []

  if(firstname_input) {
    // If we have a firstname input then we are in the signup page
    errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
  }

  else{
    // if we don't have the firstname input then we are in the login page
    errors = getlLoginFormErrors(email_input.value, password_input.value)
  }

  if (errors.length > 0) {
    // if there are any errors
    e.preventDefault()
    error_message.innerText = errors.join(". ") //this line updates the paragraph with the error message with the actual error from the function
    // the join function joins diferent strings into one string and the characters (.) and a white space inside the parenthesis are used in between each error message while joining them
  }
})


// defining functions
function getSignupFormErrors(firstname, email, password, repeatPassword){
  let errors = [] //we create an empty list for errors

  if(firstname == '' || firstname == null){
    errors.push("First name is required") // we push specified string into the errors list
    firstname_input.parentElement.classList.add("incorrect") // here we add the incorret class to the parent element of the form which is the div element
  }

  if(email == '' || email == null){
    errors.push("Email is required") // we push specified string into the errors list
    email_input.parentElement.classList.add("incorrect")
  }

  if(password == '' || password == null){
    errors.push("Password is required") // we push specified string into the errors list
    password_input.parentElement.classList.add("incorrect")
  }

  if(password.length < 8){
    errors.push("Password must have at least 8 characters")
    password_input.parentElement.classList.add("incorrect")
  }

  if(repeatPassword == '' || repeatPassword == null){
    errors.push(" Repeat Password is required") // we push specified string into the errors list
    repeat_password_input.parentElement.classList.add("incorrect")
  }

  if(password !== repeatPassword){
    errors.push("Password does not match repeated password")
    password_input.parentElement.classList.add("incorrect")
    repeat_password_input.parentElement.classList.add("incorrect")
  }

  return errors;
}

function getlLoginFormErrors(email, password){
  let errors = []

  if(email == '' || email == null){
    errors.push("Email is required") // we push specified string into the errors list
    email_input.parentElement.classList.add("incorrect")
  }

  if(password == '' || password == null){
    errors.push("Password is required") // we push specified string into the errors list
    password_input.parentElement.classList.add("incorrect")
  }

  return errors;
}

const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove("incorrect")
      error_message.innerText = ''
    }
  })
})