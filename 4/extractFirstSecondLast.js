  function extractFirstSecondLast(arr){
    // Destructure the array, assigning the first, second, and last elements
    const [first , second, ...rest ] = arr;
    // Extract the last element from the rest
    const last = rest[rest.length -1];
    // Return the extracted elements as a new array
    return [first, second , last];
  }

    //   Example usage ...
   const numbers = [ 1,2,3,4,5,32];
   const result = extractFirstSecondLast(numbers);
   console.log(result);