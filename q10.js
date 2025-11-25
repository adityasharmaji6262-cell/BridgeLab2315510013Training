// Q10 - The Final Delivery: Async Pipeline Debugger
function randomDelay() {
  return Math.floor(Math.random()*1000) + 1000; // 1-2s
}

function step(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error(name + ' failed'));
      console.log('Step:', name);
      resolve(name + ' done');
    }, randomDelay());
  });
}

async function runPipeline() {
  console.log('Start Pipeline');
  try {
    await step('Order taken');
    await step('Food prepared');
    await step('Package ready');
    await step('Out for delivery');
    await step('Delivered');
    console.log('Delivery completed!');
  } catch (err) {
    console.error('Pipeline failed!', err.message);
  }
}

runPipeline();
