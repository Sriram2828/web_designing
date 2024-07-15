// 2.Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).
function palindrome(givenStr) {
    let res = givenStr.split("").reverse().join(""); 
    if(res === givenStr){
        return givenStr+" is a Palindrome";
    }else{
        return givenStr+" is Not a Palindrom";
    }
}
console.log(palindrome("madam"));
console.log(palindrome("sir"));