
import java.util.Scanner;


// Find Largest word from a given Sentence.
// if two string have same Length then print the first one.
// Input: TCS is the best Company ever
// Output: Company

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
    }
}
