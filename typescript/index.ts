class Animal{
    constructor(public name:string){}

    move(distance:number){
        console.log(`${this.name} moved ${distance} meters`);
    }
}

class Dog extends Animal{
    constructor(public name:string = 'dog'){
        super(name);
    }
}

const myDog = new Dog();
myDog.move(10);