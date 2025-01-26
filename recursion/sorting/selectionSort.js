function recursiveSelelctionSort(arr=[],j=0){
    if(j>=arr.length){
        return arr
    }
    let miniIndex=j
    for(let i=j+1;i<arr.length;i++){
        if(arr[i]<arr[miniIndex]){
            min=i
        }
    }
    [arr[j],arr[miniIndex]]=[arr[miniIndex],arr[j]]
    return recursiveSelelctionSort(arr,j+1)
}
console.log(recursiveSelelctionSort([2,5,11,6,8,44,2,99,11,55,44,0]))