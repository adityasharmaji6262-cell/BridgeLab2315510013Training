// Q3 - Bug Tracker: Callback to Promise Migration
// Original (callback) simulated; here we create getBugs() returning a Promise

function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// Promise-based version
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fail = Math.random() < 0.2; // 20% failure
      if (fail) return reject(new Error('Failed to fetch bugs (simulated)'));
      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

// Use it and handle errors
getBugs()
  .then(bugs => {
    console.log('Bugs fetched:');
    console.table(bugs.map((b, i) => ({id: i+1, bug: b})));
  })
  .catch(err => {
    console.error('Error while fetching bugs:', err.message);
  });
