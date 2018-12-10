apiready = function(){
      api.parseTapmode();
      init();
}
function init() {
  var header = $('body>header');
  $api.fixStatusBar(header);
}
function updateRemark(){
  var data = {};
  data.CU_Remark=$('#remark').val().trim();
  data.CU_Id = $api.getStorage('userid');
  if(data.CU_Remark.length >15 ||  data.CU_Remark.length ==0){
    $api.toast({
        msg : '昵称长度要少于15个字且不能为空',
        duration : 3000,
        location : 'bottom'
    });
    return false;
  }
  if(data.CU_Id == null){
    $api.toast({
        msg : '请先登录！',
        duration : 3000,
        location : 'bottom'
    });
    return false;
  }

  var strdata = JSON.stringify(data);
  var result = update_userinfo({data:strdata});
  result.then(function(res) {
    if(res.status==200){
      api.toast({
          msg : '修改成功！',
          duration : 3000,
          location : 'bottom'
      });
      api.sendEvent({
          name: 'reloadUserInfo'
      });
    }else{
      api.toast({
          msg : '修改失败！',
          duration : 3000,
          location : 'bottom'
      });
    }
  })

}
