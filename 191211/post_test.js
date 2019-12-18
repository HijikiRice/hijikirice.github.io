function zipSearch() {
  let zip = document.querySelector("#zip").value;
  console.log(zip)
  fetch("https://api.zipaddress.net/?zipcode=" + zip).then(
      function (res) {
        console.log(res)
        return res.json();
      }
  ).then(
      function (json) {
        console.log(json)
        let answerHtml = "";

        if(json.code == 200){
        answerHtml += json.data.fullAddress;
        }else{
          answerHtml += "存在しない郵便番号です";
        }
        document.querySelector("#answer").innerHTML = answerHtml;
      }
  );
}
