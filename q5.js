// Q5 - Frontend Rush: Avoiding Callback Hell
// Five stages each takes ~1s
function stage(name, cb) {
  setTimeout(() => {
    console.log('Stage:', name);
    cb && cb();
  }, 1000);
}

// Callback hell version (nested)
function runPipelineCallbacks() {
  stage('design', () => {
    stage('build', () => {
      stage('test', () => {
        stage('deploy', () => {
          stage('celebrate', () => {
            console.log('Pipeline (callbacks) completed');
          });
        });
      });
    });
  });
}

// Promise-based small wrapper
function stagePromise(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Stage:', name);
      resolve(name);
    }, 1000);
  });
}

// Async/await version for readability
async function runPipelineAsync() {
  // async/await linearizes flow and avoids deep nesting
  await stagePromise('design');
  await stagePromise('build');
  await stagePromise('test');
  await stagePromise('deploy');
  await stagePromise('celebrate');
  console.log('Pipeline (async/await) completed');
}

// Run both to compare
console.log('--- Running callback version ---');
runPipelineCallbacks();

// Delay starting async version to avoid interleaving logs badly
setTimeout(() => {
  console.log('--- Running async/await version ---');
  runPipelineAsync();
}, 7000);

/*
Comment: async/await improves readability because asynchronous steps are written
in sequential style (top-to-bottom) without nested callbacks, making error handling
and flow control simpler.
*/
