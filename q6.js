// Q6 – Event-Based Counter Simulation

let count = 0;

function increment() {
  count++;
  console.log("Count:", count);
}

function decrement() {
  count--;
  console.log("Count:", count);
}

function simulateNested() {
  function inner() {
    count += 2;
    console.log("Nested Count:", count);
  }
  inner();
}

increment();
increment();
decrement();
simulateNested();
