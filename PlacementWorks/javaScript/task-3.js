// 3.Write a function that takes an array of numbers and returns the largest number.
function maxElement(arr) {
    let element = Math.max(...arr);    
    return "largest number is "+element;
}
console.log(maxElement([2,6,1,5,3,9,4,6,2]));