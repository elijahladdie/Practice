const obj = {
    name: "elia",
    age: 7,
    DOB: 2004,
    country: "Rwanda"
}
const ReturnString = JSON.stringify(obj)
console.log("This is a string "+ReturnString+"THAT WAS A STRING") 

console.log(JSON.parse(ReturnString))

function Display(){
 const   object  = JSON.stringify(obj) 
console.log(object)
console.log(JSON.parse(object))
}
Display();


const Retry = ( () => {
    console.log("it is Possible")
})
();
console.log(Object.keys(obj))
console.log(Object.values(obj))