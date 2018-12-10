/*
* @Author: nickhuang
* @Date:   2018-05-18 11:11:10
* @Last Modified by:   nickhuang
* @Last Modified time: 2018-05-19 14:12:34
*/
apiready = function(){
  initDomAddEve();
}
function initDomAddEve(){
  var sendCodeDiv = $api.byId('getVCode')
  $api.one(sendCodeDiv,'click',SendVCode,false);
}
	//注册
	function onRegister() {
		// 拿到表单数据
		var data_str = $('#form').serialize();
		var data=strToObj(data_str);
		if(verify(data)){
	    submit(data);
	  }
	}
	//表单校验
	function verify(data){
		//进行表单校验
		if(data.mobile.length!=11){
      api.toast({	msg:'请输入11位手机号！',duration:2000,location:'bottom'});
			return false;
		}else if(data.vCode.length<6){
      api.toast({	msg:'验证码输入错误！',duration:2000,location:'bottom'});
			return false;
		}else if(data.ucode.length<6){
      api.toast({	msg:'请输入有效的邀请码！',duration:2000,location:'bottom'});
			return false;
		}
    return true;
	}
	//获取需要的数据并请求
function submit(data){
		var resData={};
		resData.mobile=data.mobile;
		resData.ucode=data.ucode;
    resData.vcode=data.vCode;
		var result=register(resData);
		result.then(function(res){
			console.log(JSON.stringify(res));
			if (res.status==200){
		       api.toast({	msg:'注册成功',duration:2000,location:'bottom'});
		       api.sendEvent({
		         name: 'resback',
		         extra: {
		           mobile:resData.mobile,
		           pwd:resData.password
		         }
		      });
		       api.openWin({
		           name: 'login',
		           url: '../user/login.html'
		       });
			}else{
				api.toast({msg:res.msg,duration:2000,location:'bottom'});
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
//发送短信验证码
function SendVCode(){
	var data_str = $('#form').serialize();
	var data=strToObj(data_str);
	var ele = document.getElementById('getVCode');
	//用手机号请求接口拿到验证码
	var result=sendCode({'mobile':data.mobile,'type':'register'});
	result.then(function(res){
		if(res.status==200){
      api.toast({	msg:'验证码发送成功',duration:2000,location:'bottom'});
			setTimeDown(60,ele);
		}else{
      api.toast({	msg:'验证码发送失败',duration:2000,location:'bottom'});
		}
	})
}

var timer;
function setTimeDown(t,e){
	if(t==0 || timer!=null){/*有清除定时器的操作*/
        clearTimeout(timer);
  }
  if (t == 0) {
			$(e).removeAttr("disabled");
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
