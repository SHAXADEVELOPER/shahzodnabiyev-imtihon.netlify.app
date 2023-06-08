const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

const checkPassword = (value) => {
  if (value.length > 8) {
    localStorage.setItem('password', value);
    return value;
  }
};

const checkUserName = (value) => {
  if (value.length > 8 && value.includes('@gmail.com')) {
    localStorage.setItem('username', value);
    return value;
  }
};

password.addEventListener('input', () => {
  if (checkPassword(password.value)) {
    password.classList.add('valid');
    password.classList.remove('invalid');
  } else {
    password.classList.remove('valid');
    password.classList.add('invalid');
  }
});

username.addEventListener('input', () => {
  if (checkUserName(username.value)) {
    username.classList.add('valid');
    username.classList.remove('invalid');
  } else {
    username.classList.remove('valid');
    username.classList.add('invalid');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkPassword(password.value) && checkUserName(username.value)) {
    password.classList.add('valid');
    password.classList.remove('invalid');
    window.location.href = './header.html';
  } else {
    password.classList.remove('valid');
    password.classList.add('invalid');
  }
});