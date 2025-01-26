function recursiveBubbleSort(arr=[],n=arr.length){
    if(n==1){
        return arr
    }
    for(let i=0;i<n;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }
    }
    return recursiveBubbleSort(arr,n-1)
}
console.log(recursiveBubbleSort([2,5,11,6,8,44,2,99,11,55,44,0]))