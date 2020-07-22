let dob = document.getElementById("birthDate")

// reset fields in the form
function clearAnswer() {
  response.innerHTML = ''
}

function akanName(e) {
  validDate()
}

// validate date input
function validDate() {
  let d = new Date(dob.value).getDate()
  let m = new Date(dob.value).getMonth() + 1 //getMonth() has a zero based index that's why the one is added (1-12 months)
  let y = new Date(dob.value).getFullYear()

  if (d <= 0 || d > 31) {
    alert('enter a valid day of month')
  } else if (m <= 0 || m > 12) {
    alert('enter a valid month')    
  } else if (y > new Date().getFullYear() ) {
    alert("enter a valid year")
  } else {
    assignName()
  }
}

// find users akan name
function assignName() {
  let gender = document.getElementsByName("gender")
  let response = document.getElementById("response")

  let weekDay = new Date(dob).getDay()

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
  event.preventDefault();
}