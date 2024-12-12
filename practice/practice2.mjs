import {capitalizeString} from './import-export.mjs';

//in this file i used import and export statements so to execute file i renamed it to index.mjs 
//  Node.js will treat .mjs files as ES Modules by default 

function freezeObj(){
    "use strict"
    const MATH_CONSTANTS = {
        PI :3.14
    }
    Object.freeze(MATH_CONSTANTS);
    try{
        MATH_CONSTANTS.PI =99;
    }
    catch (ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;

}




const PI = freezeObj()

console.log(PI);


//ARROW FUNCTIONS
var magicc = function (){
    return new Date();
}

/*we can turn this function into an arrow fun by removing 
function keyword
curly braces:  when we returning single value
return keyword : when we returning single value
bY adding => aftr paranthesis
*/
const magic = () => new Date();

console.log(magic())
//writing arrow function with parameters

 const myConcat = ( arr1,arr2) => arr1.concat(arr2);

 console.log(myConcat([1,2],[3,4,5]));

 //higher order arrow functions

 const realNumberArray = [4,5.6,-7,-20,9.4,0,6,-2,3];

const squareList = (arr) =>{
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0 ).map(x => x*x*x);
    return squaredIntegers;
}
const squaredIntegers= squareList(realNumberArray);
console.log(squaredIntegers);

//Default Parameters

const increment = ( function (){
    return function increment(number,value =1){  // value =1 is a  defualt parameter and it is used when user doesnt pass  an argument for it
        return number + value;
    }
})();
console.log(increment(5,2));   // here we pass 5 and 2 ,so 2 is assigned for value
console.log(increment(5));  //here we pass 5 and dont pass argument for value so value takes 1 

//Rest operator

const sum = (function (){
    return function sum(...args){  //rest operator is a parameter that allows a function to accept indefinite arguments as an array ,represented by three dots
        return args.reduce((a , b)=> a + b,0)
    }
})();

console.log("rest operator  example = ",sum(1,2,3,4));

//spread operator

const arr1 = ['JAN','FEB','MAR','APR','MAY'];

let arr2;

// (function() {
//     arr2 =arr1; // both arrays have same address and any chane made in arr1 orarr2 it reflects another array
//     arr1[0] ='potato';
// })();

//console.log(arr2);   ["potato","FEB","MAR","APR","MAY"]

(function(){
    arr2 = [...arr1];
    arr1[0] = 'potato' // arr2 is equal to contents of the arr1 means copy of the arr1 ,any changes made to arr1 or arr2 doent reflect the another one
})(); 

console.log(arr2)  //['JAN','FEB','MAR','APR','MAY']
console.log(arr1)  //['potato','FEB','MAR','APR','MAY']

//Destructuring assignment

 const voxel = {x:3.6,y:7.5,z:3.25};
//   var a = voxel.x;  
//   var b =voxel.y;
//   var c = voxel.z;    equals to below code 

  const { x:a,y:b,z:c} = voxel;  //destructuring object
  console.log(a,b,c);  // 3.6 7.5 3.25

  const fruits = {
    apples : 1,
    bananas : 3,
    papaya : 5
  }

//   const {apples : ap,bananas : bb , papaya : pp} = fruits;  
// console.log(ap,bb,pp)  //1 3 5

const {apples : ss} =  fruits;  //here get apples value from fruits and assign it to ap
console.log(ss)  //1

//Destructuring nested objects

const LOCAL_FORECAST = {
    today : {min :72,max : 83},
    tomarrow : {min : 73.3,max : 84.6}
};
 function getMaxOfTmrw(forecast){
    const {tomarrow : { max : maxOfTomarrow }}= forecast
    return maxOfTomarrow;
 }



console.log(getMaxOfTmrw(LOCAL_FORECAST));  //84.6

//use destructuring assignment to assign variables from arrays

const [i,j,,k]= [1,2,3,4,5,6];  // i=1,j=2, 3 skipped k=4
console.log(i,j,k)  //1 2 4

let u = 4,v=5;
(() => {
    "use strict";
    [u,v] = [v,u];
 })();
// [u,v] = [v,u];
console.log(u,v)

//destructuring assignment with rest operator

const source = [1,2,3,4,5,6,7,8,9,10];
 function removeFirstTwo(list){
    const [,,...arr] = list   //first two elements skipped and rest of elements stored in args which using rest operator to store rest of all values
    // const [x,,...arr] = list; //x=1 then 2 elements skipped then rest of all elements stored in args
    return arr;
 }
 console.log(removeFirstTwo(source))
 console.log(source)  //source remains same

// use destructuring assignment to pass an object as a function's parameter
 const stats = {
    max : 54.43,
    standard_deviation : 4.34,
    mode: 23.87,
    min : -0.75
 }

//  function half (stats){
//     return stats.max+stats.min     it can be write lioke below
//  }
function half ({max,min}){  //object destructuring
    return max+min
}
  console.log(half(stats));

//   const {max,min,mode} =stats; 
//   console.log(max) //54.43 

//Template Literals : we use backticks and for multiline purpose and to access variables within strings and we can 
// include quotation marks within backticks

const person = {
    name : 'ramya',
    age : 23
}
const greetings = `hai ,hello "i am" ${person.name} 'and' 
i am ${person.age} years old` 
console.log(greetings)

const result = {
    success : [1,2,3],
    failure : [4,5,6],
    skipped : [7,8,9]
};
function makeList(arr){
    const resultDisplayArray =[];
    for (let i=0;i<arr.length;i++){
        resultDisplayArray.push(`<li class = "text-warning">${arr[i]}</li>`);
    }
    return resultDisplayArray
}

const resultDisplayArray=(makeList(result.failure));
console.log(resultDisplayArray);

//write concise object literal declerations using simple fields(ES6)

// const createPerson = (name,age,gender) =>{
//     return{
//         name : name,
//         age : age,
//         gender : gender
//     }
// }
// creating objet with parameters values and having same key names as parameters then we can write like below
const createPerson = (name,age,gender) => ({name,age,gender});  //it return an object

console.log(createPerson("ramya",23,"female"));   // { name: 'ramya', age: 23, gender: 'female' }
console.log(createPerson)  //[Function : CreatePerson]

//write concise declerative functions  (ES6)

const bicycle = {
    gear : 2,
    setGear : function(newGear){  //setGear(newGear){   statements } we can remove colon and function keyword 
        "use strict"
        this.gear =newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear)  //3

//use class syntax to  define a constructor function (es6)

//getters and setters

//import and export

//import {capitalizeString} from './import-export.mjs'
// Node.js will treat .mjs files as ES Modules by default.
const cap = capitalizeString("hello!")

console.log(cap)