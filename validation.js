// function multiply(num1,num2){
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'Please Provide a Number'
//     }
//     const multiplyValu = num1 * num2;
//     return multiplyValu;
// }

// const result = multiply("two","four")
// console.log(result);

//? first name and last name

// if(typeof first !== 'string'){
//     return 'Please Provaide a First Name.';
// }
// else if( typeof last !== 'string'){
//     return 'Please Provaide a Last Name.';
// }
// else{
//     return 'Please Provide a only full Name. '
// }

// function fullName(first, last){
    
//     if(typeof first !== 'string' || typeof last !== 'string'){
//         return 'Please Provaide a Full Name.';

//     }

//     const addFullName = first + ' ' + last;
//     return addFullName;
// }
// const addFullName = fullName('Izuku', 'Midoriya');
// console.log(addFullName);


function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 'Please provaide a Array'
    }
    const second = numbers[1];
    return second;
}
const second = getSecond([50,60,71]);
console.log(second);