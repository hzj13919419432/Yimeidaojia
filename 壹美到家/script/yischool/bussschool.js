/*head tab*/
apiready = function(){
    init();
}
function init(){
    api.parseTapmode();
    fixHeaderBar();

}
function fixHeaderBar() {
  var header = document.querySelector('body>header');
  $api.fixStatusBar(header);

}
function toCoursedetail(index) {
  api.openWin({
      name: 'coursedetail',
      url: './coursedetail.html',
      pageParam: {
          name: 'coursedetail',
          index:index
      }
  });

}
