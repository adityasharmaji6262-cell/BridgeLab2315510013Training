package util;
public class Q3_ProductDiscount{
    public static void main(String[] args){
        Product p1=new Product("Laptop",50000);
        Product p2=new Product("Headphones",3000);
        Product p3=new Product("Keyboard",1200);
        System.out.println(p1.applyDiscount(10));
        System.out.println(p2.applyDiscount(20));
        System.out.println(p3.applyDiscount(5));
    }
}
class Product{
    String name; double price;
    Product(String n,double p){name=n;price=p;}
    double applyDiscount(double pct){return price-price*pct/100;}
}
