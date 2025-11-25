// Q6 - E-Commerce Dashboard: Product Card Fetcher
// Run in Node.js (v18+) or browser. Using fetch with async/await and error handling.

async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Network response not ok');
    const products = await res.json();
    for (const p of products) {
      console.log('Product:', p.title);
      console.log('Price: $' + p.price);
      console.log('Image:', p.image);
      console.log('---');
    }
  } catch (err) {
    console.error('Failed to load products. Please try again.');
  }
}

fetchProducts();
