//Array.from()  : 
/* static method ,creates new ,shallow copied array from iterable or array-like object
syntax : Array.from(obj,mapFn.thisArg)
            ===Array.from(obj).map(mapFn,thisArg)*/


console.log(Array.from("foo"))
console.log(Array.from([1,2,3],(x) => x+x))

//array from a set
const set=new Set(["foo","bar","baz","foo"])  //creating a set object
console.log(set)                        //{"foo","bar","baz"}
console.log(Array.from(set))

//Array from a map
const mapper=new Map([
    [1,'a'],
    [3,'b'],
    [5,'c'],
])
console.log(Array.from(mapper))
console.log(Array.from(mapper.values()))

//Array.fromAsync()   : static method ,creates a new, shallow copied array instance from an async iterable,iterable,or array-like object 
/* syntax : Array.fromAsync(arrayLike)
             Array.fromAsync(arrayLike,mapFn)
             Array.fromAsync(arrayLike,mapFn,thisArg)*/



//Array.prototype.includes()        : determines whether an array includes a certain value among its entries ,returns true or false as appropriate
/*syntax : includes(searchElement) 
            includes(searchElement,fromIndex)*/
const Arr=[1,2,3]
console.log(Arr.includes(2))            //true

const Arr1=["cat","dog","cow"]
console.log(Arr1.includes("at"))           //false

console.log([1,2,3].includes(3,3)) //fasle
console.log([1,2,3].includes(3,-1))  //true
console.log([1,2,NaN].includes(NaN))
console.log(['1','2','3'].includes(3))  //false

/*if index is less than 0 then 
fromIndex=-4
arr.length=6
computed index= -4+6 = 2 will search for index 2
if fromIndex =-100
arr.length=10
computed index=-90 < arr.length
=> the entire array will be searched*/

const Arr3=['a','b','c']
console.log(Arr3.includes('a',-100))        //-100+3=-97 <arr.length so, entire arr searched results true
console.log(Arr3.includes('b',-40))         //true
console.log(Arr3.includes('c',-100))   //true
console.log(Arr3.includes('a',-2))  //false

//Array.prototype.indexOf()
const beats=['ant','bison','camel','ant','duck','ant','dog','ant','fox','ant']
console.log(beats.indexOf('ant',1))
console.log(beats.indexOf('ant',3))     //search start from specified index ,here ant preent at 3 itself
console.log(beats.indexOf('ant',2)) 
console.log(beats.indexOf('ant',4))        //search starts from 4 and ant present at 5 index
console.log(beats.indexOf('ant',5))

//Array.isArray()      : istatic method, checks given value is array or not
//syntax : array.isArray(value)
console.log(Array.isArray([1,2,3])) //true
console.log(Array.isArray(new Array(5))) //true
console.log(Array.isArray('[]'))   //false
console.log(Array.isArray(Array.prototype))  //Array.prototype itself is an array

//Array.prototype.join()
/*syntax : join()
         join(seperator)
seperator   : A string to separate each pair of adjacent elements of the array. If omitted, the array elements are separated with a comma (",").
=> creates and returns a new string by cincenating all of the elements in this array seperated by commas or specified seperator string
if array has only one item ,then that item will be returned using seperator
*/
const elements=["fish","prawn","pethalu"]
console.log(elements.join())        //fish,prawn,pethalu
console.log(elements.join(""))      //fishprawnpethalu
console.log(elements.join('-'))     //fist-prawn-peethalu

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(matrix.join())  //1,2,3,4,5,6,7,8,9
console.log(matrix.join(';'))   //1,2,3;4,5,6;7,8,9

//Array.prototype.keys() : returns the new iterator object that contains keys for each index in the array
//syntax : keys()
// const Arr4 = [{'a':1},{'b':2},{'c':3}]  
const Arr4 = ['a','b','c']
const iterator3=Arr4.keys()
 for(const key of iterator3){
    console.log(key)
 } 

//using keys() on parse arrays
const arr=['a',,'c']
const sparseKeys = Object.keys(arr)
const denseKeys = [...arr.keys()];
console.log(sparseKeys)
console.log(denseKeys)

//Array.prototype.lastIndex() : returns the last index at which a given element can be found in the array or -1 if it is not present
//                              the array is searched backwards starting at from index

const animals=['Dodo', 'Tiger', 'Penguin','Dodo','Tiger'];
console.log(animals.lastIndexOf('Tiger'))  //5
console.log(animals.lastIndexOf('Tiger',3)) //1  searches back in the array from specified index

//Array.prototype.map() : creates the new array populated with the results of calling a provided function on every element in the array.
/* syntax : map(callbackFn)
            map(callbackFn,thisArg)*/
const array1=[1,2,3,4]
//pass a function to map
const transformed_arr=array1.map((x) => x*x)
console.log(transformed_arr)

/* map() is an iterative method. it calls a provided callbackFn once  on every element in the array and constructs new array from the results
the callbackFn is not invoked for empty slots in sparse arrays*/

//using map to reformat objects in the array

const kvArray = [
    { key: 1, value : 10},
    {key:2 , value: 20},
    {key:3 ,value :30},
];
const reformed_arr = kvArray.map(({key,value}) =>( {[key]:value}))
console.log(reformed_arr)

//using parseInt() with map()
console.log(['1','2','3'].map(parseInt))   //[1,NaN,NaN]
//to solve this

console.log(['1','2','3'].map((str) => parseInt(str,0) )) //[1,2,3]

