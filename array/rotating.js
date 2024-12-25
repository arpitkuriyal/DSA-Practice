function reverse(reverse=[]){
    for(let i=0;i<Math.floor(reverse.length/2);i++){
        [reverse[i],reverse[reverse.length-1-i]]=[reverse[reverse.length-1-i],reverse[i]]
    }
    return reverse
}
function shifttoRight(arr=[],k){
    let part1=reverse(arr.slice(0,arr.length-k))
    let part2=reverse(arr.slice(arr.length-k))
    let combine=reverse([...part1,...part2])
    return combine

}
let ans=shifttoRight([1,2,3,4,5,6],2)
console.log(ans)