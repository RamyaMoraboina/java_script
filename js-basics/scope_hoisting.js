
//GLOBAL SCOPE
 let a=23
 function showProduct(){
    console.log(a);
 }
 showProduct();

 //FUNCTIONAL SCOPE
 let b=234;
 function showPrice(){
    let c=456
    console.log(b);
    console.log(c);
 }
 showPrice();
 //console.log(c);    cant access c in out of the function

 
 function showProductId(){
    let productId=89;
    function fix(){
        let productId=67;
        console.log("in fix :",productId);
    }
    fix();
    console.log("in showproductid:",productId)
 }
 showProductId();


 //VAR AND HOISTING

 price=1200
 console.log(price);                //p value 1200 printed
 var price=123;


 //price2=20
 //console.log(price2);             get an reference error,cannot access price2 before inititalization
// let price2=123;


 //function declerations are fine

 showPrice();

 function showPrice(){
    console.log("ramya")
 }



 //undeclared variables and strict mode

 
  p=1234
  console.log(p);       // p value printed
  //console.log(window.p)  //p value printed     althogh it is undeclared variable

/*"use strict"
cc=123;
console.log(cc);     //uncaught reference error cc is not defined*/

"use strict"
const num=465
console.log(num);               //value of variable num will get Printed






