function longestSequence(arr=[]){
    let sortArray=arr.sort((a,b)=>a-b)
    const uniqueArr = [...new Set(sortArray)];
    let max=0
    let count=1
    for(let i=0;i<uniqueArr.length;i++){
        if(uniqueArr[i]+1==uniqueArr[i+1]){
            count++
        }
        else{
            max=Math.max(count,max)
            count=1
        }
    }
    return max
}
const ans=longestSequence([1,3,2,5,4,11,12,13,14,15,16])
console.log(ans)