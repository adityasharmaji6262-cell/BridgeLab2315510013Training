package util;
public class Q5_RideSharing{
    public static void main(String[] args){
        try{
            Trip t=new Trip("A","B",15);
            System.out.println("Fare="+t.calculateFare());
            Trip bad=new Trip("A","B",-5);
            System.out.println(bad.calculateFare());
        }catch(Exception e){System.out.println(e.getMessage());}
    }
}
class User{String name; double rating; User(String n,double r){name=n;rating=r;}}
class Driver extends User{String vehicle; Driver(String n,double r,String v){super(n,r);vehicle=v;}}
class Trip{
    String from,to; double dist;
    Trip(String f,String t,double d){from=f;to=t;dist=d;}
    double calculateFare(){
        if(dist<0) throw new RuntimeException("Invalid distance");
        return dist*12;
    }
}
