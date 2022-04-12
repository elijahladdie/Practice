// Adult meter
var person = {
    name:"Anna",
    age: 17
    }
   switch(true){
       case (person.age < 17):
           console.log(person.name + " Hello your age is "+ person.age +" your are Still young")
           break;
       case (person.age > 17):
        console.log(person.name + " Hello your age is "+ person.age +" your are  an adult")
           break;
           default:
           (" Your age is invalid")
              break;
   }
