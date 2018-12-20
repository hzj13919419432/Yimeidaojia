apiready = function(){
    init();
}
function init(){
    api.parseTapmode();
    fixHeaderBar();
    inittab();
    initPage();
}
function fixHeaderBar() {
  var header = document.querySelector('body>header');
  $api.fixStatusBar(header);

}
function inittab() {
  var tab = new auiTab({
        element:document.getElementById("tab"),
        index:1,
        repeatClick:false
    },function(ret){
      api.setFrameGroupIndex({
          name: 'emcollegeFG',
          index: (ret.index-1)
      });
    });
}
function initPage() {
  var header = document.querySelector('body>header');
  var offset = $api.offset(header);
  var headerH = offset.h;
  // var frameh = $api.getStorage('frameh');
  api.openFrameGroup({
      name: 'emcollegeFG',
      rect: {
          x: 0,
          y: headerH,
          w: 'auto',
          h: 'auto'
      },
      scrollEnabled:false,
      frames: [{
          name: 'bussschool',
          url: './bussschool.html',
          bgColor: '#fff'
      }, {
          name: 'activity',
          url: './activity.html',
          bgColor: '#fff'
      }]
  }, function(ret, err) {

  });
}
