package util;
public class Q1_StudentResult{
    public static void main(String[] args){
        Student s1=new Student("Aman", new int[]{90,85,92});
        Student s2=new Student("Riya", new int[]{70,65,60});
        Student s3=new Student("Kabir", new int[]{40,55,45});
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
    }
}
class Student{
    String name; int[] marks;
    Student(String n,int[] m){name=n;marks=m;}
    double avg(){int s=0; for(int x:marks)s+=x; return s/(double)marks.length;}
    String grade(){double a=avg(); if(a>=90)return"A"; if(a>=75)return"B"; if(a>=50)return"C"; return"F";}
    public String toString(){return name+" Avg="+avg()+" Grade="+grade();}
}
