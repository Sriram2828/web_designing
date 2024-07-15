// 4.Write a function that takes a string and returns an object with each character as a key and its number of occurrences as the value.

function countCharOcc(givenStr) {
    const charCount = {};

    for (let i of givenStr) {
        if (charCount[i]) {
            charCount[i]++;
        } else {
            charCount[i] = 1;
        }
    }

    return charCount;
}
console.log(countCharOcc("hello world"));
