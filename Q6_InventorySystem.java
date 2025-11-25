package util;
import java.util.*;
import java.util.stream.*;
public class Q6_InventorySystem{
    public static void main(String[] args){
        List<Product> inv=List.of(
            new Product(1,"Laptop","Electronics",50000,3),
            new Product(2,"Shoes","Fashion",2000,10),
            new Product(3,"Mobile","Electronics",30000,1),
            new Product(4,"Watch","Fashion",1500,7)
        );
        System.out.println(getLow(inv));
        System.out.println(sort(inv));
        System.out.println(total(inv));
        System.out.println(group(inv));
    }
    static List<Product> getLow(List<Product> inv){return inv.stream().filter(p->p.stock<5).toList();}
    static List<Product> sort(List<Product> inv){return inv.stream().sorted((a,b)->Double.compare(a.price,b.price)).toList();}
    static double total(List<Product> inv){return inv.stream().mapToDouble(p->p.price*p.stock).sum();}
    static Map<String,List<Product>> group(List<Product> inv){return inv.stream().collect(Collectors.groupingBy(p->p.cat));}
}
class Product{
    int id,stock; String name,cat; double price;
    Product(int i,String n,String c,double p,int s){id=i;name=n;cat=c;price=p;stock=s;}
    public String toString(){return name;}
}
