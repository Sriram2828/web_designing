// const sId = document.getElementById('reg');
// sId = sId.value;
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


// function display(params) {
    
// };