console.log(['1','2.2e2','3e300'].map( (str) => parseInt(str,10)))   //[1,2,3]
//unlike parseInt number() will also return float and exponential notation
console.log(['1','2.2e2','3e300'].map(Number))   // [1,220,3e+300]


//map function on sparse arrays
console.log(
    [1, , 3].map((x, index) => {
      console.log(`Visit ${index}`);
      return x * 2;
    }),
  );

  //Array.of : it is a static method,creates a new array instance from a variable no. ofarguments regardless of number or type of arguments
  /* syntax : Array.of()
              Array.of(element1)
              Array.of(element1,element2)
              Array.of(element1,.......,elementN)*/

    /* the diffrence between Array.of() and Array() constructor is is handling the single arguments
    Array.of(7)  => creates array with single element 7 where as Array(7) creates an empty array with 
    length property 7. */

    console.log(Array.of(7))    //[7]
    console.log(Array(7))       //[ <7 empty items> ]

  console.log(Array.of("foo",3,4.5,true))      // ['foo',3,4.5,true]
  console.log(Array.of())   //[]

  //Array.prototype.pop() : removes last element from an array and returns that element. this method changes the length of the array.
  //syntax  : pop()
  //returns removed element from the array ,undefined when array is empty

  const vegetables= ["cabage", "carror","ladysfinger","potato",'tomato',"brinjal"]
  const pop_element =vegetables.pop()
  console.log(pop_element)
  console.log(vegetables.pop())
 console.log([].pop())  // undefined ,it is empty array

//Array.prototype.push() : adds specified elements to the end of the array and returns new length of it
/*syntax : push()
            push(element1)
            push(element1,element2)
            push(element1, element2,.....,elementN) */
const animalss= ["cat","dog","lion","tiger"]
  const count = animalss.push("elephant")   //returns the new legth of array
  console.log(count)
  console.log(animalss)

  const sports = ["soccer","baseball"]
  const total = sports.push("cricket", "football")
  console.log(total)
console.log(sports)

//merge two arrays using spread syntax
// const vegetables= ["cabage", "carror","ladysfinger","potato",'tomato',"brinjal"]
const moreVegs = ["beetroot","bitterguard"]
vegetables.push(...moreVegs)
console.log(vegetables)

/*
Array.prototype.reduce()  : executes a user supplied "reduce" callback function on each element ,in order, passing in the return value from the calculation on the preceeding element
                            the final result of running the reducer across all elements of the array is a single value

syntax : reduce (callbackFn)
        reduce(callbackFn,initial value)


  ====>    It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into
 a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator.
 The final value of accumulator (which is the value returned from callbackFn on the final iteration of the array) becomes the 
return value of reduce()*/

//sum of elements
const exArray=[1,2,3,4]

const initialValue=0
const total_sum=exArray.reduce((acc,curr) => acc + curr, initialValue,)
console.log(`total sum= ${total_sum}`)

/*Edge cases
 = > if the array has only one element and no initial value provided 
 = >or if intial value provided but the array is empty 
 in both cases the solo value returned without calling callbackFn

=>if initital value provided and array is not empty then reduce method will always invoke callbackFn starting at index 0

 => If initialValue is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, 
*/

const getMax = (a,b) => Math.max(a,b);

//callback is invoked for each element starting at index 0
console.log([1,100].reduce(getMax,50))
console.log([50].reduce(getMax,10))

//callback isinvoked for element at index 1

console.log([200,100].reduce(getMax))  //here initialValue not provided so, elment at index 0 is taken as initial value

//callback is not invoked

console.log([50].reduce(getMax))
console.log([].reduce(getMax,1))

// console.log([].reduce(getMax))   type error

//Array.prototype.reduceRight : applies function againist accumulator and each value of the array (from right - left) to reduce it to single value
 //syntax : reduceRight(callbackFn)
 //          reduceRight(callbackFn,thisArg)

const array5=[
    [0,1],
    [2,3],
    [4,5],
];
const result = array5.reduceRight((acc,curr) =>    //here acc assigned an array [12,78] then reduce function invoke the callbackFn on every element of array from right to left
                    acc.concat(curr),[12,78])
console.log(result)             // [12,78,4,5,2,3,0,1]

//ARRAY.PROTOTYPE.REVERSE():  reverses an array in place and returns the reference to the same array   //no copy is made
//syntax : reverse()

const numbers=['one','two','three']
console.log("reversed array:",numbers.reverse())
//reverse is destructive it changes the original array
console.log(numbers)            //['three,'two','one']

//reverse of method returns reference to the original array, so mutating the reversed  array will mutate the original array as well
 const number=[1,2,3,4,5]
 const reverse=number.reverse()
 
//after this ,number array and reverse array contains same elements in reverse order
  //[5,4,3,2,1]
 reverse[4] = 5;
 console.log(number)                // [5,4,3,2,5]

//using spread syntax   : if we dont want to change the original array
const new_numbers=[4,5,3,7,2]
const newReversed= [...new_numbers].reverse()   //it does not change the original array

   
newReversed[0]=78
console.log(newReversed)            //[78,7,3,5,4]
console.log(new_numbers)            //[4,5,3,7,2]

//ARRAY.PROTOTYPE.SHIFT() : removes the first element and returns that element and returns undefined if array is empty ,changes the length of the array 
//syntax : shift()

const array6=[1,2,3]
const firstElement = array6.shift()
console.log(array6)             //[2,3]
console.log(firstElement)       //1

//shift of using while  loop
 const names=["anu","maha","ramya","rani"]
  while(typeof(i = names.shift()) !== "undefined"){
    console.log(i)
  }
  console.log(typeof(undefined))