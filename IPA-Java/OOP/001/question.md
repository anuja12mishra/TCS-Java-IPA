### Create below Classes and attributes.

## Chair
- chairld: Integer
- type: String
- price: double
- brand: Brand

## Brand
- brandld: Integer
- brandName: String
- rating: double

## Create a business class and implement the following functionalities:

### findMostExpensive ChairDetails:
- This method will take a list of Chair and brand as input parameters.
- It should find the most expensive chair belonging to the input brand and should return the list of chairs matching the brand.
- If no matching brand is found, print an error message "Matching brand is not available in the list"
### calculateDiscountedPrice:
- This method will take a list of Chair, brand and discount percentage as input parameters.
- It should find the chairs matching the brand and apply the discount to the chair.
- It should return list of chairs matching the brand after applying the discount. The output should be printed followed by the below text.
"Discounted <brand> Chairs:"
- If no matching brand is found, print an error message "Discounted chairs are unavailable in the given brand."
- Discounted Price= Price-(Price * discount%)

## Refer the sample output for more clarity. 

### Notes
- All string comparisons need to be case-insensitive.
- Sample Input and Output
    - First, read the number of brand objects to be added to the array/list.
    - Next, read the attributes for each Brand object in the mentioned sequence.
    - Next read the attributes for each chair object in the mentioned sequence.
    - Repeat steps 2 to 3 for the number of Brand objects given in the first line of input.
    - Next, read the parameters to be passed to the respective methods.