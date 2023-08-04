const ui = {
  firstName: document.getElementById('name'),
  lastName: document.getElementById('last-name'),
  email: document.getElementById('email'),
  phoneNumber: document.getElementById('phone-number'),
  password: document.getElementById('password'),
  confirmedPassword: document.getElementById('confirm-password'),
  button: document.querySelector('button'),
  passErrorMessage: document.getElementById('pass-error-message'),
};

let userInfo = {
  firstName: null,
  lastName: null,
  email: null,
  phoneNumber: null,
  password: null,
  confirmedPassword: null,
  isConfirmed: false,
};

// STRIP TAGS FUNCTION TO PREVENT XSS ATTACKS
function stripTags(original) {
  return original.replace(/(<([^>]+)>)/gi, '');
}

ui.button.addEventListener('click', (e) => {
  const inputPass = stripTags(ui.password.value);
  const confirmPass = stripTags(ui.confirmedPassword.value);
  // const firstName = stripTags(ui.firstName.value);
  // const lastName = stripTags(ui.lastName.value);
  // const email = stripTags(ui.email.value);
  // const phoneNumber = stripTags(ui.phoneNumber.value);

  if (inputPass !== confirmPass) {
    e.preventDefault();
    ui.passErrorMessage.classList.remove('hidden');
    ui.password.classList.add('error');
    ui.confirmedPassword.classList.add('error');
  } else if (inputPass === confirmPass) {
    ui.passErrorMessage.classList.add('hidden');
    ui.password.classList.remove('error');
    ui.confirmedPassword.classList.remove('error');
  }
});
