// adding elements to page : append and appendChild
const body=document.body
body.append("hello world")
//body.appendChild("hello world")  uncaught type error: failed to execute appendChild
body.append("hello world","bye")

// creating elements ex:div

const div1=document.createElement("div")
div1.innerText="hello world"
// div.textContent="hello world2"
body.append(div1)

// difference between textcontent and innertext
const div=document.querySelector("div")
console.log(div.innerText)
console.log(div.textContent)
// innerText is accurate then textContent 

// differences between innerHTML and innerText
const div2=document.createElement("div")
div2.innerHTML="<strong>hello world</strong>"     
// div2.innerText="<strong>hello world</strong>"

const strong=document.createElement("strong")
strong.innerText="strong element"
const p=document.createElement("p")
p.innerText="this is paragraph"
div2.append(p)
div2.append(strong)
body.append(div2)

// removing elements
// const body=document.body
// const div=document.querySelector("div")
const spanhi=document.querySelector("#hi")
const spanbye=document.querySelector("#bye")
spanbye.remove()
// div.remove(spanbye)
 div.append(spanbye)
 
//  modifying element attributes
console.log(spanhi.getAttribute('id'))
console.log(spanhi.getAttribute('title'))

// or
// console.log(spanhi.id)
// console.log(spanhi.title)

// set attribute
spanhi.setAttribute("title","title2")
spanhi.setAttribute('id','hi2')

// or
// spanhi.id="hi2"
// spanhi.title="title2"
console.log(spanhi.id)
console.log(spanhi.title)

// removing attributes
spanhi.removeAttribute('id')
spanhi.removeAttribute('title')
// console.log(spanhi.id)   it prints empty space
// modifying data attributes
console.log(spanhi.dataset)
console.log(spanhi.dataset.test)
console.log(spanhi.dataset.longerName)

spanhi.dataset.newName="siva nagaraju"
console.log(spanhi.dataset.newName)


// Modifying element classes
// const body=document.body
// const div=document.querySelector("div")
// const spanhi=document.querySelector("#hi")
// const spanbye=document.querySelector("#bye")
// new-class is added to the code,it will display in elements tab
spanhi.classList.add("new-class")
// old-class get delete from the code in elements tab
spanhi.classList.remove("old-class")

// toggle
spanhi.classList.toggle("hi3",true)
// it will add hi3 class to code
spanhi.classList.toggle("new-class",false)
// it will remove new-class from code 

// MODIFYING ELEMENT STYLE

spanhi.style.color="red"
spanhi.style.backgroundColor="yellow"













