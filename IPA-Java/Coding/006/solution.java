
import java.util.Scanner;


/**
 * Question: Find the largest word from a given sentence.
 * If two words have the same length, print the first one.
 *
 * Example:
 * Input: TCS is the best Company ever
 * Output: Company
 */

public class solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String st =sc.nextLine().trim();
        String[] li = st.split(" ");
        String ans="";
        for(int i =0;i<li.length;i++){
            if(li[i].length()>ans.length()){
                ans=li[i];
            }
        }
        System.out.println(ans);
        sc.close();
    }
}
