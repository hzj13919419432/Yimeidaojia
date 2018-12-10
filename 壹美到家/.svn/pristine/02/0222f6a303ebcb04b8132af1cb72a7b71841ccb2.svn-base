
apiready = function(){
    api.parseTapmode();
    init();
}

function init(){
  initTab();
}

function initTab() {
  var index = api.pageParam.index;
  var tab = new auiTab({
      element:document.getElementById("tab"),
      index:index
  },function(ret){
      //console.log(ret);
  //console.log(ret.index);
      $('section').eq(ret.index-1).addClass('action');
      $('section').eq(ret.index-1).siblings('section').removeClass('action');
      loadList(ret.index);

  });
  loadList(index);
}

//点击二级分类跳转到单品详情
function onProDetail(){
    api.openWin({
        name: 'ProDetail',
        url: '../public/productdetail.html',
    });
}

function loadList(index){
  var data = {};
  data.uid = $api.getStorage('userid');
  switch (index) {
    case 1:
      loadFavStoreList(data);
      break;
    case 2:
      loadFavShopList(data);
      break;
    case 3:
      loadFavArtList(data);
      break;
    default:
      break;
  }

}
function loadFavStoreList(data) {
  var result = getFavStore(data);
  result.then(function (res) {
      console.log(JSON.stringify(res));
     if(res.status==200){
      var html=template('storeFavTmpl',{storelist:res.info})
      $('#storeFavList').html(html);
    }else{
      $('#shopFavList').html('');
      $('#artFavList').html('');
      $('#storeFavList').html('暂无收藏店铺');
    }
  });
}
function loadFavShopList(data) {
  var result = getFavProduct(data);
  result.then(function (res) {
   if(res.status==200){
      $.each(res.info,function (i,item) {
        res.info[i].P_ImgUrl = imageUrl+item.P_ImgUrl;
        var html=template('shopFavTmpl',{shoplist:res.info})
        $('#shopFavList').html(html);
      });
   }else{
     $('#storeFavList').html('');
     $('#artFavList').html('');
     $('#shopFavList').html('暂无收藏商品');
   }
  });
}
function loadFavArtList(data) {
  var result = getFavCourse(data);
  result.then(function (res) {
    console.log(JSON.stringify(res));
     if(res.status==200){
      var html=template('artFavTmpl',{artlist:res.info})
      $('#artFavList').html(html);
    }else{
      $('#shopFavList').html('');
      $('#artFavList').html('');
      $('#artFavList').html('暂无收藏商品');
    }
  });
}
