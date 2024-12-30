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
function sumofdigit(n){
    if(n<=0){
        return 0 ;
    }
    return n%10 + sumofdigit(Math.floor(n/10))
}
function findMax(arr = []) {
    if (arr.length === 0) {
        return Number.NEGATIVE_INFINITY; 
    }
    let maxOfRest = findMax(arr.slice(1)); 
    return Math.max(arr[0], maxOfRest); 
}

