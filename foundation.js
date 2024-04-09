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
