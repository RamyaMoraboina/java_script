//NUMBERS   Strings
let num=20;
console.log(typeof num);

/*operations
  +,-,*,/,%,++.--
  
  a+=b
*/

let price=1.1+2.3;
console.log(price);

price=20- -2
console.log(price)
let a=true;
console.log(typeof a);
 // STRINGS
let s= "ramya";
console.log(typeof s);

let message=" hello\" world\" "  // it will print " " within double quotes by using \
console.log(message);
 let name='andrea'

 //MANIPULATING STRINGS

let msg="ramya"+ "moraboina";
console.log(msg.toUpperCase())
console.log(msg.toLowerCase())
console.log(msg.substring(1))   //prints msg from index 1
console.log(msg.substring(5))   //prints msg from index 5

let b='23'
console.log(b+1)  //add integer and string results string ......231


//converting string to int

let x=Number.parseFloat("A123.12")

console.log(x)    // NaN   
console.log(typeof x) // NUMBER

let xx=Number.parseFloat("123.12A")

console.log(xx)    // 123.12  
console.log(typeof xx) // NUMBER

//converting int to string

let c= 223
console.log(c.toString())    //223

console.log(typeof c.toString())  //string

//BooleanVariables

let saved= true

console.log(typeof saved)   //boolean
saved=!saved
console.log(saved)   //false

//NULL AND UNDEFINED

//uninitialized variable is called as  null varible

let pric;

console.log(pric)  // undefined

let n=null;
console.log(n) //printd null
//showMessage(n)   it will give empty space

//OBJECTS AND SYMBOLS       created by {..........}

/*let person ={
    first='ramya',
    secon='moraboina'
};

console.log(person.first)*/









