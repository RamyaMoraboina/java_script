//Array .prototype.slice()  : it does not alter the array  but returns a shallow copy of elements within specified range
const animals=["cat","camel","ant","duck","deer"]
console.log(animals.slice(2))     //['ant','duck','deer']   //it slice elements srom 2nd index upto last here end index not specified

console.log(animals.slice(-4,-1))  //['camel','ant','duck']

console.log(animals.slice())   //total array will get printed

const myHonda = {
    color : "red",
    wheels : 4,
    engine : { cylinders : 4 ,size :2.2},
};
console.log(myHonda)   //myHonda is an object it holds a single index in array

const myCar = [myHonda,2,"cherry condition","purchased 1997"]   //myHonda present at index 0
const newCar = myCar.slice(0,2)  //[myHonda ,2]
console.log(myCar)
console.log(newCar)

console.log(myCar[0].color)   //red
console.log(myCar[0].engine)  //{ cylinders : 4 , size : 2.2 }
console.log(newCar[0].engine)  //{ cylinders : 4 , size : 2.2 }

//Array.prototype.some() : it calls callbackFn for every element in the array ,until callbackFn returns a
/*returns a truthy value,if that element found some() immediately returns true and stops the terating through the  array*/

//syntax : some(callbackFn,thisArg)

const array=[1,2,3,4,5,6]
 const isEven = (x) => x % 2 ===0;

 console.log(array.some(isEven))    //true

 //Array.prototype.sort() : sorts the given array inplace and return the reference to the same array , now started
 /* the default sort order is assending*/
 //syntax : sort()    
 //         sort(compareFn)
  const months = ["jan","feb","march","april"]
  console.log(months.sort())
  console.log(months)   // the original array will changed to a sorting order

const a= [1,300,210,32,56]
console.log(a.sort())           //[1,210,300,32,56]

//use compare function 

const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']
/*
Array.prototype.splice()  : changes the contents of array by removing or replacing the existing elements and/or adding new elements in place
  =>  Returns an array containing deleted elements ,if no element deleted empty array returned
syntax: splice(start)
        splice(start,deleteCount)
        splice(start,deletrCount,item1)
        splice(start,deleteCount,item1,item2)
        splice(start,delteCount,item1,item2,......,itemN)
*/

const Months = ["jan","march","april","june"]
const removed = Months.splice(1,0,"feb")     //no item deleted but inserts feb at index 1
console.log(Months)      // ["jan","feb",march","april","june"]

console.log(removed)    //[]   no element is deleted
const deleted_items=Months.splice(4,1,"may")
console.log(Months)    //["jan","feb","march","aapril","may"]
console.log( deleted_items)   //["june"]

Months.splice(3,0,"1","2","3")        //no element deleted instead inserts 3 eleements at index 3
console.log(Months)         //["jan","feb","march","1","2","3","april","may"]

const removed_elements=Months.splice(2)     //deletes all elements from index 2
console.log(Months)
console.log(removed_elements)

/*
Array.prototype.Reversed() : transposes the elements of the calling array object in reverse order and returns the new array
                            it does not changes the original array
syntax : toReversed() */

const items = [1,2,3]
const rev_array=items.toReversed()
console.log(rev_array)  //[3,2,1]
console.log(items)   //[1,2,3]

/*
Array.prototype.toSorted() : copying version of sort method it does not change the original array, returns new array sorted in ascending order
syntax : toSorted()
        toSorted(compareFn)
     => compareFn  =>  Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value
     */

     const m= ["jan","feb","march"]
     const s=m.toSorted()
     console.log(s)    //["jan","feb","march"]
     console.log(m)     //["feb","jan","march"]

     const values = [1,10,4,3,6]
     const sortedValues=values.toSorted((a,b) => a-b )
     console.log(sortedValues)    //[1,3,4,6,10]
     console.log(values)          //[1,10,4,3,6]

     //using sparse arrays
     console.log(["a",,"f","d","c"].toSorted())   //["a","c","d","f",undefined]
     console.log([, undefined, "a", "b"].toSorted()); // ["a", "b", undefined, undefined]
    /*
    Array.prototype.toSpliced() : is the copying version  of the splice() method.it returns new array instead of modifying original array.but it does the same function as slice() 
                                  removes and replaces the elements at given  index.
    syntax : toSpliced(start)
            toSpliced(start,deleteCount)
            toSpliced(start,deleteCount,item1)
            toSpliced(start,deleteCoont,item1,......itemN)
  */
  const numbers=[1,2,3,6,7]
   const newNumbers = numbers.toSpliced(3,0,4)
   console.log(newNumbers)      //[1,2,3,4,6,7]
   console.log(numbers)         //[1,2,3,6,7]  original array will be same

   const newNumbers2 = newNumbers.toSpliced(2,2,7)
  console.log(newNumbers2)        //[1,2,7,6,7]

