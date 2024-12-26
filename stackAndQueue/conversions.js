// here we do all the conversion of infix , postfix , prefix 

// first we do the infix to postfix 
function infix2Postfix(expression){
    const precedence = {
        "^": 3,
        "*": 2,
        "/": 2,
        "+": 1,
        "-": 1
      };
    let stack=[];
    let postfix=[]
    let isOperators=(char)=>["+",'-','*','^',"/"].includes(char)
    for(let i=0;i<expression.length;i++){
      let char=expression[i]
      if(char==' '){
        continue;
      }
      if(/^[A-Za-z0-9]+$/.test(char)){
        postfix.push(char)
      }
      else if(isOperators(char)){
        while(stack.length>0 && precedence[char]<=precedence[stack[stack.length-1]]){
          postfix.push(stack.pop())
        }
        stack.push(char)
      }
      else if(char=='('){
        stack.push(char)
      }
      else if(char==")"){
        while(stack[stack.length-1]!='(' && stack.length>0){
          postfix.push(stack.pop())
        }
        stack.pop()
      }
    }
    while(stack.length>0){
      postfix.push(stack.pop())
    }
    return postfix.join('')
}
const infixExpression = "(a+b)*(c^d-e)^(f+g*h)-i";
const postfixExpression = infix2Postfix(infixExpression);
console.log("this is infix to postfix conversion" + postfixExpression); // Output: "abcd^e-*+"



// now we do the infix to prefix in this we have to reverse the string and do the infix to postfix and then reverse the output we get the prefix
/* 
Steps :- 
  first reverse the string and also reverse the parantheses
  after that do infix to postfix conversion in that 
  after that reverse the postfix to get the prefix 
*/
function infix2Prefix(expression){
  const precedence = {
      "^": 3,
      "*": 2,
      "/": 2,
      "+": 1,
      "-": 1
    };
  let stack=[];
  let prefix=[];
  let isOperators=(char)=>["+",'-','*','^',"/"].includes(char)

  let reverse=expression.split('').reverse().map((char)=>{
    if(char=='(') return ")";
    if(char==")") return "("
    return char
  }
  )
  for(let i=0;i<reverse.length;i++){
    let char=reverse[i]
    if(char==' '){
      continue;
    }
    if(/^[A-Za-z0-9]+$/.test(char)){
      prefix.push(char)
    }
    else if(isOperators(char)){
      while(stack.length>0 && precedence[char]<=precedence[stack[stack.length-1]]){
        prefix.push(stack.pop())
      }
      stack.push(char)
    }
    else if(char=='('){
      stack.push(char)
    }
    else if(char==")"){
      while(stack[stack.length-1]!='(' && stack.length>0){
        prefix.push(stack.pop())
      }
      stack.pop()
    }
  }
  while(stack.length>0){
    prefix.push(stack.pop())
  }
  let ans=prefix.reverse().join('')
  return ans
}
const infixExpression2 = "(a+b)*(c^d-e)^(f+g*h)-i";
const prefixExpression = infix2Prefix(infixExpression2);
console.log("this is infix to prefix conversion "+prefixExpression);









// postfix to infix 
function postfixToInfix(postfix) {
  let stack = [];

  for (let i = 0; i < postfix.length; i++) {
      let char = postfix[i];

      if (/[A-Za-z0-9]/.test(char)) {
          stack.push(char);
      } else {
          let operand2 = stack.pop();
          let operand1 = stack.pop();

          stack.push(`(${operand1} ${char} ${operand2})`);
      }
  }

  return stack.pop();
}

const postfixExpr = "ab+c*";
console.log(postfixToInfix(postfixExpr));





//prefix to infix
function prefixToInfix(prefix) {
  let stack = [];

  for (let i = prefix.length - 1; i >= 0; i--) {
      let char = prefix[i];

      if (/[A-Za-z0-9]/.test(char)) {
          stack.push(char);
      } else {
          let operand1 = stack.pop();
          let operand2 = stack.pop();

          stack.push(`(${operand1} ${char} ${operand2})`);
      }
  }

  return stack.pop();
}
const prefixExpr = "*+abc";
console.log(prefixToInfix(prefixExpr))
  




//postfix to prefix
function postfixToPrefix(postfix) {
  let stack = [];

  for (let i = 0; i < postfix.length; i++) {
      let char = postfix[i];

      if (/[A-Za-z0-9]/.test(char)) {
          stack.push(char);
      } else {
          let operand2 = stack.pop();
          let operand1 = stack.pop();

          stack.push(char + operand1 + operand2);
      }
  }

  return stack.pop();
}

const postfixExpr2 = "ab+c*";
console.log(postfixToInfix(postfixExpr2))
  



//prefix to postfix 
function prefixToPostfix(prefix) {
  let stack = [];

  for (let i = prefix.length - 1; i >= 0; i--) {
      let char = prefix[i];

      if (/[A-Za-z0-9]/.test(char)) {
          stack.push(char);
      } else {
          let operand1 = stack.pop();
          let operand2 = stack.pop();

          stack.push(operand1 + operand2 + char);
      }
  }

  return stack.pop();
}

const prefixExpr3 = "*+abc";
console.log(prefixToPostfix(prefixExpr3));

