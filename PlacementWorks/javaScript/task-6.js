// 6.Write a function that takes a number as input and returns its factorial.
let f = 5;
function fact(f) {
    if (f==0 || f==1) {
        return 1;
    }
    return f*fact(f-1);
};
console.log("factorial of "+f+" is "+fact(f));