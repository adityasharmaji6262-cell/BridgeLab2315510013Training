// Q1 – Scope Conflict Resolver

let bonus = 5000; // global

function calculateSalary(isPermanent) {
  let salary = 40000;
  let total = salary + (isPermanent ? bonus : 0);
  console.log("Is Permanent:", isPermanent, "| Total Salary:", total);
}

calculateSalary(true);
calculateSalary(false);
