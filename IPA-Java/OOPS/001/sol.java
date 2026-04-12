
import java.util.Scanner;

class Chair{
    private String model;
    private String color;
    private double price;

    public Chair(String model, String color, double price){
        this.model = model;
        this.color = color;
        this.price = price;
    }

    public String getModel(){
        return model;
    }

    public String getColor(){
        return color;
    }

    public double getPrice(){
        return price;
    }
};

class Brand{
    private String name;
    private double discountPercentage;
    private Chair[] chairs;

    public Brand(String name, double discountPercentage, Chair[] chairs){
        this.name = name;
        this.discountPercentage = discountPercentage;
        this.chairs = chairs;
    }

    public String getName(){
        return name;
    }

    public double getDiscountPercentage(){
        return discountPercentage;
    }

    public Chair[] getChairs(){
        return chairs;
    }
};

class sol{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine(); 
        Brand[] brands = new Brand[n];
        for(int i=0; i<n; i++){
            String name = sc.nextLine();
            double discountPercentage = sc.nextDouble();
            sc.nextLine(); 
            int chairCount = sc.nextInt();
            sc.nextLine(); 
            Chair[] chairs = new Chair[chairCount];
            for(int j=0; j<chairCount; j++){
                String model = sc.nextLine();
                String color = sc.nextLine();
                double price = sc.nextDouble();
                sc.nextLine(); 
                chairs[j] = new Chair(model, color, price);
            }
            brands[i] = new Brand(name, discountPercentage, chairs);
        }
        String searchBrand = sc.nextLine();
        boolean found = false;
        for(Brand brand : brands){
            if(brand.getName().equalsIgnoreCase(searchBrand)){
                found = true;
                System.out.println("Discounted chairs in " + brand.getName() + ":");
                for(Chair chair : brand.getChairs()){
                    double discountedPrice = chair.getPrice() - (chair.getPrice() * brand.getDiscountPercentage() / 100);
                    System.out.println(chair.getModel() + " " + chair.getColor() + " " + discountedPrice);
                }
                break;
            }
        }
        if(!found){
            System.out.println("Discounted chairs are unavailable in the given brand.");
        }
        sc.close();
        
    }
}