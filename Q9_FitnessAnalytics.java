package util;
import java.util.*;
public class Q9_FitnessAnalytics{
    public static void main(String[] args){
        List<Data> d=List.of(
            new Data("A",8000,300),
            new Data("B",12000,500),
            new Data("C",4000,200)
        );
        FitnessAnalytics f=new FitnessAnalytics(d);
        System.out.println(f.getActive());
        System.out.println(f.getAvg());
        System.out.println(f.getSummary());
    }
}
class Data{
    String user; int steps,cal;
    Data(String u,int s,int c){user=u;steps=s;cal=c;}
    public String toString(){return user;}
}
class FitnessAnalytics{
    List<Data> d;
    FitnessAnalytics(List<Data> d){if(d.isEmpty()) throw new RuntimeException("Empty"); this.d=d;}
    List<Data> getActive(){return d.stream().filter(x->x.steps>7000).toList();}
    double getAvg(){return d.stream().mapToInt(x->x.cal).average().getAsDouble();}
    List<String> getSummary(){return d.stream().map(x->x.user+" "+x.steps+" "+x.cal).toList();}
}
