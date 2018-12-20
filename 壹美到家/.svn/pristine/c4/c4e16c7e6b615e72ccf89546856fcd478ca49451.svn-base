/*head tab*/
apiready = function(){
      api.parseTapmode();
      bindSpecialBrand();
  }
  function bindSpecialBrand(){
    var result=getSpecialBrand();
    result.then(function(res){
      if(res.status==200){
        $.each(res.info, function(i, item){
           item['SB_Image']=imageUrl+item['SB_Image'];
          //  list.push(item);
        });
        var html=template('specialbrand_tmpl',{specialbrand:res.info})
        $('#specialbrand_div').html(html);
      }
    });
  }
//点击二级分类跳转到单品详情
function onProDetail(){
    api.openWin({
        name: 'ProDetail',
        url: './productdetail.html'
    });
}
function onStoreDetail(){
  api.openWin({
      name: 'storedetail',
      url: './storedetail.html'
  });
}
