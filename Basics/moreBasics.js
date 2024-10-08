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


