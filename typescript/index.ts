// an example of Abstraction

interface Shape{
    area():number,
    perimeter():number
}

class Circle implements Shape{
    constructor(private radius:number){
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Shape{
    constructor(private length:number,private width:number){
        this.length = length;
        this.width = this.width;
    }
    area(): number {
        return this.length * this.width;
    }
    perimeter(): number {
        return 2 * (this.length + this.width);
    }
}

function calculateTotalArea(shape:Shape){
    return shape.area();
}

const myCircle = new Circle(3);
const myRectange = new Rectangle(4,6);
// console.log(myCircle.area());
// console.log(myCircle.perimeter());
console.log('Area of circle',calculateTotalArea(myCircle));
console.log('Area of rectangle',calculateTotalArea(myRectange));