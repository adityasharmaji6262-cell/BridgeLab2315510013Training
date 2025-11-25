// Q4 – Academic Performance Evaluator

let marks=[85,92,78,88,90];
let avg=marks.reduce((a,b)=>a+b,0)/marks.length;
let perc=avg;

let detained = marks.some(m=>m<35);

if(detained) console.log("Detained");
else if(perc>=85) console.log("Promoted with Distinction");
else if(perc>=50) console.log("Promoted");
else console.log("Detained");
