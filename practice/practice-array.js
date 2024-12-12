console.log("good morning");

//push(): add elements to the end of the arr and it modifies the original array and returns  the new length of the array
const arr1 = [1,2,3,4]
var length = arr1.push([1,2])
console.log(arr1);
console.log("length=",length)




// pop() : it removes the element at the end of the array and return deleted element

const arr2 = ['h','e','l','l','o'];
 var deleted_element = arr2.pop()
 console.log(deleted_element);
 console.log(arr2);    //['h','e','l','l']
 
//  shift() : it removes the element at the beginning of the array and returns that element

var deleted_element2 = arr2.shift()
console.log("deleted_element",deleted_element2);
console.log("after shift() =",arr2);

//unshift() : it adds the element at the beginning of the array and returns the new length of array
// const arr1 = [1,2,3,4,[1,2]]
var length2 =arr1.push('apple')
console.log("after unshift() = ",arr1)
console.log("length 2 = ",length2)

//MAP,FILTER,REDUCE,FIND,FOREACH,

// map() : it creates  the new array  populated with the results of calling the provided function on every element in the array
const arr4 = [1,2,3,4,5,6,7,8,9,10]
 
var  mapArray = arr4.map((item) => item+2)  // adds 2 to every element in the array
  
console.log(mapArray)           //[3,4,5,6,7,8,9,10,11,12]

var mapArray = arr4.map((item)=>{
    if(item % 2 == 0){
        return item;       // it will return the element which satisfies the condition and undefined for the elements doesnt satisfy the condtion
    }
})

// filter() : it creates the new array from the existing array ,with elements which pass the given condition defined in  the provided function

const arr5 = [3,55,6,8,19,35,60,70,98];

const filterdArray = arr5.filter((item) => item % 5 ==0);
console.log(filterdArray)              //[55,35,60,70] it takes the elements which satisfies the condition

const mappedArray = arr5.map(item => item % 5 ==0)
console.log(mappedArray);               //   [false,true,false,false,.....]it will run given fun on every element and takes the results not the elements



// reduce() : 




//find() : returns the first element that satisfies  the provided  testing function if no value satisfies undefined is returned

const  inventory=[
    {name : "apple",qty : 5},
    {name : "banana",qty :3},
    {name : "cherries",qty : 6},
];
//using arrow function
const cherries = inventory.find((fruit) => fruit.name === "cherries")
console.log( "find method = " ,cherries)   //{name : "cherries" ,qty : 6}

//we can write above code like this also for better understanding 
//using normal function
function isCherries(fruit){
    return fruit.name === "cherries"
}
const cherries2 = inventory.find(isCherries);
console.log( "find method = " ,cherries2)   //{name : "cherries" ,qty : 6}

const sparseArray=[0,1,,,,5]
sparseArray.find((value,index) =>{
    if(index==0){
        console.log("deleting array[5] with value",sparseArray[5])
        delete sparseArray[5]
    }
    console.log("visited index",index ,"with value",value) //we get array[5] as undefined although it get deleted
} );

const sentence = "freecodecamp";
if(true){
    const sentence = "coding";    
    console.log(sentence )    

}
console.log(sentence);



// // mcqs - sanfoundary
// // const a1 = [1,,3]; the empty slot is not same as containing undefined explicitly
//  var a1 = [,,,]     //<empty items >
//  a1.forEach((value)=> {
//     console.log(`in mcq section ${value}`)   //no outout
//  });

// var a2 = [undefined,undefined,undefined]
// a2.forEach((value) =>{
//     console.log(value)   //undefined  undefined  undefined
// })

// var a3 = new Array(3);
// console.log("a3 array=",a3)  //  <empty items >

// a3.fill('ramya')
// console.log(a3)
// a3.fill("siva",1)  //from index 1 it will fill siva
// console.log(a3)

// if(!undefined){
//     console.log(1);
// }
// const rev = [1,2,3,4]
// console.log(rev.join())
// console.log(rev.reverse())    //it reverse the array and store it in original array which means it  modifies the original array
// console.log(rev.join())
// console.log(rev.reverse())
// console.log(rev.join())




  

