## **README.md**

### **JavaScript Array Utilities**

**Description:**
This repository contains a collection of JavaScript functions designed to perform common array operations efficiently. These functions leverage modern JavaScript features like destructuring assignment and the spread operator for concise and readable code.

**Features:**

* **Word Counting:** Calculates the word count in a given string.
* **Unique Elements:** Finds and returns unique elements from an array.
* **Object Property Extraction:** Extracts specific properties from a nested object using destructuring.

**Usage:**

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   ```
2. **Import the desired functions:**
   ```javascript
   import { countWords, findUnique, extractProperties } from './your-file.js';
   ```
3. **Use the functions:**
   ```javascript
   const text = "This is a sample text with repeated words.";
   const wordCount = countWords(text);
   console.log(wordCount); // Output: 7

   const numbers = [1, 2, 3, 2, 4, 1];
   const uniqueNumbers = findUnique(numbers);
   console.log(uniqueNumbers); // Output: [1, 2, 3, 4]

   const person = { name: "John", address: { city: "New York" } };
   const extractedData = extractProperties(person, ["name", "address.city"]);
   console.log(extractedData); // Output: { name: "John", city: "New York" }
   ```

**Contributing:**
Feel free to contribute to this project by submitting pull requests, reporting issues, or suggesting new features.

**License:**
[NONE]
