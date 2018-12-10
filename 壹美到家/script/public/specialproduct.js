apiready = function(){
      api.parseTapmode();
      bindSpecialProduct();

  }
  function bindSpecialProduct(){
      var pageParam = api.pageParam;
    var result=getSpecialProduct({sid:pageParam.sid});
    result.then(function(res){
      if(res.status==200){
        $.each(res.info, function(i, item){
           item['P_ImgUrl']=imageUrl+item['P_ImgUrl'];
        });
        var html=template('specialproduct_tmpl',{specialproduct:res.info})
        $('#specialproduct_div').html(html);
      }
    });
  }
  //点击二级分类跳转到单品详情
  function onProDetail(pid){
      api.openWin({
          name: 'ProDetail',
          url: './productdetail.html',
          pageParam:{
            pid:pid
          }
      });
  }
