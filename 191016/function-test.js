function testFunction() {
  console.log("testFunctionを実行");
}
function testMessage(message) {
  console.log(message);
}

function testFunction3(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

testFunction3(1,2,3);

function testFunction4(a = "デフォルト"){
  console.log(a);
}
