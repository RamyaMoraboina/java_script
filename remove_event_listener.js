const grandparent=document.querySelector(".grandparent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")


grandparent.addEventListener("click",e=>{
    console.log("grandparent bubble")
})

// grandparent.addEventListener("click",printHi,{capture:true})

parent.addEventListener("click",printHi)
    setTimeout(()=>{
        parent.removeEventListener("click",printHi)
    },10000)
    

child.addEventListener("click",e=>{
    console.log("child1  bubble")
})
function printHi(){
    console.log("hi")
}


