# Bank Account KYC Filter by Occupation

## Problem Description
You are working on a banking management system that maps customer banking accounts with their corresponding Know Your Customer (KYC) identity profiles. You need to build a system that reads customer accounting metrics, filters accounts based on their occupation profile, and prints their verified credentials.

---

## Class Definitions

### 1. BankAccount Class
An entity tracking fundamental banking customer metrics.
* **Attributes:**
  * `accId` (String): Unique identifier of the bank account.
  * `accountHolderName` (String): Full name of the holder.
  * `accountHoldergender` (String): Gender identity.
  * `occupation` (String): Professional domain or occupation.

### 2. Kyc Class
An entity tracking identity validation metadata linked to an account.
* **Attributes:**
  * `kycId` (String): Unique token of verification documents.
  * `kycType` (String): Mode of document provided (e.g., Aadhaar, PAN, Passport).
  * `verifiedStatus` (String): State of validation pipeline (e.g., Verified, Pending).

---

## Functional Requirements
Implement a method inside the `Main` class to process accounts:

```java
public static List<BankAccount> findOccupation(List<BankAccount> ba, String searchOccupation)
```

### Method Logic:
1. Filter the input list `ba` to find all `BankAccount` objects where the `occupation` matches the target string `searchOccupation`.
2. The comparison must be **case-insensitive**.
3. Return a new `List<BankAccount>` containing all matching elements.
4. If no records match or the input parameters produce an empty collection, return `null`.

---

## Input Format

1. **First Line:** An integer `size` indicating the total number of banking records to enter.
2. **Subsequent Lines (Looping `size` times):** For each entity block, expect exactly 7 lines in sequence:
   * Line 1: `accId`
   * Line 2: `accountHolderName`
   * Line 3: `accountHoldergender`
   * Line 4: `occupation`
   * Line 5: `kycId`
   * Line 6: `kycType`
   * Line 7: `verifiedStatus`
3. **Final Line:** A single string representing the target `searchOccupation` to query.

---

## Output Format

* If the initial dynamic `size` input value is less than or equal to `0`, output:  
  `please enter some details`
* If the search function yields no matching entities (`null`), output:  
  `no occupation match`
* If matches are found, loop over each filtered account item and print its properties combined with its associated KYC status separated by spaces:  
  `[accId] [accountHolderName] [kycId] [verifiedStatus]`

---

## Constraints
* Input strings will have leading/trailing whitespace removed before parsing.
* Elements within maps or sets will resolve equality using their unique identifier field (`accId`).

---

## Sample Cases

### Sample Input 1
```text
2
ACC101
John Doe
Male
Engineer
KYC771
Aadhaar
Verified
ACC102
Jane Smith
Female
Engineer
KYC772
PAN
Pending
engineer
```

### Sample Output 1
```text
ACC101 John Doe KYC771 Verified
ACC102 Jane Smith KYC772 Pending
```

### Sample Input 2
```text
1
ACC301
Bob Johnson
Male
Teacher
KYC991
VoterID
Verified
Artist
```

### Sample Output 2
```text
no occupation match
```
