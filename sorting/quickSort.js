function quickSort(arr=[]){
    if(arr.length<=1){
        return arr;
    }
    let left=[]
    let right=[]
    let pivot=arr[0]
    let i=1
    while(i<arr.length){
        if(pivot>arr[i]){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
        i++
    }
    return [...quickSort(left),pivot,...quickSort(right)]

}
let ans=quickSort([3,3,111,76,1,2,9,45,0])
console.log(ans)