apiready = function () {
  init();
}
function init() {
  api.parseTapmode();
  // fixHeader();
  // inittab();
  bindTopic();
}

//社区热门
function bindTopic(){
  var result=getTopic();
  result.then(function(res){
     console.log(JSON.stringify(res));
     if(res.status==200){
       var list=[];
       $.each(res.info, function(i, item){
          item['TI_Url']=imageUrl+item['TI_Url'];
          item['CU_Photo']=imageUrl+item['CU_Photo'];
          list.push(item);
      });
    //console.log(JSON.stringify(list));
      var html=template('secInd_tmpl',{secInd:list})
      $('#secInd_div').html(html);
      var html=template('twoInd_tmpl',{secInd:list})
      $('#twoInd_div').html(html);
     }
  });
}

function fixHeader() {
  var header = document.querySelector('body>header');
  $api.fixStatusBar(header);
}
function inittab() {
  var tab = new auiTab({
        element:document.getElementById("tab"),
        index:1,
        repeatClick:false
    },function(ret){
      console.log(ret.index);
    });
}

function publish(){
  api.openWin({
      name: 'topicpublish',
      url: './topicpublish.html'
  });
}

function toHotarticle() {
  api.openWin({
      name: 'hotarticle',
      url: './hotarticle.html'
  });
}
