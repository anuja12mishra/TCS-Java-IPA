// question remove duplicate elements
// input=> experience
// output=> exprinc
import java.util.LinkedHashSet;
import java.util.Scanner;
public class solution {
    public static void main(String []arg){
        Scanner sc = new Scanner(System.in);
        String inp = sc.nextLine().trim();
        LinkedHashSet<Character> mp = new LinkedHashSet<>();

        for(int i=0;i<inp.length();i++){
            mp.add(inp.charAt(i));
        }
        String ans="";
        for(Character ch : mp){
            ans = ans+ch;
        }
        System.out.println(ans);
    }
}
