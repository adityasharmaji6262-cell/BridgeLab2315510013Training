// Q2 - Task Scheduler: Micro vs Macro Challenge
console.log('Start');

setTimeout(() => {
  console.log('macrotask: setTimeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('microtask: Promise.then callback');
});

console.log('Synchronous log');
console.log('End');

/*
Explanation (in comments):
- Output order will be:
  Start
  Synchronous log
  End
  microtask: Promise.then callback
  macrotask: setTimeout callback

- Reason: Synchronous code runs first. After current call stack finishes,
  microtasks (Promise callbacks) run before the event loop proceeds to macrotasks
  like setTimeout. Hence Promise.then runs before setTimeout even with 0ms.
*/
