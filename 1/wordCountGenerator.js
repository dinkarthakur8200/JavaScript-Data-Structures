function wordCountGenerator(text) {
    // Step 1: Preprocess the text
    const words = text.toLowerCase().match(/[a-z]+/g) || [];
    
    // Step 2: Count occurrences
    const wordCounts = new Map();
    
    for (const word of words) {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    }
    
    return wordCounts;
}

// Example usage
const text = "Hii , This side DINKAR THAKUR. and I'm a BCA student from the PW SKILL ONLINE DEGREE PROGRAM .this thius  ";
const result = wordCountGenerator(text);
console.log(result);