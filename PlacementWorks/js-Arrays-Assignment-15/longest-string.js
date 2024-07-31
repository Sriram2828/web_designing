let arr = ["a","bb","cc","hhhhhhhhh","ggggg"];
let res = "";
for(let word of arr){
    if(word.length > res.length){
        res = word;
    }
}
console.log("Longest string in the array: "+res)