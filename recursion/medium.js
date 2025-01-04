function subseqeunce(arr=[],i,result=[],k){
    if(i==arr.length){
        let sum=0
        for(let j=0;j<result.length;j++){
            sum=sum+result[j]
        }
        if(sum===k){
            console.log(result)
            return true;
        }
        return false
    }
    result.push(arr[i])
    if(subseqeunce(arr,i+1,result,k)){
        return true 
    }

    result.pop()
    if(subseqeunce(arr,i+1,result,k)){
        return true
    }
    return false
}
console.log(subseqeunce([1,2,3,1],0,[],5))