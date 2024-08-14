//  We Use the spread operator (...) with Math.max() and Math.min().
//  then , I  will Return an object containing the max and min values.
function findMinMax(arr){
    return {
        max:Math.max(...arr),
        min:Math.min(...arr)
    };
}
//......................      Example usage  ......................
const numbers = [5, 2, 7, 1, 9];
const result = findMinMax(numbers);
console.log(result);
// Output: { max: 9, min: 1 }
