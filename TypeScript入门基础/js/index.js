"use strict";
//基础的TypeScript知识点
let id = 5;
let company = '有个小院';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, '玛丽', true];
// Tuple Array
let employee;
employee = [
    [1, '玛丽'],
    [2, '杰克'],
    [3, '蜘蛛']
];
// Union
let pid;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: '杰克'
};
// Type Assertion
let cid = 1;
// let customerId=<number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: '杰克'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const bard = new Person(1, '玛丽');
const mike = new Person(2, '杰克');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, '玛丽', '经理');
// Generics
function getArray(iteems) {
    return new Array().concat(iteems);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['玛丽', '杰克', '珍珠', '野兽']);
numArray.push(1);
