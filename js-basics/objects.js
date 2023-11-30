// OBJECTS AND THE DOM

//creating the object and accessing elements
let person={
    name:"ramya",
    age:21,
    fullTime:true

};
person.age=24     //changing age value which is the property of object person

person['age']=56   //which is identical to person.age

console.log(person.age);


//creating symbol

//let mySymbol=symbol()

let person1={
    name:"ramyasri",
    age:22,
    fullTime:true
    [mySymbol]="secretInformation"              //

};

//object methods

let person2={
    name:"ramyasri",
    age:22,
    fullTime:true,
    showInfo: function(realage){
        console.log("in showInfo:"  +this.name+" is "+realage+" years old");
    }
};
person2.showInfo(18); 

//passing  objects to functions

let person3={
    name:"anu",
    age:15,
};
function increment(p){                 /*when we pass objects to functions,then that function will able
                                        to modify the object properties and methods*/
    p.age=21;
}
increment(person3);
console.log(person3.age);           //21

//document object model

function showMessge(message){
    document.getElementById("message").textContent=message

}

//we can include this file in html page by (id =message)  script tag
//document is the built in object
//getElemntById is the method which returns the object
//that returned object has the property textcontent









