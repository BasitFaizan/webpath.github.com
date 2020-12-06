let menu = document.querySelector('#menuItems');
let nav = document.querySelector('.navbar');
nav.addEventListener('click', function() {
  nav.classList.toggle('navActive');
  menu.classList.toggle('active');

});



let form = document.getElementById('form');
let usernameval = document.getElementById('username');
let emailval = document.getElementById('email');
let phoneval = document.getElementById('number');
let passwordval = document.getElementById('password');
let cPasswordval = document.getElementById('cpassword');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validation();
})


const validation = () => {
  usernameval = username.value.trim();
  emailval = email.value.trim();
  phoneval = number.value.trim();
  passwordval = password.value.trim();
  cPasswordval = cpassword.value.trim();

  const isEmail = (emailval) => {
    var symbol = emailval.lastIndexOf('@');
    if (symbol < 1) return false;
    var dot = emailval.lastIndexOf('.');
    if (dot < symbol + 2) return false;
    else if (dot === symbol.length - 1) return false;
    return true;
  }


  if (usernameval === '') {
    setErrormessage(username, 'Username cannot be empty');
  }
  else if (usernameval.length < 3) {
    setErrormessage(username, 'username should be greater than 3 digit');
  }
  else {
    successMessage(username);
  }

  if (emailval === '') {
    setErrormessage(email, 'email cannot be empty');
  }
  else if (emailval.length < 3) {
    setErrormessage(email, 'email should be greater than 3 digit');
  }
  else if (!isEmail(emailval)) {
    setErrormessage(email, 'Invalid email')
  }
  else {
    successMessage(email);
  }

  if (phoneval === '') {
    setErrormessage(number, 'phone number cannot be empty');
  }
  else if (phoneval.length !== 10) {
    setErrormessage(number, 'phone number should be equal to 10 digit only');
  }
  else {
    successMessage(number);
  }

  if (passwordval === '') {
    setErrormessage(password, 'password cannot be empty');
  }
  else if (passwordval.length < 3) {
    setErrormessage(password, 'password should be greater than 3 digit');
  }
  else {
    successMessage(password);
  }

  if (cPasswordval === '') {
    setErrormessage(cpassword, 'password cannot be empty');
  }
  else if (cPasswordval.length < 3) {
    setErrormessage(cpassword, 'password should be greater than 3 digit');
  }
  else if (cPasswordval !== passwordval) {
    setErrormessage(cpassword, 'confirm password should be equal to password');
  }
  else {
    successMessage(cpassword);
  }

  function setErrormessage(input, error) {
    const formcontrol = input.parentElement;
      const small = formcontrol.querySelector('small');
      formcontrol.className = 'formControl errors';
      small.innerText = error;
  }

  function successMessage(input) {
    const formcontrol = input.parentElement;
      const small = formcontrol.querySelector('small');
      formcontrol.className = 'formControl success';
  }
}