// Q6 - Employee Management System
class Employee {
  constructor(id, name, department, salary) {
    this.id = id; this.name = name; this.department = department; this.salary = salary;
  }
  getAnnualSalary() { return this.salary * 12; }
  applyBonus(percent) { this.salary += (this.salary * percent) / 100; }
}

const employees = [
  new Employee(1,'Alice','HR',4000),
  new Employee(2,'Bob','Dev',6000),
  new Employee(3,'Cara','Dev',5500),
  new Employee(4,'Dan','Sales',4500),
  new Employee(5,'Eve','Support',3500)
];

employees.forEach(e => console.log(e.name, 'Annual:', e.getAnnualSalary()));
const totalAnnual = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log('Total annual payout:', totalAnnual);
