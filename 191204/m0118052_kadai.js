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

function userSelectAll() {
  console.log("Allが押された")
  answerHTML = "<ul>"
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
}

function userSelectSaburou() {
  console.log("三郎BOTが押された")
  answerHTML = "<ul>"
  while(i < tweets.length){
    answerHTML = answerHTML
        + "<li class='tweet'>"
        + "<img src = " + tweets[0].avatar + " alt = " + tweets[0].name + " class = 'icon'>"
        + "<b>" + tweets[0].name + "</b> "
        + tweets[0].message
        + " <i>" + tweets[0].tweetedAt + "</i>"
        + "</li>";
    i++;
  }
  answerHTML  = answerHTML + "</ul>";
  answer.innerHTML = answerHTML;
}

function userSelectJirou() {
  console.log("次郎が押された")
  answerHTML = "<ul>"
  while(i < tweets.length){
    answerHTML = answerHTML
        + "<li class='tweet'>"
        + "<img src = " + tweets[1].avatar + " alt = " + tweets[1].name + " class = 'icon'>"
        + "<b>" + tweets[1].name + "</b> "
        + tweets[1].message
        + " <i>" + tweets[1].tweetedAt + "</i>"
        + "</li>";
    i++;
  }
  answerHTML  = answerHTML + "</ul>";
  answer.innerHTML = answerHTML;
}

function userSelectTarou() {
  console.log("太郎が押された")
  answerHTML = "<ul>"
  while(i < tweets.length){
    answerHTML = answerHTML
        + "<li class='tweet'>"
        + "<img src = " + tweets[2].avatar + " alt = " + tweets[2].name + " class = 'icon'>"
        + "<b>" + tweets[2].name + "</b> "
        + tweets[2].message
        + " <i>" + tweets[2].tweetedAt + "</i>"
        + "</li>";
    i++;
  }
  answerHTML  = answerHTML + "</ul>";
  answer.innerHTML = answerHTML;
}