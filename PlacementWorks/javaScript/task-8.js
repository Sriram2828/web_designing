// 8.Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
let arr = [0,1,2,3,5,6,7,8,9];
let n = 10;
function missEle(arr,n) {
    for(let i=0;i<n;i++){
        if(i!=arr[i]){
            return i;
        }
    }
}
console.log("the missing element is "+missEle(arr,n));
