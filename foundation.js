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

removeItemsFromList();
