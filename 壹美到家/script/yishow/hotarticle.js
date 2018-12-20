apiready = function () {
  init();
}
function init() {
  api.parseTapmode();
  // fixHeaderbar();
  // inittab();
  bindTopic();
}
function fixHeaderbar() {
  var header = document.querySelector('body>header');
  $api.fixStatusBar(header);
}
function toYishow() {
  api.openWin({
      name: 'topic',
      url: '../../html/yishow/topic.html',
      pageParam: {
          name: 'topic'
      }
  });
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
function toArticleDetail(index){
  api.openWin({
      name: 'hotarticledetail',
      url: './hotarticledetail.html',
      pageParam: {
          alid:index
      }
  });
}

//社区热门
function bindTopic(){
  var result=getArticle({atcode:'rmzx'});
  result.then(function(res){
     //console.log(JSON.stringify(res));
     if(res.status==200){
       var list=[];
       $.each(res.info, function(i, item){
          item['AL_Image']=imageUrl+item['AL_Image'];
          list.push(item);
      });
    //console.log(JSON.stringify(list));
      var html=template('secInd_tmpl',{secInd:list})
      $('#secInd_div').html(html);
     }
  });
}
