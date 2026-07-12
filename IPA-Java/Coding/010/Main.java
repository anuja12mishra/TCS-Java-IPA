import java.util.HashMap;
import java.util.Scanner;

public class Main {
    public static void main(String arg[]){
        Scanner sc = new Scanner(System.in);
        String inp = sc.nextLine().trim();
        HashMap<Character, Integer> hm = new HashMap<>();

        StringBuilder sb = new StringBuilder(inp);
        String ans="";

        for(int i=0;i<sb.length();i++){
            if(hm.containsKey(sb.charAt(i))){
                ans= sb.substring(0,i);
                break;
            }else{
                hm.put(sb.charAt(i),hm.getOrDefault(sb.charAt(i),0));
            }
        }

        if(ans.length()>0){
            System.out.println("ans: "+ans);
        }else{
            System.out.println("no repeting ans: "+inp);
        }
    }
}
