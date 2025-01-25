function printTriangle(n,current=1){
    if(n==current){
        return;
    }
    let star="*".repeat(current)
    console.log(star)
    printTriangle(n,current+1)
}
// printTriangle(5)


function midTriangle(n,current=1){
    if(n<current){
        return;
    }
    let space=' '.repeat(n-current)
    let star="*".repeat(current*2-1)

    console.log(space+star)
    midTriangle(n,current+1)
}
// midTriangle(5)