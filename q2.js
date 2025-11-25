// Q2 – String Manipulation Report

let product = " wireless headphones PRO ";
let cleaned = product.trim().toLowerCase();
let words = cleaned.split(" ").filter(w=>w);
let capWords = words.map(w => w[0].toUpperCase() + w.slice(1));
let finalTitle = capWords.join(" ").replace("Pro", "Pro Edition");

console.log("Cleaned Title:", finalTitle);
console.log("Length:", finalTitle.length);
