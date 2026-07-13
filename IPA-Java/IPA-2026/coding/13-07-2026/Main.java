import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Reading input values
        int firstTerm = sc.nextInt();
        int commonRatio = sc.nextInt();
        int numberOfTerms = sc.nextInt();

        // Validation for number of terms
        if (numberOfTerms <= 0) {
            System.out.println("No Geometric Progression found");
        } else {
            // Generating and printing the geometric progression
            for (int i = 0; i < numberOfTerms; i++) {
                System.out.println(firstTerm);
                firstTerm *= commonRatio;
            }
        }

        sc.close();
    }
}
