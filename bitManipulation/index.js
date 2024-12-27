function isBitSet(n, i) {
return (n & (1 << i)) !== 0;  
}
console.log(isBitSet(5, 2));  
console.log(isBitSet(5, 1));  



function isOdd(n) {
return (n & 1) === 1;  
}
console.log(isOdd(5));  
console.log(isOdd(4)); 


function isPowerOfTwo(n) {
return n > 0 && (n & (n - 1)) === 0;  
}

console.log(isPowerOfTwo(16));  
console.log(isPowerOfTwo(18));  



function countSetBits(n) {
let count = 0;
while (n) {
    n &= (n - 1);  
    count++;
}
return count;
}

console.log(countSetBits(5));  
console.log(countSetBits(7));  



function setRightmostUnsetBit(n) {
return n | (n + 1);  
}




function unsetRightmostSetBit(n) {
return n & (n - 1);  
}
console.log(setRightmostUnsetBit(5));  
console.log(unsetRightmostSetBit(5));  



function swap(a, b) {
a ^= b;
b ^= a;
a ^= b;
return [a, b];
}

let a = 5, b = 10;
[a, b] = swap(a, b);
console.log(a, b);
