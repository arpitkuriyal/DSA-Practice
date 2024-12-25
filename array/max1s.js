// array only consist of the 1s and 0s
function max1s(arr=[]){
    maxCount=0;
    count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            count++;
            maxCount=Math.max(count,maxCount)
        }
        else{
            count=0;
        }
    }
    return maxCount
}
const ans=max1s([1,1,1,1,0,1,0,1,1,1,1,1,0,0])
console.log(ans)