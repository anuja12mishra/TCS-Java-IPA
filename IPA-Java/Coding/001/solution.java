/**
 * Question: Find the index of the first occurrence of a character in a string.
 * Print the index if found, else print "Character not found".
 *
 * Example:
 * input => Xplore
 * character input => r
 * output => 4
 */
import java.util.*;
public class solution {
    public static void main(String []arfgs){
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        char ch = sc.nextLine().charAt(0);
        // System.err.println(ch);
        // int count = 0;
        for(int i=0; i<str.length(); i++){
            if(str.charAt(i) == ch){
                System.out.println(i);
                return;
            }
        }
        System.out.println("Character not found");
        sc.close();
    }
}
