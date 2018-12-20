apiready = function(){

  init();
};

function init(){
  api.parseTapmode();
  fisHeadbar();
  loadUserInfo();
  loadAssets();
}
function fisHeadbar() {
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
      if(!res.info.U_IsJoin){
        $('#dr_logo').hide();
      }
    }
  });
}
//点击设置跳转到设置页面
function toSetUp(){
    api.openWin({
        name: 'SetUp',
        url: '../public/setup.html'
    });
}
//点击头像跳转个人资料
function toUserInfo() {
  api.openWin({
      name: 'userinfo',
      url: './userinfo.html'
  });
}
function toMydistsale() {
  api.openWin({
      name: 'distsale',
      url: './distsale.html'
  });
}
//加载资产数据
function loadAssets() {
  var uid=$api.getStorage('userid');
  var result=get_userprofit({uid:uid});
  result.then(function(res){
    if(res.status==200){
      $('#toAmt').text(res.info.toAmt);
      $('#toOrdercount').text(res.info.ordercount);
      $('#allAmt').text(res.info.sumamt);
      $('#wkAmt').text(res.info.wkAmt);
    }
   });
}
//跳转到提现
function toWithdraw() {
  api.openWin({
      name: 'withdraw',
      url: '../useracc/withdraw.html'
  });
}
//跳转到客户管理
function toCustomer() {
  api.openWin({
      name: 'customer',
      url: '../user/customer.html'
  });
}
//跳转到我的日程
function toSchedule() {

}

function toAboutus() {
  api.openWin({
      name: 'aboutus',
      url: '../public/aboutus.html'
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
