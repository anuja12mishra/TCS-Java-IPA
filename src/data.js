var QA_DATABASE = {
    kyt: [
        { question: "1. When was Tata Consultancy Services established?", answer: "1968 (Option b)" },
        { question: "2. Who is the current CEO & MD of TCS (as of 2026)?", answer: "K. Krithivasan (Option b)" },
        { question: "3. TCS is a subsidiary of which group?", answer: "Tata Group (Option c)" },
        { question: "4. TCS’s “BaNCS” platform is used primarily in which industry?", answer: "Banking and Finance (Option b)" },
        { question: "5. Which is TCS’s AI-powered software engineering platform?", answer: "Ignio (Option a)" },
        { question: "6. TCS was the first Indian IT company to cross which market cap milestone?", answer: "$100B (Option c)" }
    ],
    bizskill: [
        { question: "1. What are the stages in the IBC approach?", answer: "Introduction, Body, Conclusion (Option c)" },
        { question: "2. In a client meeting, if you don’t know an answer, you should:", answer: "Acknowledge and follow up later (Option c)" },
        { question: "3. Which is an example of non-verbal communication?", answer: "Body language (Option c)" },
        { question: "4. In formal email writing, what should be avoided?", answer: "Abbreviations & emojis (Option c)" },
        { question: "5. Active listening in business communication primarily helps to:", answer: "Build trust and clarity (Option b)" }
    ],
    ui: [
        { question: "1. What is the correct CSS syntax to set a border with colour?", answer: "border: 2px solid DodgerBlue (Option c)" },
        { question: "2. In HTML5, which tag is semantic?", answer: "<article> (Option b)" },
        { question: "3. Which HTML attribute provides alternate text for an image?", answer: "alt (Option c)" },
        { question: "4. Which CSS property controls the stacking order of elements?", answer: "z-index (Option b)" },
        { question: "5. Which HTML tag creates a dropdown list?", answer: "<select> (Option c)" },
        { question: "6. Which CSS property makes text bold?", answer: "font-weight (Option b)" },
        { question: "7. Which CSS unit is relative to the parent element?", answer: "em (Option c)" },
        { question: "8. Which HTML element creates the largest heading?", answer: "h1 (Option c)" }
    ],
    unix: [
        { question: "1. Which command shows the present working directory?", answer: "pwd (Option b)" },
        { question: "2. Which command changes file/directory permission levels?", answer: "chmod (Option d)" },
        { question: "3. Which command lists all files, including hidden ones?", answer: "ls -a (Option c)" },
        { question: "4. Which command terminates a process by PID?", answer: "kill -9 pid (Option b)" },
        { question: "5. Which command searches for a pattern inside a file?", answer: "grep “pattern” filename (Option c)" }
    ],
    javapython: [
        { question: "1. Which keyword inherits a class in Java?", answer: "extends (Option b)" },
        { question: "2. Which exception is thrown on dividing by zero in Java?", answer: "ArithmeticException (Option c)" },
        { question: "3. Which is not an OOP principle?", answer: "Compilation (Option d)" },
        { question: "4. Default value of int in Java is:", answer: "0 (Option b)" },
        { question: "5. What is the output of x = sum(range(7)) → print(x) in Python?", answer: "21 (Option b)" },
        { question: "6. Which of these is immutable in Python?", answer: "Tuple (Option b)" },
        { question: "7. What does bool(\"\") return in Python?", answer: "False (Option b)" },
        { question: "8. Which keyword defines a function in Python?", answer: "def (Option a)" }
    ],
    sql: [
        { question: "1. Which clause filters rows in SQL?", answer: "WHERE (Option b)" },
        { question: "2. Which command removes a table from the database?", answer: "DROP TABLE (Option b)" },
        { question: "3. Which keyword removes duplicate rows from results?", answer: "DISTINCT (Option d)" },
        { question: "4. What is the default sort order of ORDER BY?", answer: "ASC (Option b)" },
        { question: "5. Which command permanently saves changes in a transaction?", answer: "COMMIT (Option b)" },
        { question: "6. Which type of trigger fires before an event in PLSQL?", answer: "BEFORE trigger (Option a)" },
        { question: "7. Which keyword is used to exit a loop in PLSQL?", answer: "EXIT (Option b)" }
    ],
    coding: [
        { 
            question: "Question: Find the index of the first occurrence of a character in a string.\nPrint the index if found, else print \"Character not found\".\n\nExample:\ninput => Xplore\ncharacter input => r\noutput => 4", 
            answer: "import java.util.*;\npublic class solution {\n    public static void main(String []arfgs){\n        Scanner sc = new Scanner(System.in);\n        String str = sc.nextLine();\n        char ch = sc.nextLine().charAt(0);\n        for(int i=0; i<str.length(); i++){\n            if(str.charAt(i) == ch){\n                System.out.println(i);\n                return;\n            }\n        }\n        System.out.println(\"Character not found\");\n        sc.close();\n    }\n}" 
        },
        { 
            question: "Question: Count the number of lowercase letters in a string and print the count. If there are no lowercase letters, print 0.\n\nExample:\ninput: DataBaSe\noutput: 5", 
            answer: "import java.util.*;\n\npublic class solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String inp = sc.nextLine().trim();\n        int count =0;\n        for(int i=0;i<inp.length();i++){\n            if(inp.charAt(i) >='a'  && inp.charAt(i)<='z'){\n                count++;\n            }\n        }\n       System.err.println(count);\n       sc.close();\n    }\n}" 
        },
        { 
            question: "Question: Remove duplicate characters from a string while preserving original order.\n\nExample:\ninput => experience\noutput => exprinc", 
            answer: "import java.util.LinkedHashSet;\nimport java.util.Scanner;\npublic class solution {\n    public static void main(String []arg){\n        Scanner sc = new Scanner(System.in);\n        String inp = sc.nextLine().trim();\n        LinkedHashSet<Character> mp = new LinkedHashSet<>();\n        for(int i=0;i<inp.length();i++){\n            mp.add(inp.charAt(i));\n        }\n        String ans=\"\";\n        for(Character ch : mp){\n            ans = ans+ch;\n        }\n        System.out.println(ans);\n        sc.close();\n    }\n}" 
        },
        { 
            question: "Question: Count the number of spaces and alphabetic characters in a given string.\n\nExample:\ninput => Hi I am a student\noutput => 4 13", 
            answer: "import java.util.Scanner;\npublic class solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String inp = sc.nextLine().trim();\n        int spaceCount = 0;\n        int CharCount = 0;\n        for(int i=0;i<inp.length();i++){\n            if(inp.charAt(i) >= 'a' &&  inp.charAt(i) <= 'z'||   inp.charAt(i) >= 'A' && inp.charAt(i) <= 'Z'){\n                CharCount++;\n            }\n            if(inp.charAt(i) == ' '){\n                spaceCount++;\n            }\n        }\n        System.err.println(\"Space count: \"+spaceCount+\" Character count: \"+CharCount);\n        sc.close();\n    }\n}" 
        },
        { 
            question: "Question: Print the last character of every word in a string. Ignore all digits and whitespaces.\n\nExample:\nInput: Hey3 Java Learners\nOutput: as", 
            answer: "import java.util.Scanner;\npublic class solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String st = sc.nextLine().trim();\n        String[] li = st.split(\" \");\n        String ans=\"\";\n        for(int i =0;i<li.length;i++){\n            int sz = li[i].length()-1;\n            if(li[i].charAt(sz) >='a' && li[i].charAt(sz) <='z' || li[i].charAt(sz) >='A' && li[i].charAt(sz) <='Z'){\n                ans= ans+li[i].charAt(sz);\n            }\n        }\n        System.out.println(ans);\n        sc.close();\n    }\n}" 
        },
        { 
            question: "Question: Find the largest word from a given sentence. If two words have the same length, print the first one.\n\nExample:\nInput: TCS is the best Company ever\nOutput: Company", 
            answer: "import java.util.Scanner;\npublic class solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String st =sc.nextLine().trim();\n        String[] li = st.split(\" \");\n        String ans=\"\";\n        for(int i =0;i<li.length;i++){\n            if(li[i].length()>ans.length()){\n                ans=li[i];\n            }\n        }\n        System.out.println(ans);\n        sc.close();\n    }\n}" 
        }
    ],
    oops: [
        {
            question: "Question: Create a class Brand with attributes (name, discountPercentage, chairs). Create a class Chair with attributes (model, color, price). Search for a brand by name and print the discounted price of all its chairs.",
            answer: "import java.util.Scanner;\n\nclass Chair{\n    private String model, color; private double price;\n    public Chair(String model, String color, double price){ this.model = model; this.color = color; this.price = price; }\n    public String getModel(){ return model; } public String getColor(){ return color; } public double getPrice(){ return price; }\n};\n\nclass Brand{\n    private String name; private double discountPercentage; private Chair[] chairs;\n    public Brand(String name, double discountPercentage, Chair[] chairs){ this.name = name; this.discountPercentage = discountPercentage; this.chairs = chairs; }\n    public String getName(){ return name; } public double getDiscountPercentage(){ return discountPercentage; } public Chair[] getChairs(){ return chairs; }\n};\n\nclass sol{\n    public static void main(String[] args){\n        Scanner sc = new Scanner(System.in); int n = sc.nextInt(); sc.nextLine(); Brand[] brands = new Brand[n];\n        for(int i=0; i<n; i++){\n            String name = sc.nextLine(); double d = sc.nextDouble(); sc.nextLine(); int c = sc.nextInt(); sc.nextLine(); Chair[] chrs = new Chair[c];\n            for(int j=0; j<c; j++){ chrs[j] = new Chair(sc.nextLine(), sc.nextLine(), sc.nextDouble()); sc.nextLine(); }\n            brands[i] = new Brand(name, d, chrs);\n        }\n        String search = sc.nextLine(); boolean found = false;\n        for(Brand b : brands){\n            if(b.getName().equalsIgnoreCase(search)){\n                found = true; System.out.println(\"Discounted chairs in \" + b.getName() + \":\");\n                for(Chair c : b.getChairs()){\n                    double dp = c.getPrice() - (c.getPrice() * b.getDiscountPercentage() / 100);\n                    System.out.println(c.getModel() + \" \" + c.getColor() + \" \" + dp);\n                }\n                break;\n            }\n        }\n        if(!found){ System.out.println(\"Discounted chairs are unavailable in the given brand.\"); }\n        sc.close();\n    }\n}"
        },
        {
            question: "Question: Create a class Course with attributes (courseId, courseName, courseAdmin, quiz, handson). Implement methods to find average quiz by admin and sort courses by hands-on.",
            answer: "import java.util.ArrayList;\nimport java.util.Scanner;\n\nclass Course {\n    private int courseId, quiz, handson; private String courseName, courseAdmin;\n    public Course(int id, String name, String admin, int quiz, int handson) { this.courseId = id; this.courseName = name; this.courseAdmin = admin; this.quiz = quiz; this.handson = handson; }\n    public String getCourseAdmin() { return courseAdmin; } public int getQuiz() { return quiz; } public int getHandson() { return handson; } public String getCourseName() { return courseName; }\n}\n\npublic class sol {\n    static double findAvgOfQuizByAdmin(Course[] courses, String admin) {\n        int total = 0, count = 0; for (Course c : courses) { if (c.getCourseAdmin().equalsIgnoreCase(admin)) { total += c.getQuiz(); count++; } }\n        return count > 0 ? (double) total / count : 0;\n    }\n    static Course[] sortCourseByHandsOn(Course[] courses, int limit) {\n        ArrayList<Course> filtered = new ArrayList<>(); for (Course c : courses) { if (c.getHandson() < limit) filtered.add(c); }\n        if (filtered.isEmpty()) return null;\n        return filtered.toArray(new Course[0]);\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in); Course[] courses = new Course[4];\n        for (int i = 0; i < 4; i++) { courses[i] = new Course(sc.nextInt(), sc.nextLine(), sc.nextLine(), sc.nextInt(), sc.nextInt()); }\n        double avg = findAvgOfQuizByAdmin(courses, \"Alice\"); System.out.println(avg);\n        sc.close();\n    }\n}"
        },
        {
            question: "Question: Create a class Medicine with attributes (medicineId, medicineName, medicineType, price). Implement a method to count medicines by name (case-insensitive).",
            answer: "import java.util.Scanner;\n\nclass Medicine {\n    private int medicineId; private String medicineName, medicineType; private double price;\n    public Medicine(int id, String name, String type, double price) { this.medicineId = id; this.medicineName = name; this.medicineType = type; this.price = price; }\n    public String getMedicineName() { return medicineName; }\n}\n\npublic class solution {\n    static int countMedicinesByMedicineName(Medicine[] medicines, String name) {\n        int count = 0; for (Medicine m : medicines) { if (m.getMedicineName().equalsIgnoreCase(name)) count++; }\n        return count;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in); Medicine[] medicines = new Medicine[4];\n        for (int i = 0; i < 4; i++) { medicines[i] = new Medicine(Integer.parseInt(sc.nextLine()), sc.nextLine(), sc.nextLine(), Double.parseDouble(sc.nextLine())); }\n        String search = sc.nextLine(); System.out.println(countMedicinesByMedicineName(medicines, search));\n    }\n}"
        }
    ]
};
