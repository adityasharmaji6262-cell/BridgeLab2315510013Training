// Q7 - Login Form Validation using RegExp
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login');
  const username = document.getElementById('username');
  const pwd = document.getElementById('pwd');
  const userMsg = document.getElementById('user-msg');
  const pwdMsg = document.getElementById('pwd-msg');
  const result = document.getElementById('result');

  function validateUsername(u) { return u.length >= 5; }
  function validatePassword(p) { return /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}/.test(p); }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    userMsg.textContent = ''; pwdMsg.textContent = ''; result.textContent = '';
    let ok = true;
    if (!validateUsername(username.value.trim())) { userMsg.textContent='Username must be at least 5 characters'; ok=false; }
    if (!validatePassword(pwd.value)) { pwdMsg.textContent='Password must be 8+ chars and include number, uppercase, lowercase and special'; ok=false; }
    if (ok) result.textContent = 'Login successful!';
  });
});
