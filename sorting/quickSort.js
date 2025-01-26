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
    //we use spread operator to concat the array into one if we donot we it the result will look like this [[1,3,2],[5],[7,9,8]] but after the spread operator it looks like this [1,3,2,5,7,9,8]. can also use concat like 
    return [...quickSort(left),pivot,...quickSort(right)]
    // return [quickSort(left).concat([pivot],quickSort(right))]

}
let ans=quickSort([3,3,111,76,1,2,9,45,0])
console.log(ans)
