/*head tab*/
apiready = function(){
    api.parseTapmode();
    init();
}
function init(){
    bindProduct();
    initPopup();
}
function bindProduct() {
  var pageParam = api.pageParam;
  var result=getProduct({pid:pageParam.pid});
  result.then(function(res){
    if(res.status==200){
      $.each(res.info.ProductImage, function(i, item){
         item['PI_ImgUrl']=imageUrl+item['PI_ImgUrl'];
         //item['P_DetailDesc']=
        //  list.push(item);
      });
      console.log(JSON.stringify(res));
      var html=template('product_tmpl',{product:res.info})
      $('#product_div').html(html);
      initSlide();
    }
  });
}
function initSlide(){
  var slide = new auiSlide({
      container:document.getElementById("aui-slide"),
      // "width":300,
      "height":260,
      "speed":300,
      "pageShow":true,
      "pageStyle":'dot',
      "loop":true,
      'dotPosition':'center',
      currentPage:currentFun
  })
  function currentFun(index) {
      console.log(index);
  }
}
//点击收藏跳转到关注
function onStoreFav(){
  api.openWin({
      name: 'StoreFav',
      url: '../user/storefavorite.html'
  });
}
//点击购物袋跳转到购物车
function onShoppCart(){
    api.openWin({
        name: 'onShoppCart',
        url: './shoppingcart.html'
    });
}
//点击客服跳转到关于我们
function onAboutus(){
    api.openWin({
        name: 'onAboutus',
        url: './aboutus.html'
    });
}
//点击立即购买跳转到确定购买
function onOrderCon(){
  var pageParam = api.pageParam;
  api.openWin({
      name: 'onOrderCon',
      url: './orderconfirm.html',
      pid:pageParam.pid
  });
}
function initPopup(){
    var popup = new auiPopup();
    function showPopup(){
        popup.show(document.getElementById("bottom-right"))
    }
}
