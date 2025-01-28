const data=[{"name":"Alice","age":9},{"name":"Bob","age":85},{"name":"Charlie","age":98},{"name":"David","age":90},{"name":"Emma","age":12},{"name":"Frank","age":89},{"name":"Grace","age":40},{"name":"Henry","age":15},{"name":"Ivy","age":39},{"name":"Jack","age":55},{"name":"Karen","age":12},{"name":"Liam","age":84},{"name":"Mary","age":27},{"name":"Nora","age":82},{"name":"Oscar","age":39},{"name":"Paul","age":83}]

data.sort((a,b)=>a.age-b.age)
console.log(data)