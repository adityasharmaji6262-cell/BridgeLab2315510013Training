package util;
import java.util.*;
public class Q2_FoodOrdering{
    public static void main(String[] args){
        try{
            System.out.println("Bill="+calculateBill(new String[]{"burger","pizza"}));
            System.out.println(calculateBill(new String[]{"burger","apple"}));
        }catch(Exception e){System.out.println(e.getMessage());}
    }
    static Map<String,Integer> menu=Map.of("burger",120,"pizza",250,"fries",80,"coke",40);
    static int calculateBill(String[] items){
        int t=0;
        for(String it:items){
            if(!menu.containsKey(it)) throw new RuntimeException("Invalid item: "+it);
            t+=menu.get(it);
        }
        return t;
    }
}
