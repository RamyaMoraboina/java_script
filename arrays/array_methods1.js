//Array.prototype[@@iterator]()

// syntax : array[symbol.iterator]()
// it returns the array iterator object that yields the values of each index in the array

const array1=[1,2,3]
const iterator=array1[Symbol.iterator]()
for(const value of iterator){
    console.log(value)
}
//  expected output     1
   //                     2
    //                    3

// Array.prototype.at()

// syntax: at(index)
// it takes an integer and returns the element present at that index
/* allows positive and non negative integers ,,negative indexing starts from last item inthe array
    arr.at(1)  => arr[1]
    arr.at(-1)  => arr[arr.length-1]  =>arr[4-1]= arr[3] returns last element
    arr[-1]  not possible bcoz js treat it as arr['-1'] cant possible */
const array2=[5,4,6,7];
let index=2;
console.log(`an index of ${index} return ${array2.at(index)}`)

// return undefined when
// 1.index < -array.length  -------  -5 < -4  true  -5+4=-1 undefined
//                                   -3 < -4  false  -3+4 =1 returns element at index 1  (4)
// 2.index>=array.length              5 >= 4  true   undefined
//                                    3 >= 4  false    returns element at index 3 (7)


// ARRAY.PROTOTYPE.CONCAT()
 /* used to merge two or more arrays

 The concat() method is a copying method. It does not alter this or any of the arrays provided as arguments
  but instead returns a shallow copy that contains the same elements as the ones from the original arrays.
 Syntax: concat()
        concat(value1)
        concat(value1,value2,....,value N)*/

const array_=[1,2,3]
const array__=[4,5,6]
const array3=array_.concat(array__)
console.log(array3)

const a=[[1]]
const b=[[1,2],3]
const c=a.concat(b)
console.log(c)

//ARRAY.PROTOTYPE.COPYWITHIN()
/*used to shift the data of the array
this method copies some sequence and pasted in the same array.the pasted region will have copied values
even when the paste and copied region overlap
=> copywithin() method is a mutating method ,it does not alter the length of array.

Syntax : copywithin(target,start)
         copywithin(target,start,end)
*/
console.log([1,2,3,4,5].copyWithin(0,3,4))
console.log([1,2,3,4].copyWithin(2,0,4)) //here elements at 0 and 1 will be copied2 and 3 elements not copied here length will exceeded
console.log([3,4,5,6].copyWithin(-2,-4,-2))   //[3,4,3,4]
console.log([1,,3].copyWithin(2,1,2))


//ARRAY.PROTOTYPE.ENTRIES()
/* RETURNS a new array iterator object that contains the key/valuepairsfor each index in the array
*/

// Syntax : array1.entries()
const array4=['a','b','c']
const iterator1=array4.entries()
console.log(iterator1.next().value)  //'a'
console.log(iterator1.next().value)  //'b'
console.log(iterator1.next().value)

// using a for of loop
for(const [index,element] of ['a','b','c'].entries()){
    console.log(index,element)
}
//iterating sparse arrays
for(const element of ['a',,'c',,'d'].entries()){
    console.log(element)
}

// ARRAY.PROTOTYPE.EVERY()
//=>tests whether all elements in the array pass the test implemented by the provided function.it returns a boolean value
 /* Syntax : every(callbackFn)
            every(callbackFn,thisArg)*/

    function isBigEnough(element,index,array){
        return element >= 10;
    }
   console.log( [12,3,4,56,76,5].every(isBigEnough))
//we can write like this also

    const isBelowThreshold=(current) => current>40;

    const array5=[45,65,43,56,77];
    console.log(array5.every(isBelowThreshold))

    //using every() on sparse arrays
    //every will not run its predicate on empty slots
    console.log([1,,3].every((x) => x!==undefined));
    console.log([2,,2].every( (x)=> x===2))


//ARRAY.PROTOTYPE.FILL()
/* the fill() method of array instances changes all elements within a range of indices in an array to a static
value . it returns the modified array
=>it is a mutating method .it does not alter the length of this but change the content of array


syntax : fill(value)
        fill(value,start)
        fill(value,start,end)
*/
console.log( [1,2,3,6].fill(4))          //=>[4,4,4,4]
console.log([0,0,0,0,0].fill(4,2))      //=>[0,0,4,4,4]
console.log([1,2,3,4,5,6].fill(4,2,5))  //=>[1,2,4,4,4,6]
console.log([1,2,3,4,5,6].fill(4,NaN,NaN)) //=> [1,2,3,4,5,6]
console.log([1,2,3].fill(4,-3,-1))          //=>[4,4,3]
console.log(Array(3).fill({}))

//using fill() to create a matrix of l

