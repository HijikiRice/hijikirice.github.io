function hello(){
console.log("こんにちはこんにちは");
}

function helloSomeone(name) {
  console.log("こんにちは"+name+"さん");
}

function helloCircleArea(radius) {
  console.log(radius * radius * 3.14);
}

function helloRectangleArea(width, height) {
  console.log(width * height);
}

function helloSomeone2(name) {
  console.log(`こんにちは${name}さん`);
}

function circleArea(radius) {
  return radius * radius * Math.PI;
}

function rectangleArea(width, height) {
  return width * height;
}

function test() {
  return 2019 * 1010;
}

function times(a, b) {
  return a * b;
}

function digit1(a, b) {
  return (a * b) % 10;
}

function digit2(a, b) {
  // parseInt は 小数点以下を切り捨てる関数
  return parseInt((a * b) % 100 / 10);
}

