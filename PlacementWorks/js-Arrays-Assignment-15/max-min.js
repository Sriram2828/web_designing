let arr = [4,5,6,3,2,5,4];
let maxEle = 0;
let minEle = 100;
for(let i=0;i<arr.length;i++){
    if(arr[i]>maxEle){
        maxEle=arr[i];
    }
    if(arr[i]<minEle){
        minEle = arr[i];
    }
}
console.log("Maximum element of the array: "+maxEle);
console.log("Minimum element of the array: "+minEle);