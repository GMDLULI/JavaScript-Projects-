const minNum = 1;
const maxNum = 100;
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1));
console.log(randomNum);

let userAnswer = ""
let attempts = 0;
let showWin = document.getElementById("winner");

while(userAnswer != randomNum){
    userAnswer = window.prompt("Guess the numebr between 1 and 100");
    Number(userAnswer)

    if(isNaN(userAnswer) || userAnswer < minNum || userAnswer > maxNum){
        window.alert("please enter a valid number");
    } 
    else{
        attempts++;
      if (userAnswer < randomNum){
        window.alert("To Low try again...");
        }
    else if ( userAnswer > randomNum){
            window.alert("To High try again...");
        }
    }
}
showWin.textContent = `Winner!!! you solved in ${attempts} attempts`;

// Array methods
let fruits = ["Apple", "Orange", "Banana"]

fruits.push("Coconut") // will add Coconut to the end of the array
fruits.pop() // remove and return the first value of the array 
fruits.unshift("mango") // add an element into the begibing of the array
fruits.shift() // will remove an element at the beginning 
fruits.length // return length of array
fruits.indexOf("Apple") //return index of element
fruits.sort() //sorts the array
fruits.reverse() //reverses the array

//spread operator -- allows interables to be expanded into separate elements
let numbers = [1,2,3,4,5]
//let maxNumber = Math.max(numbers) // this will not work
let maxNumber = Math.max(...numbers) // this will work and result into the maximum number. It unpacks the elements into different elements


//rest operator (...rest) allows a function to work with a variable number of arguments by bundling them into an array 
// its is the oposite of an array 

function openFridge(...foods){ //creates arra foods
    console.log
}

const food1 = "Apple";
const food2 = "Banana ";
const food3 = "Pie";

openFridge(food1, food2, food3); // will priny out {"Apple", "Banana", "Pie"}


// call back functions  - a function that is passed as an arguement to another function
function hello(callback){// the function that will be an argument
    console.log("Hello");
    callback(); // will call the function  
}

function goodbye(){
    console.log("goodbye");
}

hello(goodbye) // only add the function name will print both hello and goodbye


//forEach() method iterates over elements and applies a specific function (callback) to each method

let numbers1 = [1,2,3,4,5]

numbers1.forEach(double) // run the double function in each element in the list , it will double each number

function double(element, index, array){
    array[index] = element * 2;
}

// .map() function - accepts a callback and applies that function to each element of an array, the return a new array
const numbers3 = [1,2,3,4,5]

numbers3.map(square) // this will return [1, 4, 9, 16, 25]
function square(element){
    return Math.pow(element, 2)
;}


// .filter() = creates a new array by filtering out elements

let numbers4 = [1,2,3,4,5,6,7]

let filtered = numbers4.filter(isEven); // return an array of even numbers from the number4 array [2, 4, 6, 8]
function isEven(element){
    return element % 2 === 0;
}

//.reduce() = reduces the elements of an array to one value

const price = [5, 30, 10, 25, 15, 30]

const total = prices.reduce(sum) // return the sum of all the elements in the array  

function sum(accumulator, element){ //accumulator stands for the previous element and the element is the next one
    return accumulator + element
}

// function expressions = a way to define functions as values or variables 

const hello = function(){console.log("hello")} // defining a funcion as a variable

setTimeout(function(){
    console.log('hello') // defining a function as we parameter.
}, 300) // will call this function after 3000 miliseconds 

// now usinf the map filter amd reduce functions 
let nums = [1, 2, 3, 4, 5, 6]
const sumNumbers = nums.reduce(function(accumulator , element) {
    return accumulator + element
})

const Evennums = nums.filter(function(element){
    return element % 2 === 0;
})

const doublenums = nums.map(function(element, index, array){
    return array[index] = element * 2;
})

const squarenums = nums.map(function(element){
    return Math.pow(element, 2)
})
 

// arrow function = a consise way to write a function you'll only use once 
const hello = () => console.log("Hello") // one line without params
const hello2 = (name, age) => {console,log(`hello ${name} you are ${age} years old`)} // with params

// as a function expression
setTimeout(() => console.log("hello"))

// using map, filter and reduce 
const Sum = nums.reduce((accumulator, element) => accumulator + element)
const EvenNums = nums.filter((element) => element % 2 === 0)
const doubleNumbers = nums.map((element, index, array) => array[index] = element * 2)
const squareNumbers = nums.map((element) => Math.pow(element, 2)) 

// objects  =  A collection of related properties and or methods which can 
// represnt real life objects.

const person = {
    Firstname: "spongebob",
    lastname: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHi: function (){ console.log(`hi im ${this.Firstname}`)}// this = reference too the object 

}
const person2 = {
    Firstname: "Patrick",
    lastname: "Star",
    age: 40,
    isEmployed: false,
    sayHi: () =>console.log("daaaaaaa")

}
console.log(`${person.Firstname} ${person.lastname} is ${person.age} does he work? ${person.isEmployed}`);
console.log(person.sayHi())
console.log(`${person2.Firstname} ${person2.lastname} is ${person2.age} does he work? ${person.isEmployed}`);
console.log(person2.sayHi())

// constructor = method to define the properties and methods of an object
function Person(Firstname, lastname, age, isEmployed){
    this.Firstname = Firstname,
    this.lastname = lastname,
    this.age = age,
    this.isEmployed = isEmployed    
}

const me = new Person("Gugu", "Mdluli", 26, true)

//class = (ES6 feature) provides a more structed and clearner way to 
//          work with objects compared to tradtional constructors 

class Product{
    // declaring constructor 
    constructor(name, price){
        this.name = name,
        this.price = price
    }

    // declaring method
    displayProduct(){
        console.log(`Product: ${this.name} price: R${this,price}`)
    }
}

// make an object of the  class
const product = new Product("Shirt", 24.00)
product.displayProduct(); // will result in Product : Shirt price: R24.00
