function infinity(number){
    if (number<0) return "0" ;
    console.log(number)
    infinity(number-1)
}
const ans=infinity(10000)
console.log(ans)