function union(arr1=[],arr2=[]){
    let combine=arr1.concat(arr2)
    let hash=new Set(combine)
    let hashArray=Array.from(hash)
    let sorted=hashArray.sort((a,b)=>a-b)
    return sorted
}
let ans=union([1,2,3,1,2],[1,2,3,4,5,6,7,3,9,0])
console.log(ans)