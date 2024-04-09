function JSEngine(code) {
  return code.split(/\s+/);
}

console.log(JSEngine("var a = 5"));
