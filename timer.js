/*
// Factory function
function createCircle(radius){
    return{
    radius,
    draw: function(){
        console.log('draw')
    }
    }
}

const circle = createCircle()

// Constructor function
function Circle(radius){
    this.radius = radius
    this.draw = function (){
        console.log('draw')
    }
}
const another = new Circle(1)
*/
function Circle(radius){
    this.radius = radius
    let defaultlocation = { x:10,y:20}
    this.getDefaultLocation = function (){
        return defaultlocation;
    }
    this.draw = function(){
        console.log('draw');
    };
        Object.defineProperty(this,'defaultlocation',{
            get:function(){
                return defaultlocation;
            },
            set:function (value){
                if(!value.x || !value.y)
                throw new Error('Invalid location')
            defaultlocation = value
  
            }
        })
  
}
const circle = new Circle(10)
circle.defaultlocation = 1
circle.draw()