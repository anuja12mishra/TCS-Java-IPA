import java.util.Scanner;
public class Main {
    public static boolean isVowel(char c)
    {
        if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u')
        {
            return true;
        }
        return false;
    }
    public static void main(String arg[]){
        Scanner sc = new Scanner(System.in);
        String inp = sc.nextLine().trim();
        StringBuilder sb = new StringBuilder(inp);

        // for(int i=0;i<sb.length();i++){
        //     if(sb.charAt(i) == ' '){
        //         sb.deleteCharAt(i);
        //     }
        // }

        System.out.println("output "+sb.toString());

        int count=0;
        for(int i=1;i<sb.length();i++){
            if(isVowel(sb.charAt(i)) && isVowel(sb.charAt(i-1))){
                count++;
            }
        }

        System.out.println("count: "+count);

    }
}
