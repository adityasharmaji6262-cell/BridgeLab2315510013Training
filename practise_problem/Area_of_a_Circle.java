package aadi;

import java.util.Scanner;

public class Area_of_a_Circle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter radius of the circle: ");
        double radius = sc.nextDouble();
        double area = 3.141 * radius * radius;
        System.out.println("Area of the circle: " + area);
    }
}
