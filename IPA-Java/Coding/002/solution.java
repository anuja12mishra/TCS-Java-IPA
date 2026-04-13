/**
 * Question: Count the number of lowercase letters in a string and print the count.
 * If there are no lowercase letters, print 0.
 *
 * Example:
 * input: DataBaSe
 * output: 5
 */

import java.util.*;

public class solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String inp = sc.nextLine().trim();
        int count =0;
        for(int i=0;i<inp.length();i++){
            if(inp.charAt(i) >='a'  && inp.charAt(i)<='z'){
                count++;
            }
        }
       System.err.println(count);
       sc.close();
    }
}
