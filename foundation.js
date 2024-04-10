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
