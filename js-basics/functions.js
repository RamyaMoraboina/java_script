//CREATING FUNCTIONS
function showMessage(){
    console.log('in a function');
}
showMessage();


//Function expression

let fn=function(){
    console.log('message');
}
fn();

let myfunction=function logging(){                  //function name is optional #logging
    console.log("here is a message");
}
myfunction();

//PASSING INFORMATION TO FUNCTIONS

function message(msg,name){
    console.log(msg+  " "+ name)
}
message("hello","ramya");


let gn=function(age,valid){
    console.log(age+"years is " +valid);
}
gn(22,"valid");

//FUNCTION SCOPE

function scopee(num){
    let code=12* num;
    //console.log(code);
    return code                     //return value from function msg to calling fun
}
console.log(scopee(3))
//console.log(code)            get an error ,cant access code variable its scope is withon scopee fun



//using functions modify web pages

/*
function showMessage(message){
    document.getElementById('message').textContent=message;
}
in html file we have to include js file by using script tag and then
by using id ="message" in some tage like h1 or p tags  it will replace tht particular msg with text 
we passed to the showMessage(...)
*/

