# 📐 Geometric Progression Generator

## 📝 Description
Write a program to generate and print a **Geometric Progression (GP)** sequence based on user input. A geometric progression is a sequence of numbers where each term after the first is found by multiplying the previous term by a fixed, non-zero number called the common ratio.

### Input Format
The program reads three integers from the standard input, each on a new line:
1. **First Term (a):** The starting number of the sequence.
2. **Common Ratio (r):** The multiplier for each subsequent term.
3. **Number of Terms (n):** The total number of terms to be printed.

### Output Format
* Print each term of the Geometric Progression on a new line.
* If the number of terms (n) is less than or equal to `0`, print: `"No Geometric Progression found"`.

---

## 🧪 Test Cases

### Example 1
**Input:**
```text
2
3
4
```

**Output:**
```text
2
6
18
54
```

**Explanation:** 
* First term is `2`. 
* Second term: 2 × 3 = 6
* Third term: 6 × 3 = 18
* Fourth term: 18 × 3 = 54
* A total of 4 terms are printed.

### Example 2 (Edge Case)
**Input:**
```text
5
2
0
```

**Output:**
```text
No Geometric Progression found
```

---