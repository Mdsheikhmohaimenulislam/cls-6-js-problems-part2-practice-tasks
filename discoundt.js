// function discountedPrice(quantity){
//     if(quantity <= 100){
//         const total = quantity * 100;
//         return total;
//     }
//     else if(quantity <= 200){

//         const total = quantity * 90;
//         return total ;
//     }
//     else{

//         const a = quantity * 70;
//         const x = a - 70;
//         return x;

//     //    const total = quantity * 70;
//     //    return total;

//     }
// }

// const price = discountedPrice(201)
// console.log(price);



// function layereDiscoundtedTotal(quantity){
//     const first100Price = 100;
//     const second100Price = 90;   
//     const above200Price = 70;
    
//     if(quantity <= 100){
//         const total = first100Price * quantity;
//         return total;

//     }
//     else if (quantity <= 200){
//         const total = first100Price * quantity;
//         const remainingQuantity = quantity - 100;
//         const remainingTotal =  remainingQuantity * second100Price;
//         const totalPrice =remainingTotal + total
//         return totalPrice
//     }
//     else{
//         const total = first100Price * quantity;
//         const remainingTotal =  100 * second100Price;
//         const remainingQuantity = quantity - 100;
//         const remaining = remainingQuantity * above200Price;
//         const totalPrice = total + remainingTotal + remaining;
//         return totalPrice;
//     }
// }
// const fullPrice =layereDiscoundtedTotal(201);
// console.log(fullPrice);