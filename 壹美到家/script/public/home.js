/*head tab*/
apiready = function(){
  api.parseTapmode();
  init();
}
function init(){
  //绑定行业
  // bindInd();
  loadStdetail();
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
//点击导航栏内容跳转到限时特惠页面
function onTimeSpecial(){
  api.openWin({
      name: 'TimeSpecial',
      url: './timespecial.html'
  });
}
//点击更多品牌跳转到品牌馆页面
function onBandHall(){
  api.openWin({
      name: 'BandHall',
      url: './bandhall.html'
  });
}
//点击更多跳转到人气推荐
function onProductRecmd(){
  api.openWin({
      name: 'ProductRecmd',
      url: './productrecmd.html'
  });
}
//点击右上角消息跳转到消息
function onMessAge(){
  api.openWin({
      name: 'MessAge',
      url: '../user/message.html'
  });
}
//点击头部中间输入框跳转到搜索页面
function onSearch(){
  api.openWin({
      name: 'Search',
      url: './search.html'
  });
}
//点击成为达人跳转到达人页面
function onSpecialDr(){
  api.openWin({
      name: 'SpecialDr',
      url: './special_dr.html'
  });
}
function onEMcollege() {
  api.openWin({
      name: 'emcollege',
      url: '../yischool/emcollege.html'
  });
}
function toHotarticle() {
  api.openWin({
      name: 'yishow',
      url: '../yishow/yishow.html'
  });
}
function toAround() {
  api.openWin({
      name: 'storedetail',
      url: '../public/storedetail.html'
  });
}
var $wrap = $("ul.move li");
$wrap.on("onmousemove",function(e){
    e.preventDefault();
  	var currount_X = ev.offsetX;
  	var currount_Y = ev.offsetY;
  	console.log("x:"+ currount_X +" y:"+ currount_Y);
  	obj.style.top = currount_Y  + 'px';
  	obj.style.left = currount_X + 'px';
});
function loadStdetail() {
  var result =  getSpecial({stcode:'home'})
  result.then(function (res) {
    // console.log(JSON.stringify(res));
    if(res.status == 200){
      $.each(res.info,function(index,item) {
        switch (item.ST_Code) {
          case 'hmrmzx':
            bindHmrmzx(item);
            break;
          case 'hmrqtj':
            bindHmrqtj(item);
            break;
          case 'hmrmpp':
            bindHmrmpp(item);
            break;
          case 'hmcnxh':
            bindHmcnxh(item);
            break;
          default:
            break;
        }
      })
    }
  })
}

function bindHmrmzx(res) {
  if(res.special.length){
    $.each(res.special,function(index,item) {
      res.special[index].P_ImgUrl = imageUrl + item.P_ImgUrl;
    });
    var html = template('hmrmzx_tmpl',{hmrmzx_info:res.special});
    $('#hmrmzx_box').html(html);
  }else{
    //暂无热门资讯信息
  }
}
function bindHmrqtj(res) {
  if(res.special.length){
    $.each(res.special,function(index,item) {
      res.special[index].P_ImgUrl = imageUrl + item.P_ImgUrl;
    });
    var html = template('hmrqtj_tmpl',{hmrqtj_info:res.special});
    $('#hmrqtj_box').html(html);
    var _w = $($('#hmcnxh_box .texts')[0]).width();
    console.log(_w);
  }else{
    //暂无人气推荐信息
  }
}
function bindHmrmpp(res) {
  if(res.special.length){
    $.each(res.special,function(index,item) {
      res.special[index].P_ImgUrl = imageUrl + item.P_ImgUrl;
      // res.special[index].SL_Image = imageUrl + item.SL_Image;
      $.each(item.storebrand,function (index2,item2) {
        res.special[index].storebrand[index2].P_ImgUrl = imageUrl+ item2.P_ImgUrl;
      });
    });
    var html = template('hmrmpp_tmpl',{hmrmpp_info:res.special});
    $('#hmrmpp_box').html(html);
  }else{
    //暂无热门品牌信息
  }
}
function bindHmcnxh(res) {
  if(res.special.length){
    $.each(res.special,function(index,item) {
      res.special[index].P_ImgUrl = imageUrl + item.P_ImgUrl;
    });
    var html = template('hmcnxh_tmpl',{hmcnxh_info:res.special});
    $('#hmcnxh_box').html(html);
  }else{
    //暂无猜你喜欢信息
  }
}

var slide = new auiSlide({
    container:document.getElementById("aui-slide"),
    // "width":300,
    "height":375,
    "speed":300,
    "pageShow":true,
    "pageStyle":'dot',
    "loop":true,
    'dotPosition':'center',
    currentPage:currentFun
})

function currentFun(index) {
  /*  console.log(index); */
}
var slide3 = new auiSlide({
container:document.getElementById("aui-slide3"),
// "width":300,
"height":240,
"speed":500,
"autoPlay": 3000, //自动播放
"loop":true,
"pageShow":true,
"pageStyle":'line',
'dotPosition':'center'
})
