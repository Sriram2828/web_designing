// let salary = 10;
// try {
//     salary/=0;
//     consol.log(salary);
// } catch (error) {
//     console.log("error in console");
// }finally{
//     console.log("code terminated \n");
// }

// let y = 5;
// try {
//     if(y<10) throw "not sufficient";
// } catch (error) {
//     console.log(error);
// }

// let salary = prompt("mension your salary: ");
// try {
//     if(salary.trim() == "")  throw "empty";
//     if(isNaN(salary)) throw "not a number";
//     salary = Number(salary);
//     if(salary < 500)  throw "too low";
//     if(salary > 1000000)   throw "too high";
// } catch (error) {
//     console.log(error);
// }

// Asynchronous
// function fetchdata(x){
//   setTimeout(() => {
//     x("Data fetched");
//   }, 5000);
// }
// function handleData(data){
//   console.log(data);
// }
// fetchdata(handleData);

// Promise
// let promise = new Promise((resolve , reject) => {
//   setTimeout(() => {
//     resolve("Data Fetched");
//   }, 5000);
// });
// promise.then(data => {
//   console.log(data);
// }).catch(error =>{
//   console.log(error);
// });

// let a1="! $ welcome to my message 2024";
// let a2=/\w/gm;
// console.log(a1.match(a2));


// let a1="! $ welcome to my message 2024";
// let a2=/\W/gm;
// console.log(a1.match(a2));


// let a1="! $ welcome to my message 2024";
// let a2=/\d{1,4}/gm;
// console.log(a1.match(a2));
