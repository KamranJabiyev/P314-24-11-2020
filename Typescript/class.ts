import {Student} from './student'

let stu=new Student();
stu.name="Seynur";
console.log(stu.name)
class Human {
    public name:string;
    surname:string;
    age:number;
    private address:string;
    readonly weight:number;

    constructor(name:string,surname:string,age:number,weight:number) {
        this.weight=weight;
        this.age=age;
        this.name=name;
        this.surname=surname;
    }
    Info():void{
        console.log(`${this.name} ${this.surname} ${this.age} ${this.weight}`);
    }

    //encapsulation
    // get GetAddress(){
    //     return this.address;
    // }

    // set SetAddress(str:string){
    //     this.address=str;
    // }
}

// let h1=new Human();
// h1.name="Seynur";
// h1.surname="Memmedov";
// h1.age=20;
// h1.Info();
// console.log(h1.weight)
let h=new Human("Zahid","Qasimli",20,72);
// h.Info();


class Man extends Human{
    /**
     *
     */
    constructor(name:string,surname:string,age:number,weight:number) {
        super(name,surname,age,weight);
        
    }

    Test():void{
        console.log("Man test")
    }
}

let m=new Man("Kamil","Memmedov",19,70);
// m.Test();
// m.Info();

let m1:Human=new Man("Sunal","Jabili",20,90);

abstract class Animal {
    constructor() {
        console.log("Animal created")
    }
    abstract Eat():void;
}

class Eagle extends Animal implements IRun,ISee {
    constructor() {
        super();
    }
    static pi:number=3.14;
    See(): void {
        console.log("See as Eagle")
    }
    Run(): void {
        console.log("Run as Eagle")
    }
    Eat(): void {
        console.log("Eat as Eagle")
    }
    Fly():void{
        console.log("Fly as Eagle")
    }
}
Eagle.pi;
let eagle=new Eagle();
eagle.Eat();
eagle.Fly();
let eagle1:Animal=new Eagle();

interface IRun{
    Run():void;
}

interface ISee{
    See():void;
}

class GenericC<T> {
    variable:T;
    constructor(x:T) {
        console.log(x)
    }
}

let g=new GenericC<string>("Salam");
let g1=new GenericC<Eagle>(eagle);