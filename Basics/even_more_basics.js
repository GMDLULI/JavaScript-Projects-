// static - keyword used to describe properties or methods that belong to a class 
//         rather then the objects created from that class.

class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius * 2
    }
    static getcircumfarance(radius){
        return 2 * this.PI * radius
    }
}

// console.log(MathUtil.PI);// called by the class name 
// console.log(MathUtil.getDiameter(18));
// console.log(MathUtil.getcircumfarance(12))

//inheritance - allows a class to inherit properties and methods of another class

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Dog extends Animal{
    name  = 'Dog';
}

class Cat extends Animal{
    name  = 'Cat';
}

class Snake extends Animal{
    name  = 'Snake';
}

const dog = new Dog();
const cat = new Cat();
const snake = new Snake();

// console.log(dog.eat());
// console.log(dog.sleep());
// console.log(cat.eat());
// console.log(cat.sleep());
// console.log(snake.eat());
// console.log(snake.sleep());

// super- key word to call the constructor of the parent class and access the 
//        properties and methods of the parent (superclass)

class Animal2{
    constructor(name , age){
        this.name = name; 
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves ${speed} mph`)
    }
}

class Rabbit extends Animal2{
    constructor(name, age ,runspeed){
        super(name, age);
        this.runspeed = runspeed;
    }

    run(){
        console.log(`this ${this.name} can run.`);
        super.move(this.runspeed) // to call a method from the parent class 
    }

}
class Fish extends Animal2{
    constructor(name, age, swimspeed){
        super(name, age);
        this.swimspeed = swimspeed;
    }
    swim(){
        console.log(`this ${this.name} can swim.`);
        super.move(this.swimspeed) // to call a method from the parent class 
    }


}
class Hawk extends Animal2{
    constructor(name, age, flyspeed){
        super(name, age);
        this.flyspeed = flyspeed;
    }
    fly(){
        console.log(`this ${this.name} can fly.`);
        super.move(this.flyspeed) // to call a method from the parent class 
    }

}

const rabbit = new Rabbit("Bunny", 1, 25);
const fish = new Fish("nemo", 1, 15);
const hawk = new Hawk("Hawk", 10, 50);

//console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runspeed);
// rabbit.run();
// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimspeed);
// fish.swim();
// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flyspeed);
// hawk.fly();

//getters = method that makes a property readable
// setters = method that makes a property writable

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    // setter
    set width(newwidth){
        if (newwidth > 0){ 
            this._width = newwidth
        }else{
            return 'undefined number'
        }
    }

     // setter
     set height(newheight){
        if (newheight > 0){
            this._height = newheight;
        }else{
            return 'undefined number'
        }
    }

    // getter
    get width(){
        return this._width;
       
    }

    // getter
    get height(){
         return this._height;
       
    }
}

const rectangle = new Rectangle(3, 4)
rectangle.width = -9;
rectangle.height = "Pizza";
console.log(rectangle.width);
console.log(rectangle.height);

// destructuring = extract values from arrays and objects,
//                then assign them to variables in a convient way
//                [] = to perform array destructuring
//                {} = to perform object destructuring 


// swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a]
console.log(a); // return 2
console.log(b); // return 1

// using a list of colors 
const colors = ['red', 'green', 'blue', 'black', 'white'];

[colors[0], colors[4]] = [colors[4], colors[0]]// swapping the first and last element
console.log(colors);

const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors;
console.log(firstcolor); // withh return the first element of the colors array
console.log(secondcolor); // will return the 2nd element of the colors array
console.log(thirdcolor); // will return 3rd element of the colors array
console.log(extracolors); // will return the remaining elements 

// with objects 
const person1 = {
    firstname: 'Gugu',
    lastname: 'Mdluli',
    age: 26,
    job: "software Dev"
}

const person2 = {
    firstname: 'Motheo',
    lastname: 'Mokoena',
    age: 24,
    job: "Teacher"
}

const {firstname, lastname, age, job} = person1;
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);

function displayPerson({firstname, lastname, age, job}){
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person2)

// nested objects = objects inside of other objects.
//                  Allows you to represent more complex data structured
//                  child object is indide or enclosed by the parent object
//                  Person{address{}, contactInfo{}}

const persopn3 = {
    fullname: 'Gugulethu mdluli',
    age: 26,
    hobbies: ['cooking', 'reading', 'playing chess'],
    address: {
        streetName: 'tswako',
        streetNumber: 12345,
        country: 'South Africa'
    },
    contact: '076510034'
}

// to access properies individually
console.log(persopn3.fullname);
console.log(persopn3.age);
// using indexing to access list/array properties 
console.log(persopn3.hobbies[1]); // will return reading
// accessing child object properties 
console.log(persopn3.address.streetName);
//using a loop to access all the properties 
for(const prop in persopn3.address){
    console.log(persopn3.address[prop])
}

//nested objects with classes 

class Person3 {
    constructor(fullname, age, ...address){
        this.fullname = fullname,
        this.age = age,
        this.address = new Address(...address)
    }
}

class Address{
    constructor(street, city,country){
        this.street = street,
        this.city = city,
        this.country = country
    }
}

const gugu = new Person3("Gugulethu Mdluli",26, "tswako",
                                                'Johannesburg',
                                                "South Africa"
 )

 console.log(gugu.fullname);
 console.log(gugu.age);
 console.log(gugu.address.country);
 for (const me in gugu.address){
    console.log(gugu.address[me]);
 }


 const fruits = [
    {name: 'apple', color: "red", calories: 78},
    {name: 'grape', color: "purple", calories: 58},
    {name: 'orange', color: "orange", calories: 45},
    {name: 'banana', color: "yellow", calories: 108},
    {name: 'pinapple', color: "yellow", calories: 156}

 ]

 // to add properties inside use  push to add at the end of the list object
 fruits.push({name: "coconut", color: "white", calories: 54})
 console.log(fruits);

 // to remove properties use pop
 fruits.pop(); // will remove the last object ...creates a stack 
 console.log(fruits)

 // use foreach to print out the elements 
 fruits.forEach(fruit => console.log(fruit))

 // use map to name a list of the names of the fruits 
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

 // use fliter to print out the object with the apple name 
const apple = fruits.filter(fruit => fruit.name == 'apple');
console.log(apple)

 // use reduce to show wthit object has the most calories 
 const mostCals = fruits.reduce((max, fruit) => max.calories > fruit.calories ? max : fruit)
console.log(mostCals)

// sort() = method used to sort elements of an array in place.
//          sorts elemets as stringd in lexicographic order, not alphabetical
//          lexicographical = (slphabet + numbers + objects)

// sorting alphabetically 
const foods = ["apple", 'grapes', 'banana', 'carrotos']
foods.sort() // will result in apple, banana, carrotos , grapes 

// sorting lexicographically
const numbers = [1, 10, 2, 9, 3, 4,6, 5, 7, 8]
numbers.sort() // will return [1, 10, 2, 3, 4, 5, 6,7]

numbers.sort((a , b) => a - b) // will return[1,2,3,4,5,6,7,8,9,10]

//lets sort the fruits object by the highest number of calories
fruits.sort((a, b)=> a.calories - b.calories) // will ssort the object from the smallest calories to the biggest 

console.log(fruits)

// Date Objects = Objects that contain values that represent dates and times
//              these date objects can be changed and formatted 

const date = new Date();
date.getFullYear() // returns year
date.getDay // returns the day 
date.getMonth // returns the month 
date.setFullYear(2023) // will change the year 
// date.setDay(2) // set to tuesday 

const date2 = new Date('2023-12-13') // another way to set the date 


// closure = A function inside another function 
//           the inner function has access to the variables
//           and scope of the outer function 
//           allows for private variables and atat maintainance

function outer(){
    let message = "Hi";

    function inner(){
        console.log(message)
    }
    inner()
}

outer(); // will call the inner function to print hello


// setTimeout() = function that allows you to schedule the execution of a function after a certain amount of time in milliseconds

//                setTimeout(callback, delay)

function hello(){
    console.log("hello");
}

setTimeout(hello(), 2000);

// ES6 Module = An external file that contains reusable code 
//              that can be imported into other JS files.
// same as TS lessons look at typescript lessons 


// synchronous = Executes line by line consecutively in a sequential manner 
//              code that waits for an operation to complete.



// asynchronous = Allows multiple operations to perfomr concurrently without replaying on another operation to occur
//              Doesn't block the execution flow and allows the program to continue running
//              (I/O) operations, network, requests, fetching data)
//              handled with : callbacks, Promises, Async/Await

//using callbacks 

function func1(callback){ // asyncrnous function will run the function calledback after executing the console.log("task 1") after 3 seconds 
    setTimeout(() => {console.log('Tast 1');
                        callback()}, 3000)
}

function func2(){ // syncronous function
    console.log('Task 2')
    console.log('Task 3')
    console.log('Task 4')

}

func1(func1);

// Error = An object that is created to represent a problem that occurs
//         Occur ofthen with user input or estabhlishing a conneection 
// use try, catch and finally to handle errors 


try{
    const divided = window.prompt('Enter a dividend: ');
    const divisor = window.prompt("Enter a divisor: ");

    if(divisor == 0){
        throw new Error("You cant't divide by zero!");

    }
    const result = divided /divisor;
}catch(error){
    console.log(error);
}finally{
    console.log('this executes anyway')
}