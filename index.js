// // "use strict";

// // alert ("Welcome to you all");
// // alert ("Hello World")

// // // single line comment in javascript
// // /*multi-line comment in javascript*/

// // //Javascript variables
// // /*var name="Chilaka";
// // alert: (name);
// // name="One click";*/

// // let message;
// // message = 'Welcome to MikeTECH Technologis';
// // alert(message);

// // //constant;
// // const username='Mike-point';
// // alert(username);
// // console.log(username);

// // //Data types
// // let num1="2222222222";
// // console.log(num1);

// // let user="Mr. Chilaka";
// // alert ('Good morning' +user);
// // user='Ikenna';
// // alert ('Good morning' +user);

// // let greater = 3 > 1;
// // alert (greater);
// // console.log();

// // //alert(myNameObinna);

// // let y;
// // alert (y);

// // let lecturer = 'Mr. Matthew Onoja is a Full Stack Developer at LearnFactory and he is my personal trainer';
// // alert ('Good morning' +lecturer);

// // document.write('This browser is superb');

// /*let name="Matthew Onoja";
// alert('Hello' +name);//what is the output?
// alert(name + "You are on your way to learnfactory");//what is the output?
// let mat=7;//find the data type of mat
// console.log(typeof(mat))
// let myPple='Shalom Bernadine Zoe and Grace';
// document.write('Shalom Bernadine Zoe and Grace');*/

// //type conversion
// /*let num = 24;
// console.log(typeof num);

// let tostring = String(num);
// console.log(typeof (toString));

// let myString = "String";

// let toNumber = Number(myString);

// //Operators
// //Operands operators

// let x = 2 + 4;
// let y = 3 - 1;
// let z = 6 / 2;
// let u = 2 * 3;

// let c = 2;
// c = -c;
// document.write('The value of x is' + x + '<br>');
// //alert(c); concatenation

// //Strong concatenation
// let string = "sun" + "moon";
// document.write(string);

// let oranges = "5";
// let child = "3";
// let remainder = oranges % child;
// document.write(remainder);

// //decreement and increment
// let d = "2";
// let a = '4';
// console.log(d + a);
// document.write(console.log);
// let prac = (1 + 2 * 3) - (4 / 3);
// alert(prac);

// console.log(10 === '5');
// console.log(10 == '5');
// if (10 >= 6) {
//     console.log('yes 10 is less than 6')
// } else {
//     console.log('5 is greater than 6')
// };

// //let myName = 'Chilaka';
// //myName = 'Obinna';
// //let toNumber = Number(myName);

// //Prompt, confirm and alert

// //prompt('', default)


// /*let count = 0;
// let username = 'leblank';
// let name = prompt('What is your name?');
// console.log(name);

// if (name !== username) {
//     alert('Please try again, name does not match');
//     count++
// }
// console.log(count);

// name = prompt('What is your name?');
// console.log(name);
// if (name !== username) {
//     alert('Please try again You have 2 more trials, name does not match');
//     count++;
// }

// name = prompt('What is your name?');
// console.log(name);
// if (name !== username) {
//     alert('Please try again You have 1 more trial, name does not match');
//     count++;
// }

// name = prompt('What is your name?');
// console.log(name);
// if (name !== username) {
//     alert('The name does not match. Thank You');
//     count++;
// }
// console.log(count = 3);

// console.log(3 > 2);
// console.log("Aardvark" < "Zoroaster");
// console.log("Apple" == "Orange");
// console.log("Itchy" != "Scratchy");*/

// /*let count = 0;
// let username = "Matthew";
// let successMsg = "You got it. you are a smart programmer";
// let trialMsg = "wrong entry.. You have 1 more trial";
// let failureMsg = "number of trial exceeded. You failed wholefully";
// let name = prompt("please enter your name");
// if (name !== username) {
//     alert("wrong entry. Name does not match");
//     count++;
//     if (count < 3) {
//         name = prompt("please enter a name");
//         if (name !== username) {
//             alert(trialing);
//             count++;
//             if (count === 3) {
//                 alert(failureMsg);
//                 alert("you tried" + count + "times");
//             }
//         }else {
//                 alert(successMsg);
//             }
//         }else {
//                 alert(successMsg);
//             }
//         */


// //Conditional operators

// let a = 2;
// //if (test){
// //statement
// //}

// /*if (a == 2) {
//     alert("a is truly equal to 2");
// } else if (a < 3) {
//     alert("a is less than 3");

// } else {
//     alert('I dont know the answer');
// }

