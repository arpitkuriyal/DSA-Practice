// for positive we are using the sliding window approach 
function lengthOfSubArray(arr=[],k){
    let start=0;
    let sum=0;
    maxLength=0
    for(let end=0;end<arr.length;end++){
        sum=sum+arr[end]
        while(sum>k){
            sum-=arr[start]
            start++
        }
        if(sum==k){
            maxLength= Math.max(maxLength,end-start+1)
        }

    }
    return maxLength;
}

// function alternative(arr=[],k){
//     let maxlen=0;
//     for(let i=0;i<arr.length;i++){
//         let s=0
//         for(j=i;j<arr.length;j++){
//             s=s+arr[j]
//             if(k===s){
//                 maxlen=Math.max(maxlen,j-i+1)
//             }
//         }
//     }
//     return maxlen
// }
let ans=alternative([1,5,2,3,8,9,4,56,2,2,1,9],60)
console.log(ans)