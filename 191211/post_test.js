fetch("http://zipcloud.ibsnet.co.jp/api/search?zipcode=1920916").then(
    function (response) {
      return response.json();
    }
).then(
    function (json) {
      let answerHtml = "";
      json.forEach(function (tweet) {
        answerHtml += `<li>${tweet.name}</li>`;
      });
      document.querySelector("#answer").innerHTML = answerHtml;
    }
);