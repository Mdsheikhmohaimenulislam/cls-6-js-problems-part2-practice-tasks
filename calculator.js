function add (num1,num2){
    const numberTotal =num1 + num2;
    return numberTotal;
}

function subtract(num1,num2){
    const numberTotal = num1 - num2;
    return numberTotal;
}

function multiply (num1 , num2){
    const numberTotal = num1 * num2 ;
    return numberTotal;
}

function divide(num1 , num2){
    const numberTotal = num1 / num2;
    return numberTotal;
}

function calculator(a, b, opetation){
    if(opetation === 'add'){
        const result = add(a,b);
        return result;
    }
    else if(opetation === 'subtract'){
        const result = subtract(a,b);
        return result;
    }
    else if(opetation === 'multiply'){
        const result = multiply(a,b);
        return result;
    }
    else if(opetation === 'divide'){
        return divide(a,b);
    }
    else{
        return "only 'add','subtract' ,'multiply', 'divide' operation in allowed."
    }
}

const result = calculator(30,5, 'divide');
console.log(result);