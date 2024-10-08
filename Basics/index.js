// creating a number increaser 

// let username = prompt("what is your name?")

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    console.log("increase");
    count++;
    counter.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    counter.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    counter.textContent = count;
}

// creating a random number generator

const rollBtn = document.getElementById("myButton");
const number = document.getElementById("myNumber");

rollBtn.onclick = function() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    number.textContent = randomNumber;
}

// subscription checker 
const subscribed = document.getElementById("subscribed");
const visaBtn = document.getElementById("visaBtn");
const payPaylBtn = document.getElementById("paypalBtn");
const masterBtn = document.getElementById("masterBtn");
const subscribedBtn = document.getElementById("subscribedBtn");
const isSubscribed = document.getElementById("isSubscribed");
const cardType = document.getElementById("cardType");

subscribedBtn.onclick = function(){
    // if (subscribed.checked){
    //    isSubscribed.textContent = `You are subscribed`;
    // }else{
    //     isSubscribed.innerHTML = `You are <strong>not</strong> subscribed`;
    // }
    // using trinary operator
    isSubscribed.innerHTML = subscribed.checked? `you are subscribed` : `you are <strong>NOT</strong> subscribed`;

    if(visaBtn.checked){
        cardType.textContent = `You are using a visa card`;
    }else if (payPaylBtn.checked){
        cardType.textContent = `You are using paypal`;
    }else if (masterBtn.checked){
        cardType.textContent = `You are using master card`;
    }else{
        cardType.textContent = `You must select a payment type`;
    } 
}

// string funtions 
let username = "Gugu";
username.trim() //removes whitespace
username.length //return length of string
username.repeat(3) // will print the string 3 times
username.startsWith("G") // return True if string starts with G
username.endsWith("U") // will return True if sstring ends with
username.charAt(1) // return the value at index 1  in the string
username.includes("g") // will reurn True if character is in string 
username.replaceAll("g", "9") // will replace the characters g  with 9 in the string 
username.padStart(4, "p") // will add p into the string until the string is 4 in length 
username.toUpperCase()// will return the string in uppercase

//string slicing - creating a sub-string from another string
let fullname = "Gugu Mdluli";
fullname.slice(0, 2) // will return the string from 0 to 1 it excludes 2
fullname.slice(0, fullname.indexOf(" ")) // will return the first name before the " " space
let lastname = fullname.slice(fullname.indexOf(" ") + 1) // return everything after " " the space 

let email = "gugulethumdluli98@gmail.com"
let Username = email.slice(0, email.indexOf("9")); 
let extention = email.slice(email.indexOf("@"));

// method chaining - calling one method after another in onr continious line of code 

let username2 = window.prompt("Enter you name")
username2 = username2.trim().charAt(0).toUpperCase() + username2.trim().slice(1).toLowerCase();

// this will print out the user input so that the first character is uppercase and the rest are lowercase


