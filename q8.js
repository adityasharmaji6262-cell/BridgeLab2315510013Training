// Q8 - Dynamic Object Updater
let user = { name: "John", email: "john@mail.com", age: 21 };
function render() { document.getElementById('user-view').textContent = JSON.stringify(user, null, 2); }

document.addEventListener('DOMContentLoaded', () => {
  render();
  const form = document.getElementById('user-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('uname').value.trim();
    const email = document.getElementById('uemail').value.trim();
    const age = Number(document.getElementById('uage').value);
    if (name) user.name = name;
    if (email) user.email = email;
    if (!Number.isNaN(age)) user.age = age;
    render();
  });
});
