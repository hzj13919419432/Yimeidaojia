/*head tab*/
apiready = function(){
    init();
}
function init(){
    api.parseTapmode();
    fixHeaderBar();
    loadUserInfo();
}
function fixHeaderBar() {
  var header = document.querySelector('body>header');
  $api.fixStatusBar(header);
}
function loadUserInfo() {
  var data ={};
  data.uid = $api.getStorage('userid');
  var result = get_userinfo(data);
  result.then(function(res){
    if(res.status ==200){
      var nickname = res.info.CU_Nickname;
      var img = res.info.CU_Photo;
      if(nickname){
        $('#nickname').text(nickname);
      }else{
        $('#nickname').text('暂未设置');
      }
      if(img){
        $('#user-pic').attr('src',img);
      }
    }
  });
}
function onOrder(index){
    api.openWin({
        name: 'Order',
        url: '../order/order.html',
        pageParam:{
          index : index
        }
    });
}
//点击头像跳转个人资料
function toUserInfo() {
  api.openWin({
      name: 'userinfo',
      url: './userinfo.html'
  });
}
//点击我的专属跳转到关注
function toStoreFav(index){
    api.openWin({
        name: 'StoreFav',
        url: './storefavorite.html',
        pageParam:{
          index:index
        }
    });
}
function toShoppingcar() {
  api.openWin({
      name: 'shoppingcar',
      url: '../public/shoppingcart.html',
  });

}

//点击地址管理跳转到地址管理页面
function toAddEdit(){
    api.openWin({
        name: 'AddEdit',
        url: './addresslist.html'
    });
}
//点击实名认证跳转到实名认证页面
function toReaLauth(){
    api.openWin({
        name: 'ReaLauth',
        url: './realauth.html'
    });
}
//点击设置跳转到设置页面
function toSetUp(){
    api.openWin({
        name: 'SetUp',
        url: '../public/setup.html'
    });
}
function toMessage() {
  api.openWin({
      name: 'MessAge',
      url: '../user/message.html'
  });
}
function notCometrue() {
  api.toast({
    msg: '功能暂未实现',
    duration: 2000,
    location: 'middle'
});
}
