function swapValues(x, y) {
    // Create an array with the two values
    const arr = [x, y];
  
    // Destructure the array, swapping the values
    [x, y] = arr;
  
    // Return the array with swapped values
    return arr;
  }
  
  // Example usage
  let x = 5;
  let y = 10;
  
  const result = swapValues(x, y);
  console.log(result); // Output: [10, 5]  