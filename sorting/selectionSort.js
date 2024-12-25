function selection_Sort(arr=[]){
    const num=arr.length
    for(let i=0;i<num-1;i++){
        let mini=i
        for(let j=i+1;j<num;j++){
            if(arr[j]<arr[mini]){
                mini=j;
            }
        }
        [arr[i],arr[mini]]=[arr[mini],arr[i]]
    }
    return arr;
}
let ans=selection_Sort(arr=[2,10,6,2,90,6,3]);
console.log(ans)