/*
Array.prototype.toString() : returns a string representing the specified array and its elements

syntax : toString()
*/
//when an array is cyclic [it contains an element that is itself] browsers avoid infinite recursion by ignoring the cyclic reference

const arr=[]
arr.push(1,[3,arr,4],2)
console.log(arr)          //<ref *1> [1,[3,[circular *1],4],2]
console.log(arr.toString())     //[1,3,,4,2]

//using toStrng()
const arr1=[1,2,"a","1a"]
console.log(arr1.toString())   //"1,2,a,1a"

//on sparse arrays
console.log([1,,3].toString())    //"1,,3"

/*
  Array.prototype.unshift() : adds the specified elements at the beginning of the array and returns the new length of array
  syntax : unshift()
          unshift(element1)
          unshift(element1,element2)
          unshift(element1,element2,.....,elementN)

  = >if multiple elements are passed as parameters, they're inserted in chunk at the beginning of the object, in the exact same order they were
   passed as parameters. Hence, calling unshift() with n arguments once, or calling it n times with 1 argument (with a loop, for example), don't yield the same results.
   */

   let arr2 = [4,5,6]
   arr2.unshift(1,2,3)
   console.log(arr2)        //[1,2,3,4,5,6]

   let arr3 = [4,5,6]
   arr3.unshift(1)
   arr3.unshift(2)
   arr3.unshift(3)
   console.log(arr3)      //[3,2,1,4,5,6]

   //adding arr as single unit 

   arr2.unshift([22,33])
   console.log(arr2)   //[[22,33],1,2,3,4,5,6]  new array length is 7

   /*
   Array.prototype.values() : returns new array iterator object that ierates the values of each item in the array
   syntax :  values()
   */
  const array2=["a","b","c"]
  const iterator = array2.values()
   for( const value of iterator){
    console.log(value)
   }
   //Array.prototype.values() is the default implementation of Array.prototype[@@iterator]()
   //the array iterator object should be a one time use object should not reuse it
    
   const arr4= ["a","b","c","d","e"]
    const iterator2 = arr4.values()

    console.log(iterator2.next())  //{value : 'a' , done : false }
    console.log(iterator2.next())   //{value : 'b' , done : false }
    console.log(iterator2.next())   //{value : 'c' , done : false }
    console.log(iterator2.next())   //{value : 'd' , done : false }
    console.log(iterator2.next())   //{value : 'e' , done : false }
    console.log(iterator2.next())   //{value : undefined , done : true}
    console.log(iterator2.next())    //{value : undefined , done : true }
    
  //  If you use a break statement to end the iteration early, the iterator can resume from the 
  //current position when continuing to iterate it.

  const arr5 = ["a","b","c","d"]
  const iterator3 = arr5.values()
  for( const letter of iterator3){
    console.log(letter)         //"a" "b"
    if(letter === 'b'){
      break
    }
  }

  for( const letter of iterator3){
    console.log(letter)  //"c" "d" "e"
  }

  //mutations during iterator : iterator stores the address of the array so when we change the array values,then array  iterator values change too 
   const array3= ["a","b","c","d","e"]
   const iterator4 = array3.values()

   console.log(iterator4)               // Array Iterator {}
   console.log(iterator4.next().value)  //"a"

   array3[1] = "n"
   console.log(iterator4.next().value)  //"n"

  /*
  Array.prototype.with() : changes the value at given index in the array,returning the new array with element at the given index is replaced with the given value
  = > the original array is not modified
  syntax : arrayInstance.with(index,value)
*/

const array6 = [1,2,3,4,5]
 console.log(array6.with(2,6))    //[1,2,6,4,5]
 console.log(array6)              //[1,2,3,4,5]

 //chaining array methods
 const array1 = [1,2,3,4,5]
 console.log(array1.with(2,6).map((x) => x**2))  //[1,4,36,16,25]

//using with() on sparse arrays
const sparseArray = [1,,3,4,,6]
 console.log(sparseArray.with(1,5)) [1,5,3,4,undefined,6]






