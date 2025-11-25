// Q7 - The Lazy Loader: Promise.allSettled()
function loadProfile() { return new Promise((resolve, reject) => setTimeout(() => {
  if (Math.random()<0.2) reject('Profile failed'); else resolve('Profile Loaded');
}, 2000)); }
function loadPosts() { return new Promise((resolve, reject) => setTimeout(() => {
  if (Math.random()<0.2) reject('Posts failed'); else resolve('Posts Loaded');
}, 1500)); }
function loadMessages() { return new Promise((resolve, reject) => setTimeout(() => {
  if (Math.random()<0.2) reject('Messages failed'); else resolve('Messages Loaded');
}, 1000)); }

async function runAll() {
  const start = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const end = Date.now();
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') console.log('Module', i+1, 'succeeded:', r.value);
    else console.log('Module', i+1, 'failed:', r.reason);
  });
  console.log('Total time (ms):', end - start);
}

runAll();
