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



var arr = [1,5,8,3,6,4,5];
// spread operator (...) will consider each element in the array as a individual number

document.getElementById('arr1').innerHTML= arr;
console.log(Math.max(...arr)); 
document.getElementById('arr2').innerHTML= arr;
console.log(...new Set(arr));
arr.shift();
document.getElementById('arr3').innerHTML= arr;
console.log(arr);
arr.unshift(3,7);
document.getElementById('arr4').innerHTML= arr;
console.log(arr);
arr.pop();
document.getElementById('arr5').innerHTML= arr;
console.log(arr);
// loose equality operator == will convert the datatype
console.log("1"==1);
// tight equality operator
console.log("1"===1);
let x; 

console.log(x ?? 90); 

// greatest of 3
function greater(n1,n2,n3) {
    if (n1>n2 && n1>n3) {
        return n1;
    } else if(n2>n1 && n2>n3){
        return n2;
    }else{
        return n3;
    }
}
console.log(greater(3,4,1)+" is greater");

// odd or even
function oddEven(n) {
    if (n%2==0) {
        return "even";
    }else{
        return "odd";
    }
}
console.log(oddEven(3));

// calculating the age period
function agePeriod(age) {
    if (age>0 && age<=12) {
        return "Child";
    } else if(age>12 && age<=19){
        return "Teenage";
    }else if(age>19 && age<=59){
        return "Adult";
    }else{
        return "Senior Citizen";
    }
}
console.log(agePeriod(15));

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());

// arrrow function  
let square = (a,b) => a * b;
console.log(square(10,9));


// arrow fun with no parameters 
let display = () => "this is done by a arrow";
console.log(display);

// arrow fun using array methods
let maxeleinarr = (arr) => Math.max(...arr);
var arr = [1,5,8,3,6,4,5];
console.log(maxeleinarr(arr));

document.getElementById("btn").addEventListener("click", function(){console.log("event",this)});

const p1 = {
    fname: "xxx",
    lname: "yyy",
    fullName: function(){
        return this.fname+" "+this.lname;
    }
};
console.log("call():",p1.fullName.call(p1));

// class and objects
class Car{
    constructor(fn,ln){
        this.fn = fn;
        this.ln = ln;
    }
    getData(){
        return this.fn+" "+this.ln;
    }
}
const ppi = new Car("xxxx","yyy");
console.log(ppi.getData());


// sending the text to console
let t = document.getElementById("screen");  
function sendtocon(){
    console.log(t.value);
}

// querySelector
let q1 = document.querySelector("h1");
console.log(q1.innerHTML);

let q2 = document.getElementsByClassName("arr2");
console.log(q2.value);

function chco() {
    document.getElementById("arr1").style.color="red";                   
    document.getElementById("btn").style.background="red";
    alert("button was clicked");
}
// console.log(typeof(NAN));

function dbchco(){
    document.getElementById("d").innerHTML = new Date();
}
