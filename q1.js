// Q1 - E-Commerce Product Manager (Classes + Objects)
// Product class with id, name, price, category. Methods: applyDiscount, details
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Apply percentage discount (e.g., 10 means 10%)
  applyDiscount(percent) {
    const discounted = this.price - (this.price * percent) / 100;
    // Do not mutate original price; return new value
    return Number(discounted.toFixed(2));
  }

  // Display details in formatted string
  details() {
    return `Product #${this.id}: ${this.name} | Category: ${this.category} | Price: $${this.price}`;
  }
}

// create products and store in array
const products = [
  new Product(1, 'Laptop', 55000, 'Electronics'),
  new Product(2, 'Shoes', 1200, 'Fashion'),
  new Product(3, 'Phone', 35000, 'Electronics'),
  new Product(4, 'T-Shirt', 800, 'Fashion'),
  new Product(5, 'Watch', 5000, 'Accessories')
];

console.log('All products:');
products.forEach(p => console.log(p.details()));

// Display products with price > 1000
console.log('\nProducts with price > 1000:');
const expensive = products.filter(p => p.price > 1000);
expensive.forEach(p => console.log(p.details()));

// Example of applyDiscount
console.log('\nDiscount example (10% on product 1):', products[0].applyDiscount(10));
