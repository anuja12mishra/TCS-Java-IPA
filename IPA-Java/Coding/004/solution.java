/**
 * Question: Count the number of spaces and alphabetic characters in a given string.
 *
 * Example:
 * input => Hi I am a student
 * output => 4 13
 */
import java.util.Scanner;
public class solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String inp = sc.nextLine().trim();
        int spaceCount = 0;
        int CharCount = 0;

        for(int i=0;i<inp.length();i++){
            if(inp.charAt(i) >= 'a' &&  inp.charAt(i) <= 'z'||   inp.charAt(i) >= 'A' && inp.charAt(i) <= 'Z'){
                CharCount++;
            }
            if(inp.charAt(i) == ' '){
                spaceCount++;
            }
        }
        System.err.println("Space count: "+spaceCount+" Character count: "+CharCount);
        sc.close();
    }
}
