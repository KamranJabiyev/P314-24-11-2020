"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var student_1 = require("./student");
var stu = new student_1.Student();
stu.name = "Seynur";
console.log(stu.name);
var Human = /** @class */ (function () {
    function Human(name, surname, age, weight) {
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.surname = surname;
    }
    Human.prototype.Info = function () {
        console.log(this.name + " " + this.surname + " " + this.age + " " + this.weight);
    };
    return Human;
}());
// let h1=new Human();
// h1.name="Seynur";
// h1.surname="Memmedov";
// h1.age=20;
// h1.Info();
// console.log(h1.weight)
var h = new Human("Zahid", "Qasimli", 20, 72);
// h.Info();
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    /**
     *
     */
    function Man(name, surname, age, weight) {
        return _super.call(this, name, surname, age, weight) || this;
    }
    Man.prototype.Test = function () {
        console.log("Man test");
    };
    return Man;
}(Human));
var m = new Man("Kamil", "Memmedov", 19, 70);
// m.Test();
// m.Info();
var m1 = new Man("Sunal", "Jabili", 20, 90);
var Animal = /** @class */ (function () {
    function Animal() {
        console.log("Animal created");
    }
    return Animal;
}());
var Eagle = /** @class */ (function (_super) {
    __extends(Eagle, _super);
    function Eagle() {
        return _super.call(this) || this;
    }
    Eagle.prototype.See = function () {
        console.log("See as Eagle");
    };
    Eagle.prototype.Run = function () {
        console.log("Run as Eagle");
    };
    Eagle.prototype.Eat = function () {
        console.log("Eat as Eagle");
    };
    Eagle.prototype.Fly = function () {
        console.log("Fly as Eagle");
    };
    return Eagle;
}(Animal));
var eagle = new Eagle();
eagle.Eat();
eagle.Fly();
var eagle1 = new Eagle();
var GenericC = /** @class */ (function () {
    function GenericC(x) {
        console.log(x);
    }
    return GenericC;
}());
var g = new GenericC("Salam");
var g1 = new GenericC(eagle);
