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
            question: "Problem 1: Easy (15 Marks): Count Uppercase & Lowercase Letters\n\nWrite a program to count uppercase and lowercase letters in a string. Ignore digits and spaces.\n\nInput: HellO WoRLD\n\nOutput:\nUppercase: 6\nLowercase: 4", 
            answer: "Python Solution:\n\ndef count_case(s):\n    upper, lower = 0, 0\n    for ch in s:\n        if 'A' <= ch <= 'Z':\n            upper += 1\n        elif 'a' <= ch <= 'z':\n            lower += 1\n    return upper, lower\n\ns = input().strip()\nu, l = count_case(s)\nprint(\"Uppercase:\", u)\nprint(\"Lowercase:\", l)\n\n\nJava Solution:\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String str = sc.nextLine();\n        int upper = 0, lower = 0;\n        for (char ch : str.toCharArray()) {\n            if (Character.isUpperCase(ch)) upper++;\n            else if (Character.isLowerCase(ch)) lower++;\n        }\n        System.out.println(\"Uppercase: \" + upper);\n        System.out.println(\"Lowercase: \" + lower);\n    }\n}" 
        },
        { 
            question: "Problem 2 — Complex (35 Marks): Filter Products by Category\n\nRead `n` product objects (id, name, price, category). Read a category string `C`. Print the average price of matching products rounded to 2 decimal places. Print `0.00` if none match.\n\nInput:\n3\n101 Phone 199.99 Electronics\n102 Shirt 49.99 Apparel\n103 Laptop 999.00 Electronics\nElectronics\n\nOutput: 599.50", 
            answer: "Python Solution:\n\nclass Product:\n    def __init__(self, pid, name, price, category):\n        self.pid = pid\n        self.name = name\n        self.price = price\n        self.category = category\n\nn = int(input().strip())\nproducts = []\nfor _ in range(n):\n    data = input().strip().split()\n    products.append(Product(int(data[0]), data[1], float(data[2]), data[3]))\n\nC = input().strip()\nfiltered = [p.price for p in products if p.category == C]\nprint(f\"{sum(filtered)/len(filtered):.2f}\" if filtered else \"0.00\")\n\n\nJava Solution:\n\nimport java.util.*;\n\nclass Product {\n    int id; String name, category; double price;\n    Product(int id, String name, double price, String category) {\n        this.id = id; this.name = name;\n        this.price = price; this.category = category;\n    }\n    public static double avgByCategory(Product[] arr, String C) {\n        double total = 0; int count = 0;\n        for (Product p : arr) {\n            if (p.category.equals(C)) { total += p.price; count++; }\n        }\n        return count == 0 ? 0.00 : total / count;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = Integer.parseInt(sc.nextLine().trim());\n        Product[] products = new Product[n];\n        for (int i = 0; i < n; i++) {\n            String[] d = sc.nextLine().trim().split(\" \");\n            products[i] = new Product(Integer.parseInt(d[0]), d[1], Double.parseDouble(d[2]), d[3]);\n        }\n        String C = sc.nextLine().trim();\n        System.out.printf(\"%.2f%n\", Product.avgByCategory(products, C));\n    }\n}" 
        }
    ]
};
