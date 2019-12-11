/*
fetch("https://morimorihoge.github.io/teu2019f/tweets.json").then(
    function (response) {
      return response.json();
    }
).then(
    function (json) {
      let answerHtml = "";
      json.forEach(function (tweet){
        answerHtml += `<li>${tweet.name}</li>`;
      });
document.querySelector("#answer").innerHTML = answerHtml;
    }
);
*/

//アロー関数版
fetch("https://morimorihoge.github.io/teu2019f/tweets.json").then(
   response => {
      return response.json();
    }
).then(
    json => {
      let answerHtml = "";
      json.forEach(function (tweet){
        answerHtml += `<li>${tweet.name}</li>`;
      });
      document.querySelector("#answer").innerHTML = answerHtml;
    }
);