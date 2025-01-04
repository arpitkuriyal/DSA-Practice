//in this we understand the behaviour of the call stack how it works
//in this first 1 2 3 4 5 is print and the function are store in the call stack as until the last function is not get executed then for last the function get removed and print 9 8 7 6 

function one1(){
    console.log("1")
    one2()
    console.log("6")
}
function one2(){
    console.log("2")
    one3()
    console.log('7')
}
function one3(){
    console.log('3')
    one4()
    console.log('8')
}
function one4(){
    console.log('4')
    one5()
    console.log('9')
}
function one5(){
    console.log('5')
}



function anything(n){
    if(n<1){
        return;
    }
    console.log(n)
    anything(n-1)
    console.log(n)
}
anything(6)
//0 1 2 3 4 5 6 5 4 3 2 1 