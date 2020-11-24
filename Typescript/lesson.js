//DATATYPES
var num = 5;
num = 1.1;
num = -10;
// console.log(num);
var d = 10;
d = "test";
d = true;
d = undefined;
var x = "test";
var word = "P314";
var isAviable = true;
isAviable = false;
var t = undefined;
var numbers = [10, 20, 30];
var words = ["Seynur", "Sunal", "Kamil", "Zahid"];
var tuple1 = [1, "Test", true, 100];
var Color;
(function (Color) {
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Green"] = 101] = "Green";
    Color[Color["Blue"] = 102] = "Blue";
})(Color || (Color = {}));
;
// console.log(Color.Red);
var red = Color.Red;
var uType = "Salam";
uType = 100;
//FUNCTION
// Hello("Seynur")
function Hello(str) {
    console.log("Salam " + str);
}
var hello = function (str) {
    console.log(str);
};
// const arrowf=(str:string)=>console.log(str);
// hello("Sunal");
function Sum(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
// console.log(Sum(10,20));
function Sum1(x, y) {
    if (y === void 0) { y = 10; }
    console.log(x + y);
}
Sum1(10);
function CustomJoin() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.join('@');
}
console.log(CustomJoin("Sunal", "Zahid", "Kamil", "Seynur"));
