apiready = function () {
  api.parseTapmode();
  init();

}
function init() {
  var header = document.querySelector('body>header');
  $api.fixStatusBar(header);

}
