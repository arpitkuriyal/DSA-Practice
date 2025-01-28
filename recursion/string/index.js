//basic question remove all the 'a's from the string 
function removeAs(string,newstring=[],n=0){
    if(n>=string.length){
        let a=newstring.join('')
        return a;
    }
    if(string[n]!='a'){
       newstring.push(string[n])
    }
    return removeAs(string,newstring,n+1)

}
// console.log(removeAs('abcdabbcc'))

//skip a particular subString in the whole string
function SkipString(string,subString,n=0){
    if(n>=string.length){
        return "" ;
    }
    if(string.slice(n,n+subString.length)==subString){
        return SkipString(string,subString,n+subString.length)
    }
    return string[n]+SkipString(string,subString,n+1)
}
// console.log(SkipString("abcdsabcn",'abc'))