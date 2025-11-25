// Q4 – Array Performance Analyzer

let scores = Array.from({length:8}, () => Math.floor(Math.random()*71)+30);

let max = Math.max(...scores);
let min = Math.min(...scores);
let avg = scores.reduce((a,b)=>a+b,0) / scores.length;
let passed = scores.filter(s => s >= 50).length;

console.log("Scores:", scores);
console.log(`Highest: ${max}, Lowest: ${min}`);
console.log("Average:", avg);
console.log("Passed:", passed);
