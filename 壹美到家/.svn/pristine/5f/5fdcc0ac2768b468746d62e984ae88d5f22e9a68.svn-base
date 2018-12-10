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

function onStoreDetail(sid){
  api.openWin({
      name: 'special_product',
      url: './special_product.html',
      pageParam:{
        sid:sid
      }
  });
}
