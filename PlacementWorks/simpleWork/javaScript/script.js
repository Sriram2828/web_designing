var a = 10;
let b = 10;
const c = 10;
function notify() {
    var a = 10;
    let b = 10+1;
    const c = 10;
    x = 10;
    // alert(c+x);
    console.log(b+x);
}
console.log(b);
const std = {
    fname: "xxx",
    rollno: "100"
};
console.log(std);
var n = "Sriram";
var p = "Balamurugan";
console.log(n+p);
 
// operations: 
// object -> Obj; o1 -> reference

var obj = {
    o1: "1",
    o2: "2",
    o3: "3"
};
obj.o1 = "4";
obj.o4 = "5";
delete(obj.o1);

console.log(obj); 

function happy(per, name) {
    console.log("name:",`${name}`,"happyness:",`${per}`)
}

happy(100, "s");    

function greet(name) {
    console.log("Hello", `${name}`);
}

greet("Alice");

// Array: 
var arr =new Array("1","2","3","4") ;
// arr.pop();
// delete(arr[0]);
console.log(arr)
document.getElementById("demo").innerHTML = arr.length;
arr.pop()
console.log(arr)
document.getElementById("demo").innerHTML = arr.length;
arr.push("7")
console.log(arr)
document.getElementById("demo").innerHTML = arr.length;

