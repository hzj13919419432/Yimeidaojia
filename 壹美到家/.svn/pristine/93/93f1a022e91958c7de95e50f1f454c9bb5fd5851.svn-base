apiready = function(){
  initListener();
  initDomAddEve();
}
//初始化监听窗口
function initListener(){
  api.addEventListener({
      name: 'keyback'
  }, function(ret, err) {
    if(api.pageParam.from=='userinfo'){
      return false;
    }
  });
  api.addEventListener({
      name:'viewdisappear'
  },function(){
      api.closeWin();
  });
}
function initDomAddEve(){
  var sendCodeDiv = $api.byId('getVCode')
  $api.one(sendCodeDiv,'click',SendVCode,false);
}
function onLogin(){
  var data_str = $('#form').serialize();
  var data=strToObj(data_str);
  if(data.mobile.length!=11){
    api.toast({	msg:'请输入11位手机号！',duration:2000,location:'bottom'});
    return false;
  }else if(data.vCode.length<6){
    api.toast({	msg:'验证码输入错误！',duration:2000,location:'bottom'});
    return false;
  }
  var result=login_sms({
    'mobile':data.mobile,
    'vcode':data.vCode
  });
  result.then(function(res){
      if (res.status==200) {
        $api.setStorage('userid',res.info.CU_Id);
        $('.authcode #code').val("");
        //api.closeWin();
        api.openWin({
              name: 'register',
              url: '../../index.html'
        });
        return;
      }else{
        api.toast({msg:'登陆失败',duration:1500,location:'bottom'});
        $('#txtvCode').val("");
      }
    });
}
function onSwichPage(){
  api.openWin({
      name: 'register',
      url: './register.html'
  });
}
//发送短信验证码
function SendVCode(){
  var data_str = $('#form').serialize();
  var data=strToObj(data_str);
  var ele = document.getElementById('getVCode');
  //用手机号请求接口拿到验证码
  var result=sendCode({'mobile':data.mobile,'type':'login'});
  result.then(function(res){
    if(res.status==200){
      api.toast({	msg:'验证码发送成功',duration:2000,location:'bottom'});
			setTimeDown(60,ele);
    }else{
      api.toast({	msg:'验证码发送失败',duration:2000,location:'bottom'});
    }
  })
}
//将序列化表单的字符串转化为对象
function strToObj(str){
  str = str.replace(/&/g,"','");
    str = str.replace(/=/g,"':'");
    str = "({'"+str +"'})";
    obj = eval(str);
    return obj;
}


var timer;
function setTimeDown(t,e){
	if(t==0 || timer!=null){/*有清除定时器的操作*/
        clearTimeout(timer);
  }
  if (t == 0) {
			$(e).html('获取验证码');
      $api.one(e, 'click', SendVCode,false);
  } else {
      $(e).html("重新发送(" + t + ")");
      t--;
      timer = setTimeout(function() {
          setTimeDown(t,e);
      },1000);
  }
}
