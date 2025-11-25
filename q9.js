// Q9 - Shopping Cart Total (Classes + Coupon RegExp)
class Cart {
  constructor() { this.items = []; }
  addItem(name, price, qty=1) { this.items.push({name, price, qty}); }
  getTotal() { return this.items.reduce((s,i)=>s + i.price * i.qty, 0); }
  applyCoupon(code) {
    // coupon format SAVE20 or DISC10 (letters then digits)
    const re = /^(?:SAVE|DISC)(\d{1,2})$/i;
    const m = re.exec(code);
    if (!m) throw new Error('Invalid coupon format');
    const pct = Number(m[1]);
    if (pct <= 0 || pct > 100) throw new Error('Invalid discount percent');
    const total = this.getTotal();
    const discounted = total - (total * pct)/100;
    return Number(discounted.toFixed(2));
  }
}

// demo
const cart = new Cart();
cart.addItem('Phone', 300, 1);
cart.addItem('Charger', 20, 2);
cart.addItem('Case', 15, 1);
console.log('Total:', cart.getTotal());
try {
  console.log('After coupon SAVE10:', cart.applyCoupon('SAVE10'));
} catch (err) { console.error(err.message); }

if (typeof module !== 'undefined') module.exports = { Cart };
