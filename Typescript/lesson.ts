//DATATYPES
let num:number=5;
num=1.1;
num=-10;
// console.log(num);

let d:any=10;
d="test";
d=true;
d=undefined;

let x="test";

let word:string="P314";

let isAviable:boolean=true;
isAviable=false;

let t:void=undefined;

let numbers:number[]=[10,20,30];

let words:Array<string>=["Seynur","Sunal","Kamil","Zahid"];

let tuple1:[number,string,boolean,any]=[1,"Test",true,100];

enum Color{Red=100,Green,Blue};
// console.log(Color.Red);

let red:Color=Color.Red;

let uType:string|number="Salam";
uType=100;

//FUNCTION
// Hello("Seynur")
function Hello(str:string):void{
    console.log("Salam "+str);
}



const hello=function(str:string):void{
    console.log(str);
}

// const arrowf=(str:string)=>console.log(str);

// hello("Sunal");

function Sum(x:number,y?:number):number{
    if(y){
        return x+y;
    }
    return x;
}

// console.log(Sum(10,20));

function Sum1(x:number,y:number=10):void{
    console.log(x+y)
}

// Sum1(10);

function CustomJoin(...arr:string[]):string{
    return arr.join('@');
}

console.log(CustomJoin("Sunal","Zahid","Kamil","Seynur"))

function Test<T>(s:T):void{
    console.log(s)
}

Test<string>("Salam");
Test<number>(100);
Test<boolean>(true);

function GenericF<T extends number|string>(s:T):void{
    console.log(s)
}

GenericF<number>(10);



