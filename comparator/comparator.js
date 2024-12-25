class Comparator{
    static defaultCompareFunction(a,b){
        return a>=b ? 1 :0;
    }
    constructor(compareFunction){
        this.compare=compareFunction || Comparator.defaultCompareFunction;
    }
}
const comparator= new Comparator
console.log(comparator.compare(5,2))