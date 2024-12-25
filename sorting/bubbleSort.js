function bubbleSort(arr=[]){
    let num=arr.length;
    for(let i=num-1;i>=0;i--){
        for(let j=0;j<=i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;

}
let ans=bubbleSort(arr=[200,10,60,23,90,6,31]);
console.log(ans)