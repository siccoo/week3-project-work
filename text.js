Assignment

var myNumbers = [12, 100, 21, 34, 17, 2, 13, 27, 23, 12, 09, 47.20];
// 1. Given the array of numbers above, write a JS function that accept the array, create a
// new array whose elements are 20% of the original array.

// 2. the 'myArray' variable is multidimensional array.
// use a nested 'for' loop to cycle through 'myArray'.
// Convert each even number to the string 'even'.
// Convert each odd number to the string 'odd'.

var myArray =[
    [23, 156, 25, 10, 52, 23],
    [12, 100, 23, 56, 81, 93],
    [42.5, 71, 10, 23, 35, 11, 72, 99],
    [11, 100, 99, 102, 13, 8, 12]
]

let myArray = [
    [10, 52, 156, 12, 100, 56, 72, 102, 8]
    [23, 42.5, 25, 81, 93, 71, 35, 13, 99, 11]
];
alert(toString(myArray));
console.log(toString(myArray));

//3. Assuming the data below is your database.
//a. Find the particular customer in the database whose ID is 3.
//b. Find all customers whose ID is less than 10.
//c. Create a new database containing customers whose name contain letter A.

let customer = [
    {id: 1, name: 'Ada Mike', product: 'milk', email: 'ada@gmail.com'},
    {id: 2, name: 'Friday Chukwuma', product: 'milk', email: 'friday@gmail.com'},
    {id: 3, name: 'Ifeanyi Okeke', product: 'indomie', email: 'ifeanyi@gmail.com'},
    {id: 4, name: 'Michael Chilaka', product: 'milk', email: 'michael@gmail.com'},
    {id: 5, name: 'Bitrus Abah', product: 'fruits', email: 'bitrus@gmail.com'},
    {id: 6, name: 'Ikoro Victor', product: 'eggs', email: 'ikoro@gmail.com'},
    {id: 7, name: 'Habibat Akintayo', product: 'soaps', email: 'habibat@gmail.com'},
    {id: 8, name: 'Vivian Chijioke', product: 'milk', email: 'vivian@gmail.com'},
    {id: 9, name: 'Gift Ubadire', product: 'biscuits', email: 'gift@gmail.com'},
    {id: 10, name: 'Chinenye Offiah', product: 'confectionaries', email: 'chinenye@gmail.com'}
];

//let cust = customerName.find(anything => anything.product === milk);
let cust = customer.find(anything => anything.id === 3);
alert(customer.name + ' ' + customer.age)

//alert(Array.isArray(studentNames))

let count = 0;
for(let i=count; i < 20; i++){
console.log(i)
}

