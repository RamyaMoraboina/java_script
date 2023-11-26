
// const grandparent=document.querySelector(".grandparent")
// const parent=document.querySelector(".parent")
// const child=document.querySelector(".child")
// grandparent.addEventListener("click", e =>{
//     console.log(e)
// });
// grandparent.addEventListener("click", e =>{
//     console.log(e.target)
// });
// grandparent.addEventListener("click", e =>{
//     console.log("grandparent1")
// });
// grandparent.addEventListener("click", e =>{
//     console.log("grandparent2")
// });

// EVENT BUBBLING AND CAPTURING

// the process of going from the closest element 
// to the furthest away element is known as BUBBLING
// bubbling starts from inside and moves UPWARD

// the process of going from furthest element to closest element 
// is called CAPTURING
// capturing starts from outsideand moves IN


// const grandparent=document.querySelector(".grandparent")
// const parent=document.querySelector(".parent")
// const child=document.querySelector(".child")

// grandparent.addEventListener("click",e=>{
//     console.log("grandparent1")
// },{capture:true})
// parent.addEventListener("click",e=>{
//     console.log("parent1")
// })
// child.addEventListener("click",e=>{
//     console.log("child1")
// })
// document.addEventListener("click",e=>{
//     console.log("document1")
// })

const grandparent=document.querySelector(".grandparent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")

grandparent.addEventListener("click",e=>{
    console.log("grandparent capture")
},{capture:true})
grandparent.addEventListener("click",e=>{
    console.log("grandparent bubble")
})
parent.addEventListener("click",e=>{
    console.log("parent capture")
    
},{capture:true} )

// run event only once 
// here parent bubble will run for only  one time and again if we click 
// it does not diplayed
parent.addEventListener("click",e=>{
    console.log("parent bubble")
},{once:true})
child.addEventListener("click",e=>{
    console.log("child capture")
},{capture:true})
child.addEventListener("click",e=>{
    console.log("child1  bubble")
})
document.addEventListener("click",e=>{
    console.log("document capture")
},{capture:true})
document.addEventListener("click",e=>{
    console.log("document bubble")
})
