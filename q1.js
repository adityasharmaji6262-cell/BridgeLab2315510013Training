// Q1 - The Startup Morning: Async Coffee Maker
// Each step returns a Promise that resolves after 1-2 seconds.
// Use Promise chaining and .catch() for errors (random failure simulated).

function waitRandom(min = 1000, max = 2000) {
  return new Promise(res => setTimeout(res, Math.floor(Math.random()*(max-min+1))+min));
}

function boilWater() {
  return waitRandom().then(() => {
    if (Math.random() < 0.15) throw new Error('Boiler failed');
    console.log('Water boiled');
    return 'boiled water';
  });
}

function brewCoffee(water) {
  return waitRandom().then(() => {
    if (Math.random() < 0.15) throw new Error('Brew error');
    console.log('Coffee brewed using', water);
    return 'brewed coffee';
  });
}

function pourCoffee(coffee) {
  return waitRandom().then(() => {
    if (Math.random() < 0.10) throw new Error('Cup cracked');
    console.log('Poured into cup:', coffee);
    return 'coffee ready';
  });
}

// Promise chaining
boilWater()
  .then(result => brewCoffee(result))
  .then(result => pourCoffee(result))
  .then(() => console.log('Coffee ready for the team!'))
  .catch(err => console.error('Coffee process failed:', err.message));
