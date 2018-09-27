//Assignment

//var myNumbers = [12, 100, 21, 34, 17, 2, 13, 27, 23, 12, 09, 47.20];
// 1. Given the array of numbers above, write a JS function that accept the array, create a
// new array whose elements are 20% of the original array.

function percentage(anyNumbers){
    let reducedArr = anyNumbers.reduce(
        (sum, current) => sum + current);
        let newNumberArr = [];
        let result;
        for (let i = 0; i < anyNumbers.length; i++){
            let aNumber = anyNumbers[i];
            result = Math.round((aNumber / 20))
        }
    
}

// 2. the 'myArray' variable is multidimensional array.
// use a nested 'for' loop to cycle through 'myArray'.
// Convert each even number to the string 'even'.
// Convert each odd number to the string 'odd'.

var myArray = [
    [23, 156, 25, 10, 52, 23],
    [12, 100, 23, 56, 81, 93],
    [42.5, 71, 10, 23, 35, 11, 72, 99],
    [11, 100, 99, 102, 13, 8, 12]
]

for (let i = 0; i < myArray.length; i++) {
    let eachInd = myArray[i];
    
    //console.log(eachInd);
    for (let j = 0; j < eachInd.length; j++) {
        //console.log(eachInd[j]);
        let evenOrOdd;
        if (eachInd[j] % 2 === 0) {
            evenOrOdd = "Even";
        } else {
            evenOrOdd = "Odd";
        }
        console.log(evenOrOdd);
    }

}
// for (let i = 0; i < myArray.length; i++) {
//     let newInd = myArray[i];
//     for (let j = 0; j < newInd.length; j++); 
//     console.log(newInd[j]);
//     let eachNumber;
//     if (newInd[j] % 2 === 0){
//         eachNumber = 'Even';
//     } else { 
//         eachNumber = 'Odd';
//     }
// //results.push(eachNumber);
// console.log(eachNumber);
// }


//3. Assuming the data below is your database.
//a. Find the particular customer in the database whose ID is 3.
//b. Find all customers whose ID is less than 10.
//c. Create a new database containing customers whose name contain letter A.

let customer = [
    { id: 1, name: 'Ada Mike', product: 'milk', email: 'ada@gmail.com' },
    { id: 2, name: 'Friday Chukwuma', product: 'milk', email: 'friday@gmail.com' },
    { id: 3, name: 'Ifeanyi Okeke', product: 'indomie', email: 'ifeanyi@gmail.com' },
    { id: 4, name: 'Michael Chilaka', product: 'milk', email: 'michael@gmail.com' },
    { id: 5, name: 'Bitrus Abah', product: 'fruits', email: 'bitrus@gmail.com' },
    { id: 6, name: 'Ikoro Victor', product: 'eggs', email: 'ikoro@gmail.com' },
    { id: 7, name: 'Habibat Akintayo', product: 'soaps', email: 'habibat@gmail.com' },
    { id: 8, name: 'Vivian Chijioke', product: 'milk', email: 'vivian@gmail.com' },
    { id: 9, name: 'Gift Ubadire', product: 'biscuits', email: 'gift@gmail.com' },
    { id: 10, name: 'Chinenye Offiah', product: 'confectionaries', email: 'chinenye@gmail.com' }
];

// //let cust = customerName.find(anything => anything.product === milk);
// let cust = customer.filter(anything => anything.id === 3);
// alert(anything.name + ' ' + anything.product)

let arr = customer.filter(item => {
    if (item.id === 3) {
        alert(item.product)
    }
})

let arr2 = customer.filter(item => {
    if (item.id < 10) {
        alert(item.name)
    }
})

let count = 0;
for (let i = count; i < 20; i++) {
    //console.log(i)
}

// let seatRow =[
//     [1, 2, 3, 4],
//     [12, 23, 13, 6, 7],
//     [6, 7, 8, 9, 1],
// ]

// for (let i = 0; i < seatRow.length; i++){
//     //let newInd = seatRow[i];
//     for (let m = 0; m < seatRow[i].length; m++){
//       console.log(i, seatRow[i][m] );
//       if (i === 2 && m === 4){
//     //     console.log(i, seatRow[i][m] )    
//      }
//     }
// }