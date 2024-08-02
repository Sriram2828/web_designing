// let stdId = document.getElementById("reg");
let stdData = `[
    {
        "id" : 1,
        "stdName" : "sriram",
        "gender" : "M"
    },
    {
        "id" : 2,
        "stdName" : "seetha",
        "gender" : "F"
    }
]`;
let x = JSON.parse(stdData);
console.log(x[1].stdName);
console.log(JSON.stringify(x));

// function display(params) {
    
// }