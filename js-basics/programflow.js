// if() statements
tax=0
if(5===5){
    console.log("yes")

}

//if else  statemets

if(false){
    console.log("no")
}
/*else{
    console.log('yes')
}*/
//condition in else block
let state= "andhra"
if(state==="andhra"){
    console.log("in if block")
}
else if(state==="tamilnadu"){
    console.log("in else if condition")
}
else if(state!=="tamil"){
    tax=100
}
console.log(tax)                      //prints 0   bcoz tax is global varibale its value in global scope is 0
                                        //in else if block tax value is 100 but we print it in out of else block

//comparisions

if(1.1+1.3!==2.4){                           //1.1+1.3=2.4000004   so 2.4 is not equal to 2.4000004
    console.log("true")
}

if(+(1.3+1.1).toFixed(2)===2.4){          //it checks upto 2 decimal places
    console.log("true")
}


//TERNARY OPERATOR

/*let value=(condition)? true statement:false statement

if condition is true  then true stament get executed 
else false statement get executed
*/
let value=(5>0)?" positive":"negative";
console.log(value)

//BLOCK SCOPE
taxx=0
if(taxx===0){
    tax=5
    console.log(tax)            //it prints 5 bcoz in local scope it is 5
}
console.log(tax)                //it prints 0 bcoz tax value outside of if block is 0



//LOOPS      FOR WHILE DO..WHILE
let i=1;
while(i<5){
    console.log(i)              //
    i++;
}

for (let i= 0;i<5;i++){                    //initialization done only once, condition check for n+1 times
    console.log(i)                         

}


do {
    console.log(i)
    i++;

}while(i<=5);
j=-3
do{
    console.log(j)          //here actual condition fails although j value printed once
    i--                     //do while will execute once even the condition fails
}while(j>1);




