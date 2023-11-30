//ARRAYS
//CREATING AND INITIALIGING ATRAY
let values=[1,2,3];
let values1=Array.of(1,2,3,4);
console.log(values);
console.log(typeof values);
console.log(Array.isArray());

//accessing array items
console.log(values[0]) ;             //we get o th tem in the array i.e.,1
console.log(values[3]);   //undefined  array index is out of range
values[2]=5;
console.log(values[2]);     //the element in 2 nd index is replaced by 5

//manipulating arrays

//PUSH

values.push('d','e');
console.log(values);

//pop()

const last=values.pop()
console.log(last);

//shift


const first=values.shift();
console.log(first,values)

//unshift

//const values4=['a','b','c']
values.unshift('aaa','bbb','ccc')
console.log(values)



//slice and splice
//1.slice
const arr=['a','b','c','d'];
const newarr=arr.slice(1,3)
console.log(newarr)             //here the copy of the values is stored in newarray
console.log(arr);               //the original array still exists slice cannot modify our origial array

//2.splice
//const arr=['a','b','c','d'];
arr.splice(2,1)                     //fron 2nd index delete one element so c will get deleted
console.log(arr);

//we can delete elements and same way we can add elements by splice

arr.splice(2,0,'r','a','m');
console.log(arr);
arr.splice(1,1,'siva')
console.log(arr)


//ARRAY SEARCHING AND LOOPING
//1.INDEXOF
const arr1=['a','b','c']
console.log(arr1.indexOf('b'))
console.log(arr1.indexOf('d'))

//2.FILTER()
const set=arr1.filter(function(item){
    return item>'a'
});
console.log(set)

//3.FIND()
arr3=['aaa','bbb','c']
const found=arr3.find(function(item){
    return item.length>1;
});
console.log(found)

//forEach()
const arr2=['d','e','f'];
arr2.forEach(function(item){
    console.log(item)
});


//ARRAYS IN THE DOM
/*
const container=document.getElementByClassname("continer");
console;log(containers)
containers[3].classList.add('d-none');
  //element.classList.add('d-none');
  







