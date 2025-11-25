// Q8 - Order Processing Flow: Async Retry Mechanism
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) reject(new Error('Submit failed'));
      else resolve('Order submitted');
    }, 500);
  });
}

async function processOrder(maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await submitOrder();
      console.log('Attempt', attempt + ': Success'); // note: attempt label as requested
      return res;
    } catch (err) {
      console.log('Attempt', attempt + ': Failed');
      if (attempt === maxAttempts) throw new Error('Order could not be processed');
    }
  }
}

(async () => {
  try {
    await processOrder(3);
    console.log('Order processed successfully');
  } catch (err) {
    console.error(err.message);
  }
})();
