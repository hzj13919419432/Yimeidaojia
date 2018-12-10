//初始化极光推送
function initAJPush(){
    jpush = api.require('ajpush');
    jpush.init(function(ret) {
        if (ret && ret.status){

        }
    });
    jpush.getRegistrationId(function(ret) {
        var registrationId = ret.id;
        data={
          uid:$api.getStorage('userid'),
          macid:registrationId
        }
        var result=update_usermac(data);
        result.then(function(res){
          if(res.status==200){
            console.log(JSON.stringify(res));
          }
        });
    });
   api.addEventListener({name:'appintent'}, function(ret,err) {
       if (ret && ret.appParam.ajpush) {
            var ajpush = ret.appParam.ajpush;
            var id = ajpush.id;
            var title = ajpush.title;
            var content = ajpush.content;
            var extra = ajpush.extra;
        }
    });
   api.addEventListener({name:'pause'}, function(ret,err) {
       onPause();//监听应用进入后台，通知jpush暂停事件
   })

   api.addEventListener({name:'resume'}, function(ret,err) {
       onResume();//监听应用恢复到前台，通知jpush恢复事件
   })
}
//统计-app恢复
function onResume(){
    jpush.onResume();
    console.log('JPush onResume');
}

//统计-app暂停
function onPause(){
    jpush.onPause();
    console.log('JPush onPause');
}