const arr = new Array(3)    //creating an array of size 4
console.log(arr)
for (let i=0; i < arr.length ;i++){
    arr[i]=new Array(4).fill(1) //creaating an array of size 4 filled with 1 
}

arr[0][0] =10
console.log(arr[0][0])
console.log(arr[1][0])
console.log(arr[2][0])

const tempGirls=Array(5).fill("girl",2,4)
console.log(tempGirls)


// Array.prototype.filter()
/* creates a shallow copy of portion of given array filterd the elements which pass specific condition implemented by provided  function

Syntax : filter(callbackFn)
        filter(callbckFn,thisArg)
*/

// A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned

function isBigEnough(value){
    return value>=10;
}

const filtered=[20,10,30,40,5,7,-1].filter(isBigEnough)
console.log(filtered)

//find all prime numbers using filter
const original_array=[-3,-2,-1,0,1,2,3,4,5,6,7,8,9]

function isPrime(num){
    for(let i=2;i<num;i++){
        if (num % i === 0){
            return false
        }
    }
    return num>1;
}

console.log(original_array.filter(isPrime))

//ARRAY.PROTOTYPE.FIND()
/* returns the first element that satisfies the provided  testing function if no value satisfies the testing function
undefined is returned
Syntax : find(callbackFn)
        find(callbackFn,thisArg)

*/
//find an object in an array by of its properties
const inventory=[
    {name : "apple",qty : 5},
    {name : "banana",qty :3},
    {name : "cherries",qty : 6},
];

function isCherries(fruit){
    return fruit.name==="cherries";
}

console.log(inventory.find(isCherries))

//using find() on sparse arrays

const arr1=[0,1,,,,5]
arr1.find((value,index) =>{
    if(index==0){
        console.log("deleting array[5] with value",arr1[5])
        delete arr1[5]
    }
    console.log("visited index",index ,"with value",value) //we get array[5] as undefined although it get deleted
} );
        //element 5 is still visited eventhogh it is deleted
        
//ARRAY.PROTOTYPE.FINDINDEX()
/* returns the index of the first element in an array that satisfies the provided testing function
    otherwise -1.
 Syntax : findIndex(callbackFn)
            findIndex(callbackFn,thisArg)
*/
const arr2=[43,32,-4,0,51,12]
 const isLargeNumber=(element) => element>50;

 console.log(arr2.findIndex(isLargeNumber))

//findIndex() on parse arrays

console.log([1,,3].findIndex((x) => x===undefined))   //1

//ARRAY.PROTOTYPE.findLast()
/* iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function
if no element satisfy the testing function , undefined is returned
*/

const arr3=[5,12,50,130,44]
const found=arr3.findLast((element) => element > 45)

console.log(found)  //130

//ARRAY.PROTOTYPE.FINDLASTINDEX()
/* returns the index of last element in the array that passes the test.otherwise -1 if no matching element found*/
const arr4=[5,12,50,130,44]
const isLargeNumberr= (element) => element > 45;
console.log(arr4.findLastIndex(isLargeNumber))  //3

//ARRAY.PROTOTYPE.FLAT() -- copying method
/* creates new array with all sub array elements concetenated into it recursively upto the specified depth
it does not alter the original array creates a shallow copy of it.
 Syntax : flat()  
            flat(depth)   by default depth is 1
*/
const flatArr=[1,2,[3,4]]
console.log(flatArr.flat())

const flatArr2=[1,2,3,[4,[5,6,[7,8]]]]
console.log(flatArr2.flat(2))           //[1,2,3,4,5,6,[7,8]] add two sub arrays

//ARRAY.PROTOTYPE.FLATMAP--------iterative method
/* the flatMap() is identical to map(callbackFn,thisArg) followed by flat(1) .for each element it produces of new elements
and concenates the resultinG arrays together to form a new array.
syntax : flatMap(callbackFn)
        flatMap(callbackFn,thisArg)
    => the value returned from callbackFn must be an array
*/

const flat_map_arr=[1,2,3,4]
console.log(flat_map_arr.flatMap((x=>[x,x*2])))
//or
const Square=(x) => [x,x*2]
console.log(flat_map_arr.flatMap(Square))

//only one level is flattened
console.log(flat_map_arr.flatMap((x) => [[x*2]]))


//output of map function on same callbackFn
console.log(flat_map_arr.map(Square))

//ARRAY.PROTOTYPE.FOREACH()
/* executes a given callbackFn once for each element of the array
syntax : forEach(callbackFn)
            forEach(callbackFn,thisArg)
        => the callbackFn is not invoked for empty slots
        =>forEach expects a synchronous function */
    
 const array6=['a','b',,'c']
 array6.forEach((element) => console.log(element))