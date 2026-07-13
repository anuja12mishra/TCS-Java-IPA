/**
 * Question: Create a class Medicine with attributes (medicineId, medicineName, medicineType, price).
 * Implement a method countMedicinesByMedicineName which takes an array of medicines and a name string,
 * and returns the count of medicines with that name (case-insensitive).
 */
import java.util.Scanner;

class Medicine {
    private int medicineId;
    private String medicineName;
    private String medicineType;
    private double price;

    public Medicine(int medicineId, String medicineName, String medicineType, double price) {
        this.medicineId = medicineId;
        this.medicineName = medicineName;
        this.medicineType = medicineType;
        this.price = price;
    }

    public String getMedicineName() {
        return medicineName;
    }
}

public class solution {

    static int countMedicinesByMedicineName(Medicine[] medicines, String name) {
        int count = 0;
        for (int i = 0; i < medicines.length; i++) {
            if (medicines[i].getMedicineName().equalsIgnoreCase(name)) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Medicine[] medicines = new Medicine[4];

        for (int i = 0; i < 4; i++) {
            int id = Integer.parseInt(sc.nextLine().trim());
            String name = sc.nextLine().trim();
            String type = sc.nextLine().trim();
            double price = Double.parseDouble(sc.nextLine().trim());
            medicines[i] = new Medicine(id, name, type, price);
        }

        String searchName = sc.nextLine().trim();
        int ans = countMedicinesByMedicineName(medicines, searchName);
        System.out.println(ans);
    }
}