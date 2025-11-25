package util;
public class Q4_EmployeeManager{
    public static void main(String[] args){
        Employee e=new Employee("Rohan","Sales");
        Employee m=new Manager("Meera","IT");
        System.out.println(e.work());
        System.out.println(m.work());
    }
}
class Employee{
    String name,dept;
    Employee(String n,String d){name=n;dept=d;}
    String work(){return name+" works in "+dept;}
}
class Manager extends Employee{
    Manager(String n,String d){super(n,d);}
    String work(){return name+" manages "+dept;}
}
