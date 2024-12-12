console.log(a)  //we are accessing a before its declaration and it shows undefined because a is declared with var and it is available at the top of the scope(anywhere in the program)
   
var a;
console.log(a)   // here  value for a is not assigned (not defined) so it shows undefined when we try to print a

// console.log(c);  //cannot access c before  initialization( we cannot print a variable which is declared with let before its declaration)
let c;
console.log(c)  //undefined

//case sensitive : js will treat uppercase and lowercase characters as different

var apple = "apple";

var APPLE = "APPLE";

/* redeclaring variables:
1.var: it is function scoped or global scobal scoped when declared outside of function but do not have block scope.
 No error is thrown when you redeclare the variable.
The second declaration overwrites the value of the first one.
It can lead to confusion and bugs in larger codebases, especially in functions or loops. */

var flower = "rose";
var flower = "lilly";

console.log(flower)  //lilly

var state = "andhra";
if (true){
    var state = "telangana";
    console.log(state)          //telangana
}
console.log(state)              //telangana  bcoz var does not have block scope its get updated to last value 


/*2. let : redeclaring with let in the same scope will results in an error (syntax error:)
//          let has block scope if you redeclare a variable within different blocks (inside function or loop) its allowed

let s= 3;
 let s = 5;    syntax error : s already been declared */

let x = 5;
if(true){
    let x = 10; //here x is redeclared ,this is fine,because its in a different block
    console.log(x)  //10
}
console.log(x) //5   

/* const : (same as let ) redeclaring in same scope will results in an error (syntax error)
            however ,const also makes the variable immutable(its value cannot be reassigned ) after its initialization
            const also has block scope ,so redeclaring in different blocks is fine
*/

const z = 10;
 if (true){
    const z = 20;   //z = 20 (will give us syntax error we cannot reassign value for const variable)
                    //but we can redeclare it in different block
    console.log("inside z="+z);
 }
 console.log("outside z="+z)

 

//index of ,find index 
//map,filter,reduce



  

