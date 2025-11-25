// Q5 - Movie Ticket Booking (validation with RegExp)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const seats = document.getElementById('seats');
  const ticket = document.getElementById('ticket');

  const nameRe = /^[A-Za-z ]+$/;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    if (!nameRe.test(name.value.trim())) { document.getElementById('name-msg').textContent='Invalid name'; valid=false; } else document.getElementById('name-msg').textContent='';
    if (!emailRe.test(email.value.trim())) { document.getElementById('email-msg').textContent='Invalid email'; valid=false; } else document.getElementById('email-msg').textContent='';
    const s = Number(seats.value);
    if (!Number.isInteger(s) || s<1 || s>10) { document.getElementById('seats-msg').textContent='Seats must be 1-10'; valid=false; } else document.getElementById('seats-msg').textContent='';
    if (valid) {
      const booking = { name: name.value.trim(), email: email.value.trim(), seats: s };
      ticket.textContent = JSON.stringify(booking, null, 2);
    }
  });
});
