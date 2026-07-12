// input      output
// aabbbcc = a2b3c2
// abbccc = a1b2c3
import java.util.Scanner;
class Main{
    public static void main(String arg[]){
        System.out.println("Please enter the String");
        Scanner sc = new Scanner(System.in);

        String inp = sc.nextLine().trim();
        StringBuilder ans = new StringBuilder();
        int count=1;
        int i=1;
        for(i=1;i<inp.length();i++){
            if(inp.charAt(i-1) == inp.charAt(i) ){
                count++;
            }
            else{
                ans.append(inp.charAt(i-1)).append(count);
                count=1;
            }
        }
        ans.append(inp.charAt(i-1)).append(count);
        count=1;
        System.out.println("ans: "+ans.toString());
        sc.close();

    }
}