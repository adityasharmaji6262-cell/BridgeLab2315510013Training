\
// Q2 - Student Form Validator (RegExp)
// Validates Name (alphabets), Email, Phone(10 digits), Password (1 uppercase,1 number,1 special)
// Shows red border + error message if invalid, green if valid

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('student-form');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const password = document.getElementById('password');

  const nameMsg = document.getElementById('name-msg');
  const emailMsg = document.getElementById('email-msg');
  const phoneMsg = document.getElementById('phone-msg');
  const passwordMsg = document.getElementById('password-msg');

  // regex patterns
  const nameRe = /^[A-Za-z ]+$/;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^\d{10}$/;
  const passwordRe = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/; // min 6 with required chars

  function setValid(el, msgEl) {
    el.classList.remove('error'); el.classList.add('valid'); msgEl.textContent='';
  }
  function setInvalid(el, msgEl, message) {
    el.classList.remove('valid'); el.classList.add('error'); msgEl.textContent = message;
  }

  function validateField(el, re, msgEl, message) {
    const val = el.value.trim();
    if (!val) { setInvalid(el, msgEl, 'Required'); return false; }
    if (!re.test(val)) { setInvalid(el, msgEl, message); return false; }
    setValid(el, msgEl); return true;
  }

  // live validation on input
  [name, email, phone, password].forEach(field => {
    field.addEventListener('input', () => {
      if (field === name) validateField(name, nameRe, nameMsg, 'Name must contain only letters');
      if (field === email) validateField(email, emailRe, emailMsg, 'Invalid email format');
      if (field === phone) validateField(phone, phoneRe, phoneMsg, 'Phone must be 10 digits');
      if (field === password) validateField(password, passwordRe, passwordMsg, 'Password needs uppercase, number, special char, min 6');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const v1 = validateField(name, nameRe, nameMsg, 'Name must contain only letters');
    const v2 = validateField(email, emailRe, emailMsg, 'Invalid email format');
    const v3 = validateField(phone, phoneRe, phoneMsg, 'Phone must be 10 digits');
    const v4 = validateField(password, passwordRe, passwordMsg, 'Password needs uppercase, number, special char, min 6');
    if (v1 && v2 && v3 && v4) {
      alert('Form valid!');
    }
  });
});
