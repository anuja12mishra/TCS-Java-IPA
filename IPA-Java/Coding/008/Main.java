
public class Main {
    public static void main(String arg[]){
        StringBuilder s = new StringBuilder("hello");
        s.append('a');
        s.append("abs");
        s.append(123);

        s.insert(2,"DJ");

        System.out.println(s);

        s.setLength(5);
        System.out.println(s);

        System.out.println("capacity: "+s.capacity());
        System.out.println("length: "+s.length());
    }
}