// let y = "Mat";
// let z = ('y == Mat') ? 22 : 12;
// alert (z);
// console.log (z);*/

// /*let age = prompt (18)
// if (age == 18){
//     alert ("Permission granted")
// } else if (age < 18){
//     alert ("Access denied")
// */


// let age;
// let permission = true;
// //let age = prompt ("enter your age");
// /*
// if (age >= 18){
//     alert ('you can go to the cinema')}
//     else if (permission){
//         alert ('you have parental permission to the cinema')
//     }
//     else if (age > 18){
//         alert ('you are under aged')
//     }
// */

// let access = prompt(age >= 18) ?
//     "you can go to the cinema" : (permission) ?
//         'you have parental permission to the cinema' : 'you are under aged';
// console.log(access)

// //using the ternary operators to check prime numbers
// /* prompt("Enter Passcode");
// console.log(Math.max(2, 4));
// console.log(Math.min(2, 4) + 100);

// let theNumber = Number(prompt("25"));
// console.log("Your Number is square root of" + 25 * 25);

// //Logical operators
// //OR || AND && NOT !

// /*let i = 2;
// if (i == 2 || i <= 2 || i >= 2);
// alert ('true');
//     } else {
//         alert('wrong combination')
//     }*/


// /*let name = "bernadine";
// if (name) {
//     //nothing else can happen
// }

// let b = 3;
// if (b == 2 && b < 3) {
//     alert('this is a true value');
// } else {
//     alert('you are a joker')
// }

// alert(null || 2 || undefined);

// // Loop literally means repeatation
// // while loop syntax

// while (condition) {
//     // execution continues
// }
// let i = 10;
// while (i < 11) {
//     //statement
// }
// alert('i --');*/

// // do-while loop

// /*do{
//     console.log('My Name is Ruddy');

// } while ( i < 15){
//     console.log('this is a while loop' + i++;);
// }*/

// /*for (declarevariable; condition; incrementVariable){
//     // statement
// }

// for (var i = 0; i < 10; i ++){
//     console.log(i)
// }*/

// /*let weekDays = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

// for (let i = 0; i < weekDays.length; i++) {
//     let eachDay = weekDays[i];
//     alert(eachDay);
// }*/

// //prompt("Enter Passcode");

// /*let theNumber = Number(prompt("Number"));
// console.log("String" + document.write("String"));*/


// let number = prompt("Enter the number");
// let reminder = number % 2;
// if (reminder == 0) {
//     alert("even");
// } else if (reminder == 1) {
//     alert("odd number")
// }



// //bank balance 
// // // change the values of `balance`, `checkBalance`, and `isActive` to test your code
// let balance = prompt("Whats your account number");
// let accountnumber = "2468";
// let checkBalance = true;
// let isActive = false;
// // your code goes here
// if (checkBalance === false) {

//     console.log("Thank You, Have a nice day.");

// } else if (checkBalance === true && isActive === true && balance > 0) {

//     console.log("Your Account Balane is $ " + balance.toFixed(2) + ".");

// } else if (isActive === false && balance > 0) {

//     console.log("Your account is no longer active.");

// } else if (isActive === true && balance === 0) {

//     console.log("Your account is Empty");

// } else {
//     console.log("Your account is negative, Please, contact bank.");
// }*/

// //musicians
// /*et musicians = prompt('50');

// let Not = "0"
// if (musicians <= 0) {
//     console.log("Not a group");

//     let solo = "1";
// } else if (musicians === 1) {
//     console.log("solo");

//     let duet = "2";
// } else if (musicians === 2) {
//     console.log("duet");

//     let trio = "3";
// } else if (musicians === 3) {
//     console.log("trio");

//     let quartet = "4";
// } else if (musicians === 4) {
//     console.log("quartet");

// } else {
//     console.log("this is a large group");
// }

// //Switch cases
// switch (4){
//     case 1:
//         alert (" this is just 1");
//         break;

//     case 2:
//         alert (" this is just abinary number");
//         break;

//     case 5:
//         alert ("Yes this is the right number");
//         break;

//     default:
//     alert ("I dont know what you are saying")
// }

// let season = prompt ("What season is this");

// switch (season){
//     case "summer":
//     alert ("I can't go out now. Its sunny out there");
//     break;

//     case "winter":
//     alert ("Dont forget to come with a sweater. Its cold out here");
//     break;

//     case "spring":
//     alert ("Please dont come with a touch light. The sky is clear");
//     break;

