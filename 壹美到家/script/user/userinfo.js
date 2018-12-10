/*head tab*/
apiready = function(){
    api.parseTapmode();
    init();
}
function init(){
  loadUserInfo();
  listenReload();
}
function listenReload(){
  api.addEventListener({
      name: 'reloadUserInfo'
  }, function(ret, err) {
      loadUserInfo();
  });
}
function loadUserInfo(){
  var uid = $api.getStorage('userid');
  var result = get_userinfo({uid:uid});
  result.then(function(res){
    //console.log(JSON.stringify(res));
    if(res.status ==200){
      var nickname = res.info.CU_Nickname;
      var wechat = res.info.CU_Wechat;
      var img = res.info.CU_Photo;
      var phone = res.info.CU_Mobile;
      var remark = res.info.CU_Remark;

      if(nickname!= null && nickname.length >0){
        $($('.nicknameVal')[0]).text(nickname);
      }

      if(wechat!=null && wechat.length>0){
        $($('.wechatVal')[0]).text(wechat);
      }

      if(remark!=null && remark.length>0){
        $($('.remark')[0]).text(remark);
      }

      if(phone != null && phone.length>0){
        $($('.phoneVal')[0]).text(phone);
      }

      if(img != null && img.length>0){
        $('#logoBox img').attr('src',img);
      }

    }
  });

}

//点击昵称跳转到修改昵称界面
function onNickName(){
    api.openWin({
        name: 'NickName',
        url: '../public/nickname.html'
    });
}
//点击微信号跳转到修改微信页面
function onAmend(){
    api.openWin({
        name: 'Amend',
        url: '../public/amend.html'
    });
}
//点击个性签名跳转到修改个性签名页面
function onAutoGraph(){
    api.openWin({
        name: 'AutoGraph',
        url: '../public/autograph.html'
    });
}
//点击手机号跳转到修改手机号页面
function onCellPhone(){
    api.openWin({
        name: 'CellPhone',
        url: '../public/cellphone.html'
    });
}
function quit() {
  $api.rmStorage('userid');
  api.openWin({
      name: 'login',
      url: './login.html',
      pageParam:{
        from:'userinfo'
      }
  });
}
