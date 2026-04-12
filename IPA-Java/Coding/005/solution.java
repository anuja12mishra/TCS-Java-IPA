// Write a program to print the Lost character of every word in a string
// Conditions Ignore all the digits and whitespaces
// Input: Hey3 Java Learners 
// Output: as

import java.util.Scanner;
public class solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String st = sc.nextLine().trim();
        String[] li = st.split(" ");
        String ans="";
        for(int i =0;i<li.length;i++){
            int sz = li[i].length()-1;
            if(li[i].charAt(sz) >='a' && li[i].charAt(sz) <='z' || li[i].charAt(sz) >='A' && li[i].charAt(sz) <='Z'){
                ans= ans+li[i].charAt(sz);
            }
        }
        System.out.println(ans);
    }
}
