package util;
public class Q7_BankAccount{
    public static void main(String[] args){
        BankAccount b=new BankAccount();
        b.deposit(5000);
        System.out.println(b.getBalance());
        try{b.withdraw(6000);}catch(Exception e){System.out.println(e.getMessage());}
    }
}
class BankAccount{
    private double balance=0;
    void deposit(double a){ if(a<=0) throw new RuntimeException("Invalid"); balance+=a; }
    void withdraw(double a){ if(a>balance) throw new RuntimeException("Insufficient"); balance-=a; }
    double getBalance(){return balance;}
}
