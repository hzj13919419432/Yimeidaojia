apiready = function(){
  initListener();
}
function init(){

}
//初始化监听窗口
function initListener(){
  api.addEventListener({
      name:'viewdisappear'
  },function(){
      api.closeWin();
  });
}
function onOrderConfirm(){
  //判断是否登录
  $userid=$api.getStorage('userid');
  if(!$userid){
    api.openWin({
        name: 'login',
        url: '../user/login.html',
    });
  }
  var data = {};
  var is_dr=0;
  data.uid = $userid;
  var result = userIsJoin({uid:$userid});
  result.then(function(res) {
    if(res.status==200){
      is_dr = res.info.U_IsJoin;
      if(is_dr){
        api.toast({
            msg: '您已经是会员了，无需重复加入！',
            duration: 2000,
            location: 'bottom'
        });
        return false;
      }
    }
    api.openWin({
        name: 'orderconfirm',
        url: './orderconfirm.html',
        pageParam:{
          pid:203,
          pcount:1
        }
    });
  });

}
