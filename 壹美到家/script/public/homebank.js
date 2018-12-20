/*head tab*/
apiready = function(){
      api.parseTapmode();
      init();
  }
function init(){
  //  $api.clearStorage();
   //绑定行业
   bindInd();
   //绑定二级行业
   bindSecInd();
   //绑定广告
   bindAdvert();
   //专场
   bindSpecial();
   //绑定秒杀时间点
   bindSeckillTime();
   //绑定秒杀商品
   bindSeckillProduct();
   //绑定选项卡
    bindTab();
}
//绑定行业
function bindInd(){
  var result=getIndustry();
  result.then(function(res){
    if(res.status==200){
      var html=template('tab_tmpl',{Industry:res.info})
      $('#tab').html(html);
    }
  });
}
//绑定专场入口
function bindSecInd(){
  var result=getSecIndustry();
  result.then(function(res){
    if(res.status==200){
      var list=[];
      $.each(res.info, function(i, item){
         item['IN_Image']=imageUrl+item['IN_Image'];
         list.push(item);
      });
      var html=template('secInd_tmpl',{secIndustry:list})
      $('#secInd_div').html(html);
    }
  });
}

//横幅广告
function bindAdvert(){
  var result=getAdvert();
  result.then(function(res){
    // console.log(JSON.stringify(res));
    if(res.status==200){
      var banner=[];
      var hdad=[];
      var ztad=[];
      $.each(res.info, function(i, item){
         if(item['AP_Name']=='sylb'){
           banner.push(item);
         }else if (item['AP_Name']=='syhd') {
           hdad.push(item);
         }else if (item['AP_Name']=='syzcdt'||item['AP_Name']=='syzcxt') {
            ztad.push(item);
         }
         item['AD_Image']=imageUrl+item['AD_Image'];
      });
      //轮播
      var banner_html=template('banner_tmpl',{banner:banner})
      $('#banner_div').html(banner_html);
      //活动广告
      var hdad_html=template('hdad_tmpl',{hdad:hdad})
      $('#hdad_div').html(hdad_html);
      //专题广告
      var ztad_html=template('ztad_tmpl',{ztad:ztad})
      $('#ztad_div').html(ztad_html);
      initSlide();
    }
  });
}
//查询专场
function bindSpecial(){
  var result=getSpecial();
  result.then(function(res){
    if(res.status==200){
      var html=template('cardList_tmpl',{special:res.info})
      $('#cardList').html(html);
    }
  });
}
//查询秒杀时间点
function bindSeckillTime(stid){
  var result=getSeckillTime({stid:stid});
  result.then(function(res){
    // console.log(JSON.stringify(res));
    if(res.status==200){
      var html=template('secKilltime_tmpl',{SeckillTime:res.info})
      $('#secKilltime_div').html(html);
    }
  });
}
//查询秒杀商品
function bindSeckillProduct(){
  var result=getSeckillProduct();
  result.then(function(res){
     //console.log(JSON.stringify(res));
    if(res.status==200){
      $.each(res.info, function(i, item){
         item['SP_Image']=imageUrl+item['SP_Image'];
      });
      var html=template('skProduct_tmpl',{skProduct:res.info})
      $('#skProduct_div').html(html);
    }
  });
}
//首页行业切换
function bindTab(){
    var tab = new auiTab({
        element:document.getElementById("tab"),
    },function(ret){

  });
}
function initSlide(){
  /*header slide*/
  var headSlideBox = document.getElementById("head-slide");
  var headSlideBoxW = headSlideBox.width;
  var headSlideBoxH =headSlideBox.height;
  var slide3 = new auiSlide({
        container:headSlideBox,
        "width":headSlideBoxW,
        "height":headSlideBoxH,
        "speed":500,
        "autoPlay": 3000, //自动播放
        "loop":true,
        "pageShow":true,
        "pageStyle":'dot',
        'dotPosition':'center'
    });
}
//点击二级分类跳转专场
function onSecIndu(url){
  if(!url)return;
  api.openWin({
      name: 'special',
      url: url
  });
}
function onSeckillProduct(pid,spid){
  api.openWin({
      name: 'productdetail',
      url: './productdetail.html',
      pageParam:{
        pid:pid,
        spid:spid
      }
  });
}
function onSpecialProduct(sid){
  api.openWin({
      name: 'special_product',
      url: './special_product.html',
      pageParam:{
        sid:sid
      }
  });
}
//点击右上角消息跳转到消息
function onMessAge(){
  api.openWin({
      name: 'MessAge',
      url: '../user/message.html'
  });
}
