/* ECMAScript 2015 (ES6) introduced a significant number of updates to JavaScript,//  making the language more powerful, expressive, and easier to work with. It was a major update 
 to the JavaScript language, introducing new syntax, features, and enhancements that improved both
  performance and developer productivity.*/

//1.Let and Const : unlike var which is function scoped,let ,const are block scoped ,meaning the variable is accessible within the block of code(like within for loop or conditional)
let x = 10;
if (true) {
    let x = 20;
    console.log(x);  //20
}
console.log(x)  //20

//const is similar to let but the variables value cannot be reassigned after initialization
//however itdoesnt make objects and or arrays immutable you can still mutate the contents of objects or arrays declared with const

const obj = {
    name: 'ramya'
}
obj.name = 'sivaa' //mutating contents of obj not an obj it self
console.log(obj.name);

//2.Arrow functions : provide shorter syntax  for writing functions.they also have a special feature:they lexically bind the this value

const sum = (a, b) => a + b
console.log(sum(2, 3))  //5

//lexical this binding

this.age = 23; //since it is global object we can access it anywhere
const objj = {
    name: ' object',
    regularFunction: function () {
        console.log(this.name)  //this refers to obj 
    },
    arrowFunction: () => {
        console.log(this); //  {age : 23} this keyword refers to global or window object
        
        this.name = 'ramya'   
        console.log(this)  //{age : 23, name : ramya}
        console.log("arrowFunction",this.name); //this refers to the surrounding lexical scope
    }
};
objj.regularFunction();  //'object'
objj.arrowFunction();  //undefined because is inherited from the outer scope,likely the global context

//3.classes : es6 provides class syntax which provides a more structured way to define constructor functions and prototypes
/*features:
constructor : initializes class
extends : enables inheritance
super : calls the parent class's constructor
*/
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hello,my name is ${this.name}`);
    }
}
const john = new person("john", 30);
john.greet();  //hello,my name is john
//ex 2
class Animal{
    constructor(name){
        this.name =name
    }
    speak(){
        console.log(`${this.name} makes noice in parent`)
    }
}
class Dog extends Animal{ //since it inherit from Animal and it doesnt have its own constructor it uses parentclass constructor 
    speak(){
        console.log(`${this.name} barks in child`)
    }
}
const dog = new Dog('Buddy');  //
dog.speak();
//4.Template Literals : they allows for string inter polation,multiline strings
//we can write variables within strings, we can write double and single quotes
//it includes spaces within backticks ((``)
const nam = 'Alice';
const greeting = `Hello, 'Hai', 
 Iam  ${nam}!, 
"how are you doing"`
console.log(greeting)

//  5.Destructuring Assignment: allows unpacking values from arrays or objects into distinct variables in a more concise and readable way
//Array destructuring :  assign values in sequential manner
const arr = [1, 2, 3];
const [, y, z] = arr;
const [a] = arr //a=1
console.log(y, z)  //2 3

//object destruring : 
const object = { girl: 'ramya', age: 23 }
const { girl, age } = object //
//or  const {firstname : girl,number : age} = object  //firstname = 'ramya , number = 23
console.log(girl, age) //girl='ramya',age =23

//with default values:
const [b = 10, c = 20] = [5]
console.log(b);  //5  ,c=20

//6.Default Parameters: Allow functions to have dafault values for parameters when no value provided

function greet(name='guest'){
    return `hello!${name} `
}
console.log(greet());  //default parameter is taken (hello!guest)
console.log(greet('ramya'))  //hello!ramya

//7.Rest and spread operators
//... syntax is used as the rest operator to collect multiple elements into an array or as the spread oprator to unpack arrays or objects

// Rest operator: collects all remaining elements into an array
function summ(a,...num){
    //a=1 num=[2,3]
    return num.reduce((a,b) => a+b,0);
}
console.log("in rest operstor:",summ(1,2,3))
//spread operator : expands elements of an array or object into individual items.
const array = [1,2,3]
const newArr = [...array,4,5]   
console.log(newArr)//[1,2,3,4,5]

//8.Modules (import and export) : modules make it easier to ,manage dependencies and reuse code
// export : make variables or functions as exportable
//import : allows importing exported variables or functions from other modules

/* math.js  for example iam writing these code in same file for better understanding
we need to import this math.js in main.js to ue variables and functions which ae exported int his mdule
export const pi = 3.14;
export function square(x){
    return x*x;
}
*/

/* main.js
import {pi,square} from './math.js'    when both filkes are in same folder
console.log(pi);
console.log(square(2))
*/
//9.promises : an object representing the eventual completion (or failure) of an asynchronous operation
// then(): handles the successful resolution of the promise
// cath ():handles errors
// finally(): executes code after a promise is settled,regardless of the outcome

const fetchData = new Promise((resolve,reject) =>{
    setTimeout(() => resolve(" in  promises example Data fetched"),1000)
});

fetchData
.then((data) =>console.log(data) )
.catch((error) => console.log(error));

// 10. Enhanced object literals

// simplifies object creation with shorthand syntax for properties and methods
//method definition without function keyword , property shorthand

const alice = 'Alice';
const agee = 13;

const person1 = {
    alice,  // using variables declared outside as keys to the object
    agee,
    greet(){ // this function dont have function keyword
        console.log(`my name is ${this.alice}`)
    }
}
console.log("in object literals age ",person1.agee)
person1.greet()
// console.log(typeof person1.alice) string

//Map and set
//map : key-value pairs where keys can be any datatype 
const map = new Map();
map.set('key','value');
console.log(map.get('key'))  //value

//set : a collection of unique values (set doesnt allow duplicates)
const set = new Set([1,1,2,3,4])  //{1,2,3,4} duplicate 1 is removed,
console.log(set)

// For-of Loop: a new syntax for iterating over iterable objects like arrays,strings,map,set

const arr2 = [1,2,3,4]
 for (const num of arr2){
    process.stdout.write(num+" ")  //to print numbers in same line
    
 }
 process.stdout.write('\n')  // to go to newline after for loop execution
