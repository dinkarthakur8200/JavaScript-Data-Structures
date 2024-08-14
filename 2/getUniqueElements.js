function getUniqueElements(arr) {
    // Create a new Set from the input array
    // Set automatically removes duplicates
    return new Set(arr);
}

// Example usage
const numbers = [1, 2, 3, 4, 2, 3, 5, 1, 4];
const uniqueSet = getUniqueElements(numbers);

console.log(uniqueSet);
console.log("Unique elements:", Array.from(uniqueSet));