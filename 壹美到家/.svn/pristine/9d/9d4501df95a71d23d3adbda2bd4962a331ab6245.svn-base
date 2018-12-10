/*head tab*/
apiready = function(){
    api.parseTapmode();
    bindStoreDetail();
}
function bindStoreDetail(){
  var result=getStoreDetail();
  result.then(function(res){
    if(res.status==200){
      res.info['S_CoverPic']=imageUrl+res.info['S_CoverPic'];
      $.each(res.info.productdetail, function(i, item){
         item['P_ImgUrl']=imageUrl+item['P_ImgUrl'];
      });
      var html=template('storedetail_tmpl',{detail:res.info})
      $('#storedetail_div').html(html);
    }
  });
}
//点击二级分类跳转到单品详情
function onSearchProd(pid){
    api.openWin({
        name: 'productdetail',
        url: './productdetail.html',
        pageParam:{
          pid:pid
        }
    });
}
//点击二级分类跳转到单品详情
