function selection_Sort(arr=[]){
    const num=arr.length
    for(let i=0;i<num-1;i++){
        let miniIndex=i
        for(let j=i+1;j<num;j++){
            if(arr[j]<arr[miniIndex]){
                miniIndex=j;
            }
        }
        [arr[i],arr[miniIndex]]=[arr[miniIndex],arr[i]]
    }
    return arr;
}
let ans=selection_Sort(arr=[2,10,6,2,90,6,3]);
console.log(ans)
