console.log("m0118052_kadai.jsの読み込み");

let answer = document.querySelector("#answer");
let answerHTML;
answerHTML = "<ul>"
let i = 0;

while(i < tweets.length){
  answerHTML = answerHTML
      + "<li class='tweet'>"
      + "<img src = " + tweets[i].avatar + " alt = " + tweets[i].name + " class = 'icon'>"
      + "<b>" + tweets[i].name + "</b> "
      + tweets[i].message
      + " <i>" + tweets[i].tweetedAt + "</i>"
      + "</li>";
  i++;
}
answerHTML  = answerHTML + "</ul>";
answer.innerHTML = answerHTML;