let dob = document.getElementById("birthDate").value;
let weekDay = new Date(dob).getDay()

let gender = document.getElementsByName("gender")
let response = document.getElementById("response")

// reset fields in the form
function clearAnswer() {
  response.innerHTML = ''
}

// find users akan name
function akanName() {
  for (let i = 0, length = gender.length; i < length; i++) {
    if (gender[i].checked) {
      if (gender[i].value == 'male') {
        if (weekDay === 0) {
          response.innerHTML = 'Kwasi'
        } else if (weekDay === 1) {
          response.innerHTML = 'Kwadwo'
        } else if (weekDay === 2) {
          response.innerHTML = 'Kwabena'
        } else if (weekDay === 3) {
          response.innerHTML = 'Kwaku'
        } else if (weekDay === 4) {
          response.innerHTML = 'Yaw'
        } else if (weekDay === 5) {
          response.innerHTML = 'Kofi'
        } else {
          response.innerHTML = 'Kwame'
        }
      } else {
        if (weekDay === 0) {
          response.innerHTML = 'Akosua'
        } else if (weekDay === 1) {
          response.innerHTML = 'Adwoa'
        } else if (weekDay === 2) {
          response.innerHTML = 'Abenaa'
        } else if (weekDay === 3) {
          response.innerHTML = 'Akua'
        } else if (weekDay === 4) {
          response.innerHTML = 'Yaa'
        } else if (weekDay === 5) {
          response.innerHTML = 'Afua'
        } else {
          response.innerHTML = 'Ama'
        }
      }
    }
  }
}