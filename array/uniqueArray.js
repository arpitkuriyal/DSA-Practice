function uniqueArray(arr=[]){
    let uniqueArray=new Set(arr)
    return Array.from(uniqueArray)
}
let ans=uniqueArray([1,1,1,1,2,2,3,3,4])
console.log(ans)