//     default:
//     alert ("I dont know the season we are");
//     break;
// }*/

// //let myArray = Array[];

// /*et myArray = [1, 2, 3, 4, 5];
// alert (myArray[3]);
// alert (myArray.length);

// let arr = [];
// arr [0] = "dog";
// arr [1] = "goat";
// arr [2] = "cow";
// // arr [3] = "4";
// // alert (arr);*/

// // let fruits = [];
// // fruits [100] =  "Mango";
// // Replacing an array element
// // fruits [0] = "Orange";
// // alert (fruits);

// // push, pop, shift and unshift
// // let animals = ["Goat", "Dog", "Sheep", "Rabbit"];

// //  alert (animals);
// // //  animals.shift();
// // //  alert(animals);
// // //  animals.pop();
// // //  alert(animals);
// // //  animals.push("Banana",);
// // //  alert(animals);
// // //  animals.unshift("Elephant",);
// // //  alert(animals);

// // for (let key of animals){
// //     alert (key)
// // }

// // let arr = [1, 2, 3, ["g", "l"], []];
// // let toString = String(arr);
// // alert(arr [3] [0]);
// // arr[4][0] = 56
// // arr[4][1] = 12
// // arr[4].push(28); 


// // console.log (typeof(toString));
// // console.log (typeof(arr));
// // arr.splice(1,2)
// // alert(arr);

// // //arr.slice(start. end);
// // let newArr = ['Home', 'farm', 'market', 1, 2, 3, 4];
// // let rev = newArr.reverse();
// // alert(rev);
// // alert(newArr.slice(0, 5));

// // let arrSor = [1, 3, 7, 24, 4, 9, 10];
// // // let jSorting = arrSor.sort(function(a,b)
// // // {return b-a});
// // // alert(jSorting);

// // // let jSorting = arrSor.sort((a,b)=>b-a);
// // // alert(jSorting);

// // //concatenation

// // let name = ['Nwanagba', 'George', 'Machedda'];
// // let nameSort = name.sort((a,b)=>a-b);
// // //alert (nameSort);
// // let surname = ['Chilaka', 'Ikoro', 'Ekwonye'];
// // let otherName = ['Glory', 'Grace', 'Gina'];
// // let myName = name.concat(surname, otherName);
// // alert(myName.indexOf('Grace'));
// // // myName.sort();
// // // alert (myName);

// // // function doSomething(myName){
// // //     console.log(myName);
// // //     if (myName.indexOf('Chilaka')!== -1){
// // //         alert(myName.indexOf('Chilaka'));
// // //         const retMyName = myName.shift();
// // //         alert(myName);
// // //     }
// // // }
// // // // doSomething(name);
// // let someNums = [1, 2, 3, 6, 8];
// // someNums[1] = 5;
// // alert(someNums);
// // let getSum = someNums.reduce((sum, current) => sum + current + 10)
// // alert(getSum);
// // let eachElem = someNums.forEach((items, index, array) => {
// //     alert(index)
// // }
// // )

// // let studentNames = [{ id: 1, name: "George", age: 26 }, { id: 2, name: "Chidera", age: 27 },
// // { id: 3, name: "Chilaka", age: 28 }, { id: 4, name: "Bernandine", age: 26 }, { id: 5, name: "Shalom", age: 22 },
// // { id: 6, name: "Easy", age: 25 }];

// // //let student = studentNames.find(anything => anything.age === 26);
// // let student = studentNames.find(anything => anything.id === 2);
// // alert(student.name + '' + student.age)

// // alert(Array.isArray(studentNames))

// /*const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six",
//     "Seven", "Eight", "Nine",];
// function convert(str) {
//     let val = ''; currentVal = '';
//     for (let i = 0; i < str.length; i++) {
//         currentVal = parseInt(str[i]);
//         val = val + '' + numberWords[currentVal]

//     }
//     alert(`${str} in words is:${val}`)
// }
// const num = prompt("Enter your number")
// if (!parseInt(num)) {
//     alert("Invalid number")
// }
// convert(num)*/

// //Function

// // function greeting(){
// //     alert('Good morning Chilaka')
// // }
// // greeting();

// // function name(fName, lName){
// //     alert(fName + " is a son of " + lName) 
// // }
// // name("Michael", "Chilaka");

// // //Using variable inside a function

// // let y = 4;
// // function addTwoNumbers(){
// //     let x = 3;
// //     y = 10 
// //     alert(x + y);
// // }
// // addTwoNumbers();
// // //console.log( x);
// // console.log( y);

