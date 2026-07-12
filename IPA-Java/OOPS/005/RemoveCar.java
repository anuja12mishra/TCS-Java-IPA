import java.util.Scanner;

class Car {
    // Private attributes
    private int carId;
    private String carName;
    private String fuelType;

    // Parameterized constructor
    public Car(int carId, String carName, String fuelType) {
        this.carId = carId;
        this.carName = carName;
        this.fuelType = fuelType;
    }

    // Getters and Setters
    public int getCarId() {
        return carId;
    }

    public void setCarId(int carId) {
        this.carId = carId;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }
}

public class RemoveCar {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Car[] cars = new Car[5];

        // Reading values for 5 Car objects
        for (int i = 0; i < 5; i++) {
            int carId = sc.nextInt(); 
            sc.nextLine(); // Consume newline
            String carName = sc.nextLine();
            String fuelType = sc.nextLine();
            
            cars[i] = new Car(carId, carName, fuelType);
        }

        // Reading the car ID to be removed
        int idToRemove = sc.nextInt();

        // Calling the static method
        Car[] result = RemoveAndRearrange(cars, idToRemove);

        // Printing output based on the result
        if (result != null) {
            for (Car car : result) {
                System.out.println(car.getCarId() + " : " + car.getCarName());
            }
        } else {
            System.out.println("There are no car with given id");
        }

        sc.close();
    }

    // Static method to remove a car and rearrange IDs continuously
    public static Car[] RemoveAndRearrange(Car[] cars, int id) {
        boolean found = false;
        
        // Check if the car ID exists in the array
        for (Car car : cars) {
            if (car.getCarId() == id) {
                found = true;
                break;
            }
        }

        // If ID is not found, return null as per instructions
        if (!found) {
            return null;
        }

        // Create a new array of smaller size
        Car[] newCars = new Car[cars.length - 1];
        int index = 0;

        // Keep the starting sequence ID reference (e.g., 1001)
        int nextId = cars[0].getCarId();

        // Copy remaining cars and re-assign continuous sequence IDs
        for (Car car : cars) {
            if (car.getCarId() != id) {
                newCars[index] = car;
                newCars[index].setCarId(nextId); // Apply continuous new ID
                nextId++;
                index++;
            }
        }

        return newCars;
    }
}
