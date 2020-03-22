function expressionCalculator(expr) {
    if (check(expr)==false){throw("ExpressionError: Brackets must be paired")};
let calcStringArr=expr.split('');

for (let i=0;i<calcStringArr.length;i++){
    
    if(calcStringArr[i]==" "){calcStringArr.splice(i, 1); i=i-1;}
};

for (let i=0;i<calcStringArr.length;i++){
    if(/^-{0,1}\d+$/.test(calcStringArr[i])){calcStringArr[i]=Number(calcStringArr[i]);}
    
};


for (let j=0;j<expr.length;j++){
for (let i=0;i<calcStringArr.length;i++){
    if(/^-{0,1}\d+$/.test(calcStringArr[i])&&/^-{0,1}\d+$/.test(calcStringArr[i+1])){calcStringArr.splice(i,2,Number(String(calcStringArr[i])+String(calcStringArr[i+1])))}
};
};

calc2 (calcStringArr);
function calc2 (calcStringArr) {

if(calcStringArr.length>0){
    for (i=0;i<calcStringArr.length;i++){
        if(calcStringArr[i]=='*'||calcStringArr[i]=='/'){
            calcStringArr.splice(i-1,3,calc(calcStringArr[i-1],calcStringArr[i],calcStringArr[i+1]));i=i-1}
    };
}

if(calcStringArr.length>0){
    for (i=0;i<calcStringArr.length;i++){
        if(calcStringArr[i]=='+'||calcStringArr[i]=='-'){
            calcStringArr.splice(i-1,3,calc(calcStringArr[i-1],calcStringArr[i],calcStringArr[i+1]));i=i-1}
    };
}
return calcStringArr
}
if (calcStringArr.length>0){calc2 (calcStringArr)}


/*RETURN*/

return Number(calcStringArr.join(''));



console.log('what',calcStringArr);
let firstNumber, operator, secondNumber;
firstNumber=calcStringArr[0];
operator=calcStringArr[1];
secondNumber=calcStringArr[2];

function calc(firstNumber,operator,secondNumber){
    let res;
    if(operator=="+"){res=firstNumber+secondNumber};
    if(operator=="-"){res=firstNumber-secondNumber};
    if(operator=="*"){res=firstNumber*secondNumber};
    if(operator=="/"){res=firstNumber/secondNumber; 
        if(secondNumber==0){throw("TypeError: Division by zero.");}
    };
    
    return res;
}


 return calc(firstNumber,operator,secondNumber);

 

    // write your solution here
}



function check(str) {
    let op;
    let clo;
    let bracketsConfig= [['(', ')']];
    let strArrControl=[];
    let strArr=[];
    strArr=str.split('');
  
    for (j=0;j<bracketsConfig.length;j++){
        
        
              for (i=0;i<strArr.length;i++){
                
                
                if(strArr[i]==bracketsConfig[j][0]||strArr[i]==bracketsConfig[j][1]){
                
                  strArrControl.push(strArr[i]);

                }
               

              }
        
        if (strArrControl.length%2!==0){return false};
   
    let r=0; 
    let u=strArrControl.length;
        while (strArrControl.length!==0){
           
            for (let i=1;i<strArrControl.length;i++){

              if(strArrControl[i-1]==bracketsConfig[j][0]&&strArrControl[i]==bracketsConfig[j][1]){
                strArrControl.splice(i-1, 2);
                
              }
    
              
        }
        r=r+1;
    if (r>u)   { return false} 
    }


    }
    return true
}

module.exports = {
    expressionCalculator
}