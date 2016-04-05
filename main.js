var mainCookie = document.querySelector("#bigCookie");
var goldenCookie = document.querySelector("#goldenCookie");
var products = [];
for (var i = 0; i < 14; i++) {
  products.push(document.querySelector("#product" + i));
}

var mainClicker = setInterval(function () {
  mainCookie.click();
  goldenCookie.click();
}, 1);
