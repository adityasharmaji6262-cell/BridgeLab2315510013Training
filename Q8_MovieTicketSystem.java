package util;
public class Q8_MovieTicketSystem{
    public static void main(String[] args){
        OnlineTicket t=new OnlineTicket("Inception","A12",300,50);
        System.out.println(t.printTicket());
        System.out.println(t.getTotal());
    }
}
class MovieTicket{
    String movie,seat; double price;
    MovieTicket(String m,String s,double p){movie=m;seat=s;price=p;}
    String printTicket(){return movie+" Seat="+seat+" Price="+price;}
}
class OnlineTicket extends MovieTicket{
    double fee;
    OnlineTicket(String m,String s,double p,double f){super(m,s,p);fee=f;}
    double getTotal(){return price+fee;}
}
