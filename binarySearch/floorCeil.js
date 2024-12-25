class FloorCeil{
    solution(arr,k){
        let floor=this.floor(arr,k)
        let ceil=this.ceil(arr,k)
        return [floor,ceil]
    }
    ceil(arr=[],k){
        let left=0
        let right=arr.length-1
        let result=-1
        while(left <=right){
            let mid=Math.floor((left+right)/2)
            if(arr[mid]>=k){
                result=mid
                right=mid-1
            }
            else{
                left=mid+1
            }
        }
        return result!=-1? arr[result]:-1
    }
    floor(arr=[],k){
        let left=0
        let right=arr.length-1
        let result=-1
        while(left <=right){
            let mid=Math.floor((left+right)/2)
            if(arr[mid]<=k){
                result=mid
                left=mid+1
            }
            else{
                right=mid-1
            }
        }
        return result!=-1? arr[result]:-1
    }
}
const ans=new FloorCeil()
console.log(ans.solution([1,2,3,5,6,7,8],0))