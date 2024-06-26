function JSEngine(code) {
  return code.split(/\s+/);
}

console.log(JSEngine("var a = 5"));

// Interpreter vs compiler

function someCalculation(x, y) {
  return x + y;
}

for (let i = 0; i < 10; i++) {
  console.log(someCalculation(5, 4));
}

// Stack overflow

const list = new Array(60000).join("1.1").split(".");

function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    setTimeout(removeItemsFromList, 0);
  } else {
    console.log("End = " + list.length);
  }
}

// removeItemsFromList();

// Hoisting

console.log("1-------");
console.log(teddy);
console.log(sing2);
var teddy = "bear";

// Function expression
var sing2 = () => {
  console.log("uhhh la la la");
};

// Function declaration
function sing() {
  console.log("ohhh la la la");
}

// Hoisting with 2 declarations of the same function

a();

function a() {
  console.log("Hi");
}

function a() {
  console.log("Bye");
}

// Hoisting exercise

var favoriteFood = "grapes";

var foodThoughts = function () {
  console.log("Original favorite food: " + favoriteFood);
  favoriteFood = "sushi";

  console.log("New favorite food: " + favoriteFood);
};

foodThoughts();

// Arguments

function marry(person1, person2) {
  console.log("arguments", arguments);
  console.log(Array.from(arguments));
  console.log(`${person1} is now married to ${person2}`);
}

function marry2(...args) {
  console.log("arguments", args);
  console.log(Array.from(arguments));
  console.log(`${args[0]} is now married to ${args[1]}`);
}

marry("Tim", "Tina");
marry2("Tim", "Tina");

// this

const obj = {
  name: "Billy",
  sing: function () {
    console.log(this);
    var self = this;
    var anotherFunc = function () {
      console.log(self);
    };
    anotherFunc();
  },
};

obj.sing();

// Call, Apply

const wizard = {
  name: "Merlin",
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

console.log("1", archer);
const healArcher = wizard.heal.bind(archer, 100, 30);
healArcher();
console.log("2", archer);

const array = [1, 2, 3];

function getMaxNumber(arr) {
  //   return Math.max(...arr);
  return Math.max.apply(null, arr);
}

console.log(getMaxNumber(array));

// Currying

function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));
let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(4));

// this exercise

const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

console.log("?", giveMeTheCharacterNOW());
