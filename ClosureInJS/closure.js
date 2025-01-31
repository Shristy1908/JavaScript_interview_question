function outer(b) {
  var a = 20;
  function inner() {
    return a + b;
  }
  return inner();
}

console.log("total value: " + outer(10));

//helps in data encapsulation
