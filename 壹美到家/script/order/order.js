/*head tab*/
apiready = function(){
    api.parseTapmode();
    init();
}
function init(){
    onProDetail();
    initTab();
    //initOrderList('');
    initOList();
}
//点击二级分类跳转到单品详情
function onProDetail(){
  api.openWin({
      name: 'ProDetail',
      url: './productdetail.html'
  });
}
//点击切换到相应的内容
function initTab(){
    var pageParam = api.pageParam;
    var tab = new auiTab({
        element:document.getElementById("tab"),
        index:pageParam.index
    },function(ret){
      $('div.panel').eq(ret.index-1).addClass('panel_active');
      $('div.panel').eq(ret.index-1).siblings('div.panel').removeClass('panel_active');
        if(ret.index==1)initOrderList('');
        else if(ret.index==2)initOrderList('unpay');
        else if(ret.index==3)initOrderList('unSend');
        else if(ret.index==4)initOrderList('unRec');
        else if(ret.index==5)initOrderList('cmpd');
    });
}
function initOList() {
  var pageParam = api.pageParam;
  var index = pageParam.index;
  if(index==1)initOrderList('');
  else if(index==2)initOrderList('unpay');
  else if(index==3)initOrderList('unSend');
  else if(index==4)initOrderList('unRec');
  else if(index==5)initOrderList('cmpd');
}
//获取订单列表
function initOrderList(status){
  var uid=$api.getStorage('userid');
  var data={};
  data.uid=uid;
  data.orderstatus=status;
  var result=getUserOrder(data);
  result.then(function(res){
    if(res.status==200){
      $.each(res.info, function(i, item){
        var data=item.detail;
        $.each(data, function(i, subitem){
         subitem.P_ImgUrl=imageUrl+subitem.P_ImgUrl;
       });
      });
      // console.log(JSON.stringify(res));
      if(status==''){
        var html=template('order_all_tmpl',{orderlist:res.info})
        $('#order_all_div').html(html);
      }else if(status=='unpay'){
        var html=template('order_unpay_tmpl',{orderlist:res.info})
        $('#order_unpay_div').html(html);
      }else if(status=='unSend'){
        var html=template('order_unSend_tmpl',{orderlist:res.info})
        $('#order_unSend_div').html(html);
      }else if(status=='unRec'){
        var html=template('order_unRec_tmpl',{orderlist:res.info})
        $('#order_unRec_div').html(html);
      }else if(status=='cmpd'){
        var html=template('order_cmpd_tmpl',{orderlist:res.info})
        $('#order_cmpd_div').html(html);
      }
    }
  });
}

// 删除订单
function initdelOrder(e, oid){

  var result=delOrder({oid:oid});
  result.then(function(res){
    console.log(JSON.stringify(res));
    if(res.status==200){
      $(e).parent().parent().parent().remove();
      api.toast({
          msg: '订单删除成功',
          duration: 2000,
          location: 'bottom'
      });
    }else{
      api.toast({
          msg: '订单删除失败',
          duration: 2000,
          location: 'bottom'
      });
    }
})

}

function onOrderConfirm(pid,count) {
  //判断是否登录
  $userid=$api.getStorage('userid');
  if(!$userid){
    api.openWin({
        name: 'login',
        url: '../user/login.html',
    });
  }
  api.openWin({
      name: 'orderconfirm',
      url: '../public/orderconfirm.html',
      pageParam:{
        pid:pid,
        pcount:count
      }
  });
}
