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