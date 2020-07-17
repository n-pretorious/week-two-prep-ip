function akiName(){
  let dob = document.getElementById("birthDate").value;
  let weekDay = new Date(dob).getDay()

  let gender = document.getElementsByName('gender');

  for (let i = 0, length = gender.length; i < length; i++) {
    if (gender[i].checked) {
      // do whatever you want with the checked radio
      if (gender[i].value == "male") {
        if (weekDay === 0) {
          alert("Kwasi")
        } else if (weekDay === 1) {
          alert("Kwadwo")
        } else if (weekDay === 2) {
          alert("Kwabena")
        } else if (weekDay === 3) {
          alert("Kwaku")
        } else if (weekDay === 4) {
          alert("Yaw")
        } else if (weekDay === 5) {
          alert("Kofi")
        } else {
          alert("Kwame")
        }
      } else {
        if (weekDay === 0) {
          alert("Akosua")
        } else if (weekDay === 1) {
          alert("Adwoa")
        } else if (weekDay === 2) {
          alert("Abenaa")
        } else if (weekDay === 3) {
          alert("Akua")
        } else if (weekDay === 4) {
          alert("Yaa")
        } else if (weekDay === 5) {
          alert("Afua")
        } else {
          alert("Ama")
        }
      }
    }
  }
}