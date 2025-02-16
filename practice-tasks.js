//? Tasks 1

// const heights2 = [167, 190, 120, 165, 137,105];

// function getHeights(heights2){
//     let s = heights2[0]
//     for(const height of heights2){
//         if(s > height){
//             s = height
//         }
//     }
//     return s
// }

// const lowest = getHeights(heights2);
// console.log(lowest);

//? Tasks 2 

// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


// function getHeights(heights2){
//     let small = heights2[0]
//     for(const height of heights2){
//         if(height.length < small.length){
//             small = height

//         }
//     }
//     return small;
    
// }
// const name = getHeights(heights2);
// console.log(name);

//? Tasks 3
//  const laptop = 35000
//  const table = 15000
//  const mobile = 20000

// function calculateElectronicsBudget(calculate){
//     const tablePrice = table * calculate;
//     const laptopPrice = laptop * calculate;
//     const mobilePrice = mobile * calculate;
//     const totalBudget = tablePrice + laptopPrice + mobilePrice;
//     return totalBudget;
    
// }
// const totalMoneyRequired = calculateElectronicsBudget(1,1,1);
// console.log(totalMoneyRequired);

//? tasks 4

// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function findAveragePhonePrice(phones){
//     let average = 0;
//     for(const phone of phones){
//         average = phone.price + average
//     }
//     const averagePrice = average / phones.length;
//     return averagePrice;
// }
// const averagePriceOfPhone = findAveragePhonePrice(phones);
// console.log(averagePriceOfPhone);


//? task 5 

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];


function getcalCulated(employees){
    let sumSalary = 0;
    for(const employee of employees){
        const incrementExperience = employee.experience * employee.increment;
        const totalSalary = incrementExperience + employee.starting;
        sumSalary = totalSalary;
    }
    return sumSalary;
}

const totalSalary = getcalCulated(employees);
console.log(totalSalary);