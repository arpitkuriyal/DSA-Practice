function factorial(n){
    if(n<=0){
        return 1
    }
    return n * factorial(n-1)
}


function fibonacci(n) {
    if(n<=1){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}


function sumArray(arr) {
    if(arr.length==0){
        return 0
    }
    return arr[0] + sumArray(arr.slice(1))

}

function reverseString(str) {
    if(str.length==0){
        return "";
    }
    return reverseString(str.slice(1)) + str[0]

}


function palindrome(arr=[]){
    if(arr.length<=1){
        return true
    }
    if(arr.pop()!=arr.shift()){
        return false
    }
    return palindrome(arr)
}


function sumOfdigit(n){
    if(n<=0){
        return 0 ;
    }
    return n%10 + sumOfdigit(Math.floor(n/10))
}

function reverseNumber(n,m=0){
    if(n<=0){
        return m;
    }
    m=m*10+(n%10)
    return reverseNumber(Math.floor(n/10),m)
}
console.log(reverseNumber(321))


function findMax(arr = []) {
    if (arr.length === 0) {
        return Number.NEGATIVE_INFINITY; 
    }
    let maxOfRest = findMax(arr.slice(1)); 
    return Math.max(arr[0], maxOfRest); 
}

function binarySearch(arr=[],target,left=0,right=arr.length-1){
    let mid=Math.floor((left+right)/2)
    if(left>right){
        return false
    }
    if(arr[mid]==target){
        return true
    }
    if(arr[mid]>target){
        return binarySearch(arr,left,mid-1,target)
    }
    return binarySearch(arr,mid+1,right,target)
}

