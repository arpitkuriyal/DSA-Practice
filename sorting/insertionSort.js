function insertionSort(arr=[]){
    let num=arr.length;
    for(let i=1;i<num;i++){
        let j=i;
        while(j>0 && arr[j-1]>arr[j] ){
            [arr[j-1],arr[j]]=[arr[j],arr[j-1]]
            j--
        }
    }
    return arr
}
let ans=insertionSort(arr=[2,10,6,2,90,6,3]);
console.log(ans)
