


   switch ( new Date().getDay()){
       case 10:
           console.log("saturday")
           break;
           
       default:
           console.log(" In Normal dayz" )
           break;

   }
   // operators
   console.log(10 == 12)
   console.log(10 <= 12)
   console.log(10 >= 12)
   console.log(10 && 12)
   console.log(10 || 12)
   console.log(10 < 12)
   console.log(10 > 12)
   console.log(1 != 22)
   console.log((22 == 22))
   
   console.log("22" == 22)
   console.log(22 == "22")
   console.log(22 == false)
   console.log("22" === true)
   const number = [1,2,3,4,5,-5,6,7].map(function(n){
    return n *3
})

  
   console.log(number)
   const filtred =[1,2,3,4,5,-5,6, 10].filter(function(n){
       return n % 2 === 0})
   console.log(filtred)
    var reduce = [1,2,3,4,5,].reduce(function(num1,num2){
        return num1 + num2
    })
console.log(reduce)


function callback(name ,call){
    console.log(call(name))
}
var call = function(name){
    return " hello " + name
}
callback("Abel Mohamad",call)
 


var firstArray = ["Mevis","Pablo","Irakoze","Carla","Laddie"]
var secondArray = ["Mariko","Bint","Dee jay","Disk joker","Webdesign"]

const combinateArray = [...firstArray,...secondArray]
combinateArray.forEach(function(name){
    console.log(name)

})
const name = " mariko karimunda"

const namearray = [...name]
namearray.forEach(function(letter){
    console.log(letter)
})
const count = function (n1,n2,n3){
    return n1+n2+n3;
}
//passing array in function
const newArray = [11,22,13]
const addition = count(...newArray)
console.log(addition)
// object
const address = {
    city: 'LA',
    Nation: 'USA',
    postCode: 'LA44'
}
const Pername = {
    firstName: 'Andy',
    LastName: 'USA' 
}
const person = {...Pername,...address}

console.log(JSON.stringify(person, null,2))
const power = 
[1,2,3,4,5,6].map((number,index) =>
 Math.pow(number,index))
console.log(power)
// object
const owner = {
    name:'ALex',
    cars:['ferrari','lambo','bugatti'],
    toString:function(){
        this.cars.forEach(car =>{
        console.log(`${this.name} has ${car}`)
    })
}
}
owner.toString()

const pricePropName = "PRICE"
const calculator = (name,price) => {
    return {
        name,
        add(n1,n2){
            return n1+n2;
        },
        [pricePropName.toLowerCase()]:price
    }
}
const calc = calculator('casio',12.344)
console.log(calc.name)
console.log(calc.add("konka ",20))
console.log(calc.price)

//object with arrow function
const userData = () => {
    return{
    name: "John",
    surname: " Doe",
    Adress:{
    country:" United states",
    city: "Calfonia",
    postCode: "Rwanda",
    fullAdre:{
        doorNumb: "22",
        street: "LA st",
    }
    },
    age:29
    
    }
}
 const user = userData()
/*  const othername = user.name;
const age = user.age;
  const country = user.Adress.country;
*/

  //const doorNumber =user.Adress.fullAdre.doorNumb;
const { othername , age,Adress:{ country:thecountry}}= user
const {Adress: {fullAdre: {doorNumb:door} } } = user
 console.log(othername)
 console.log(age)
 console.log(thecountry)
 console.log(door)


 //Calculating the salary usin ------- object
 const calculatepay = (yearSalary,bonus = {
    teamBonus:0,
    employeeBonus:0
 }) => {
     return yearSalary +bonus.teamBonus + bonus.employeeBonus
      }
      console.log(calculatepay(230,{teamBonus: 100,employeeBonus:500}))
      //class--------------------INHERTANCE-------------------------
      class animal {
          constructor ( name ,age) {
              console.log(`${name} is an animal he can breath`)
              this.name = name
              this.age = age
            

          }
          eat(){
              console.log(`${this.name} is eating`)
          }
          sleep(){
              console.log(`${this.name} is sleeping shhhh`)
          }
          wakeup(){
              console.log(`${this.name} is awaking`)
          }
          logage(){
              console.log(`${this.name} has a ${this.age} years old`)
          }
      }
      const bobby = new animal("bobby",23)
      bobby.eat()
      bobby.sleep()
      bobby.wakeup()
      bobby.logage()


      class dog  extends animal{
          constructor(name,age,breed){
            super(name,age)
            this.breed = breed            
          }
          static method = " Hello LAddie I was Testing"
          logbreed(){
              console.log(`${this.name} is a ${this.breed}`)
          }       
          logA(){
              super.logage()
              
          }    }  
          
        

      class cat  extends animal{
          constructor(name,age){
            super(name,age)
                    
          }          
          logC(){
              super.logage()              
          }      
        
                
    }
      const Josh = new cat ('josh',4)
Josh.logC()
Josh.eat()
Josh.sleep ()
console.log(dog.method)



