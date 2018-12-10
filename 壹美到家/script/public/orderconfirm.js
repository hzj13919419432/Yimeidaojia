/*head tab*/

apiready = function(){
    api.parseTapmode();
    waitLoadPage();
    initListener();
    bindAdress();
    bindProduct();
}
function waitLoadPage() {
  api.showProgress({
    style: 'default',
    animationType: 'fade',
    title: '正在努力加载',
    text: '请稍候',
    modal: true
  });
}
//初始化监听窗口
function initListener(){
  api.addEventListener({
      name:'viewdisappear'
  },function(){
      api.closeWin();
  });
  $userid=$api.getStorage('userid');
  if(!$userid){
    api.openWin({
        name: 'login',
        url: '../user/login.html',
    });
    return;
  }
}
var defaultAddr={};
function bindAdress(){
  var uid=  $api.getStorage('userid');
  var result=getDefaultAddress({uid:uid});
  result.then(function(res){
      if(res.status==200){
        var html=template('address_tmpl',{address:res.info})
        $('#address_div').html(html);
        defaultAddr.A_Province=res.info.A_Province;
        defaultAddr.A_City=res.info.A_City;
        defaultAddr.A_Area=res.info.A_Area;
        defaultAddr.A_Addr=res.info.A_Addr;
        defaultAddr.A_Mobile=res.info.A_Tel;
        defaultAddr.A_Name=res.info.A_Name;
      }else{
        var html=template('address_tmpl',{address:null})
        $('#address_div').html(html);
      }
      api.hideProgress();
  });
}
var product={};
function bindProduct(){
  var pid=  api.pageParam.pid;
  var result=getProduct({pid:pid});
  result.then(function(res){
      if(res.status==200){
        res.info.P_ImgUrl=imageUrl+  res.info.P_ImgUrl;
        var html=template('product_tmpl',{product:res.info})
        $('#product_div').html(html);
        product=res.info;

      }
      api.hideProgress();
  });
}
function selectPayWay(){
  var data=[{text:'支付宝',value:1}
  // ,{text:'微信支付',value:2}
  ]
  openSelector('支付方式',data,function(ret){
    console.log(JSON.stringify(ret));
    if(ret.length<=0)return;
    $('#spanPayWay').text(ret[0].text);
    $('#txtPayWay').val(ret[0].value);
  },130);
}
//点击二级分类跳转到新增地址
function onAddRess(){
    api.openWin({
        name: 'AddRess',
        url: '../user/addresslist.html'
    });
}
function setAlipay(data){
  var result=alipay({
      'pre_price':0.01,//res.detail.OD_Price,
      'body':data.detail.P_Name,
      'subject':data.detail.P_Name,
      'tradeno':data.O_Num
  });
  result.then(function(res){
      if (res.status==200) {
          var aliPayPlus = api.require('aliPayPlus');
          aliPayPlus.payOrder({
              orderInfo: res.msg
          }, function(ret, err) {
              if(ret.code==9000){
                var result=payOrder({oid:data.O_Id});
                result.then(function(subres){
                  api.openWin({
                      name: 'order',
                      url: '../order/order.html',
                      pageParam:{
                        index:1
                      }
                  });
                });
              }else{
                api.openWin({
                    name: 'order',
                    url: '../order/order.html',
                    pageParam:{
                      index:2
                    }
                });
              }
          });
      }
  });
}
function onConfirm(){
  if(!defaultAddr.A_Area){
    api.toast({
        msg: '请先添加地址',
        duration: 2000,
        location: 'bottom'
    });
    return;
  }
  if(!product.P_Id){
    api.toast({
        msg: '请先添加商品',
        duration: 2000,
        location: 'bottom'
    });
    return;
  }
  api.showProgress({
    style: 'default',
    animationType: 'fade',
    title: '正在支付',
    text: '请稍候',
    modal: true
  });
  var data={};
  var pcount=api.pageParam.pcount;
  var uid=  $api.getStorage('userid');
  data.S_Id=154;
  data.CU_Id=uid;
  data.O_TotalPrice=(product.P_Price*pcount);
  data.O_Province=defaultAddr.A_Province;
  data.O_City=defaultAddr.A_City;
  data.O_Area=defaultAddr.A_Area;
  data.O_Addr=defaultAddr.A_Addr;
  data.O_Consignee=defaultAddr.A_Name;
  data.O_Tel=defaultAddr.A_Mobile;
  var detail={};
  detail.P_Id=product.P_Id;
  detail.P_Name=product.P_Name;
  detail.S_Id=154;
  detail.CU_Id=uid;
  detail.OD_Price=uid;
  detail.OD_Count=pcount;
  data.detail=detail;



  var strdata = JSON.stringify(data);
  var result=crtOrder({data:strdata});
  result.then(function(res){
      api.hideProgress();
      setAlipay(res.info);
  });
}
