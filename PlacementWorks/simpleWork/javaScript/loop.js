// for loop 
// for (let index = 0; index < 5; index++) {
//     console.log(index);
// }
// console.log(" ")
// let y = 5;
// for(;y<=10;){
//     console.log(y);
//     y++;
// }

// // sum of n odd numbers:
// let s = 0;
// let x = 1;

// for(let i = 1; i<=6 ; i++){
//     s+=x;
//     x=x+2;
// }
// console.log(s);

// // key:value
// const d = {a:10,b:20,c:30};
// for(const key in d){
//     console.log(key+":"+d[key]);
// }

//  // foreach
// let arr = [1,2,3,4,5];
// arr.forEach(element => {
//     console.log(element);
// });


// //  forof display it i
// const a = [1,2,3,4,5];
// for (const i of a) {
//     document.write(" "+i);
// }

// // while
// let n = 1;
// let sum = 0;
// while (n<=10) {
//     sum+=n;
//     n+=1;
// }
// console.log(sum);

// console.log(window.location.href);
// console.log(window.history);
// console.log("message");
// console.error("Error msg");
// console.warn("warning msg");

// map
// let arrMap = [1,2,3,4,5];
// let result = arrMap.map(function(v){
//     return v*5;
// });
// console.log(result);

let map = new Map();
map.set("name","sriram");
map.set("age",20);
map.set("desig","CTO");
map.set("salary","$500000");
// console.log(map);
console.log(map.get("salary"));
console.log(map.size);

let arr = [1,2,3,4,5,7,7,5];
let s = new Set(arr);
console.log(s);
console.log(s.has(4));
console.log(s.delete(3));
console.log(s);

