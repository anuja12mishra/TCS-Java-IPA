import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

class BankAccount {
    String accId;
    String accountHolderName;
    String accountHoldergender;
    String occupation;

    public BankAccount(String accId, String accountHolderName, String accountHoldergender, String occupation) {
        this.accId = accId;
        this.accountHoldergender = accountHoldergender;
        this.accountHolderName = accountHolderName;
        this.occupation = occupation;
    }

    public String getOcup() {
        return this.occupation;
    }
}

class Kyc {
    String kycId;
    String kycType;
    String verifiedStatus;

    Kyc(String kycId, String kycType, String verifiedStatus) {
        this.kycId = kycId;
        this.kycType = kycType;
        this.verifiedStatus = verifiedStatus;
    }
}

class Main {

    public static List<BankAccount> findOccupation(List<BankAccount> ba, String searchOccupation) {
        List<BankAccount> newB = new ArrayList<>();

        for (BankAccount b : ba) {
            if (b.getOcup().equalsIgnoreCase(searchOccupation)) {
                newB.add(b);
            }
        }

        if (newB.isEmpty()) {
            return null;
        }
        return newB;
    }

    public static void main(String a[]) {
        Scanner sc = new Scanner(System.in);

        HashMap<BankAccount, Kyc> hm = new HashMap<>();
        List<BankAccount> ba = new ArrayList<>();

        if (!sc.hasNextInt()) {
            System.out.println("please enter some details");
            sc.close();
            return;
        }
        
        int size = sc.nextInt();
        sc.nextLine(); // Consume newline

        if (size <= 0) {
            System.out.println("please enter some details");
            sc.close();
            return;
        }

        for (int i = 0; i < size; i++) {
            String accId = sc.nextLine().trim();
            String accountHolderName = sc.nextLine().trim();
            String accountHoldergender = sc.nextLine().trim();
            String occupation = sc.nextLine().trim();

            String kycId = sc.nextLine().trim();
            String kycType = sc.nextLine().trim();
            String verifiedStatus = sc.nextLine().trim();

            BankAccount newBank = new BankAccount(accId, accountHolderName, accountHoldergender, occupation);
            Kyc newKyc = new Kyc(kycId, kycType, verifiedStatus);
            
            ba.add(newBank);
            if (!hm.containsKey(newBank)) {
                hm.put(newBank, newKyc);
            }
        }

        String searchOccupation = sc.nextLine().trim();
        List<BankAccount> ans = findOccupation(ba, searchOccupation);

        if (ans == null) {
            System.out.println("no occupation match");
            sc.close();
            return;
        }

        // Loop printing the correlated KYC attributes
        for (BankAccount iter : ans) {
            Kyc temp = hm.get(iter);
            if (temp != null) {
                System.out.println(iter.accId + " " + iter.accountHolderName + " " + temp.kycId + " " + temp.verifiedStatus);
            }
        }
        sc.close();
    }
}
