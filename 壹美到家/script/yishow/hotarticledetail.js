apiready = function () {
  init();
}
function init() {
  api.parseTapmode();
  // fixHeaderbar();
  // inittab();
  var alid=api.pageParam.alid;
  bindTopic(alid);
}
//社区文章
function bindTopic(alid){
  var result=getContent({alid:alid});
  result.then(function(res){
    if(res.status==200){
      res.info.AL_Image=imageUrl+res.info.AL_Image;
      var html=template('secInd_tmpl',{content:res.info})
      $('#secInd_div').html(html);
    }
  });
}
