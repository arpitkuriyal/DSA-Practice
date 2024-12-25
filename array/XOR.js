// here we are finding the missing n0. in the array 
function XOR(arr=[]){
    let num=arr[0]
    for(let i=1;i< arr.length;i++){
        num=num^arr[i]
    }
    return num
}
let ans=XOR([1,1,2,3,3])
console.log(ans)