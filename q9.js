// Q9 - Debugging the Event Loop
// Prediction (comment):
// Script start
// Script end
// Promise callback
// Timeout callback
// Explanation: microtasks (Promise callbacks) run after the current stack,
// before macrotasks (setTimeout).

console.log('Script start');
setTimeout(() => console.log('Timeout callback'), 0);
Promise.resolve().then(() => console.log('Promise callback'));
console.log('Script end');