// // The return statement
// /*function studentName(){
//     let firstName = "Grace";
//     let lastName = "Anthony";
//     let name = firstName+ ' ' +lastName;
// }
//     return name;

// console.log(studentName());*/

// //function changeLettersToWords(){

// //}
// //Class work
// //Using the multi-dimensional array below, find the sum of all the values,
// //in the array and print out 20% ofv each value and map into the variable,
// //called percentage.

// // Your code should be written using a function

// let myNumbers = [
//     [20, 12, 24, 5, 6],
//     [1, 15, 8, 23, 10, 45],
//     [7, 300, 9, 12, 4, 80]
// ];

// /*let age = prompt ("How old are you", "");
// if (checkAge(age)){
// alert("You are now in the club")
// } else {
//     alert("You dont have permission")
// }*/

// function checkAge(age){
// if (age >= 18){
//     return true;
//     }
//    else if (age < 18){
// return confirm ('Do you have parental permission?');
//    }
// }
// // let access = prompt(age >= 18) ?
// //     "you can go to the cinema" : (permission) ?
// //         'you have parental permission to the cinema' : 'you are under aged';
// // console.log(access)

// //function expression

// let friends = function myFriends(){
//     // expression goes here
// }

// /*friends()
// let myCourseMate = function(){
//     let x = 5;
//     let y = 7;
//     alert (x + y)
// }

// myCourseMate(5, 7)
// console.log()*/

// // function addition(lName, fName){
// //     return lName + ' is my last name and ' + fName + ' is my first name';
// // }

// // function doSomething(x, y){
// //     alert(addition(x, y))
// // }

// // doSomething('Chilaka', 'Michael');

// // function myWord(m, n){
// //     alert(addition(m, n));
// // }
// // myWord('Ezekiel', 'Nnochiri');

// // var personDetail = {
// //     name: 'Onoja Matthew',
// //     email: 'onojamatthew@gmail.com',
// //     phone: '09076753423',
// //     address: 'umungasi road',
// //     age: '45',
// //     message:'Good morning from Mr. Matthew',
// //     addNumbers: function addition(){
// //         return {
// //             name: "Onoja",
// //             email: "onojamatthew@gmail.com"
// //         }
// //     }
// // }
// // alert(`${personDetail.addNumbers().name} ${personDetail.addNumbers().email}`)
// // console.log(`${personDetail.addNumbers().name} ${personDetail.addNumbers().email}`)

// // var data ={
// //     name: 'Matthew',
// //     age: 48,
// //     addNumbers: function addition(){
// //         return {
// //             name: "chilaka",
// //             complexion: "dark"
// //         }
// //     }
// // }

// // alert(`${data.addNumbers().name} ${data.addNumbers().complexion}`);

// let myObj = {};
// myObj.username = 'ichie';
// myObj.password = 'onyim';
// myObj.occupation = 'Developer';
// alert(myObj.password);
// console.log(myObj.occupation);

// var user = {
//     name: 'Ichie',
//     email: 'chilakamichael@yahoo.com',
//     age: '14',
//     occupation: 'Developer',
// }

// let newObj = user;
//  // for (let profile in user){
// //     alert(profile);
// //     alert(user[profile]);
// //     console.log(user[profile]);
// // }
// //  alert(newObj.name);
// newObj.name = 'Iheanacho';
// alert(user.name)
// // for (let profile in user){
// //     alert(profile);
// //     alert(user[profile]);
// //     console.log(user[profile]);
// // }

// function someNames(name1, name2){
//     return {
//         name1,
//         name2
//     }
// }
// let myNames = someNames('Okey', 'Cynthia');
// alert(myNames.name2)

// var user = {
//     name: 'Ichie',
//     email: 'chilakamichael@yahoo.com',
//     age: '14',
//     occupation: 'Developer',
//     address:{
//         state: 'Abia',
//         city: 'Aba',
//         street: '44B Aba-Owerri Road'
//     }
// }

// let emptyObj = {};
// // for (let key in user){
// //     emptyObj[key] = user[key];
// // }
// // //alert(emptyObj.name);
// // emptyObj.name = 'Chibuike';
// // alert(emptyObj.name);
// // alert(user.name);
// //Object.assign(destination[obj1, obj2])
// Object.assign(emptyObj,user);
// alert(emptyObj.name)

// function printName(){
//     var name = 'chibueze';
//     console.log(name)
    
//     }
    
//     printName();
//     console.log('outside', name)



