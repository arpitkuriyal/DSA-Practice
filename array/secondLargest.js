function getSecondLargest(arr=[]) {
    if(arr.length<2){
        return -1
    }
    let large=-Infinity;
    let secondLarge=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            secondLarge=large
            large=arr[i]
            
        }
        //in this condition we check for the condition like at last there is 50 in ans1 array it is small and not equal to the largest but greater than the current secondlargest so we replace it to be secondlargest
        else if(arr[i]>secondLarge && arr[i]!=large){
            secondLarge=arr[i]
        }
    }
    return secondLarge===-Infinity ? -1 : secondLarge
}
let ans=getSecondLargest([10,10,10,10])
console.log(ans)

let ans1=getSecondLargest([1,5,10,7,30,70,2,50])
console.log(ans1)