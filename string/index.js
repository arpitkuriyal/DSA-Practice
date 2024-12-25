var longestCommonPrefix = function(strs) {
    let word=strs[0]
    let str=''
    let count=0
    for(let i=0;i<word.length;i++){
        for(let j=0; j<strs.length;j++){
            strs[j][i]=word[i]
            count++
        }
        if(count==strs.length){
            str=str+word[i]
        }
        else{
            return 
        }
    }
};
let strss = ["flower","flow","flight"]
const ans=longestCommonPrefix(strss)
console.log(ans)