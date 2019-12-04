console.log("array_each.jsの読み込み");

let answer = document.querySelector("#answer");
let answerHTML = "";
answerHTML = "<ul>"
let i = 0;
while(i < fruitNames.length){
  answerHTML = answerHTML + "<li>" + fruitNames[i] + "</li>";
  i++;
}
answerHTML  = answerHTML + "</ul>";
answer.innerHTML = answerHTML;

//answer.innerHTML = fruitNames;