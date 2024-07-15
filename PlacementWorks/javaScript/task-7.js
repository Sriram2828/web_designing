// 7.Write a function that converts a temperature from Celsius to Fahrenheit.

function temp(c){
    let f = (9/5 *c) + 32;
    return c+" Celsius -> "+f+" Fahrenheit";
}
console.log(temp(30));