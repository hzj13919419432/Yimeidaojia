/*head tab*/
apiready = function(){
    bindProductCat();
}

//绑定产品分类
function bindProductCat(){
  var result=getProductCat();
  result.then(function(res){
    console.log(JSON.stringify(res));
    if(res.status==200){
      var html=template('productcat_tmpl',{productcat:res.info})
      $('#tab').html(html);
      initTab();
    }
  });
}
function onBrand(pcid){
  console.log(pcid);
  var result=getProductBrand({pcid:pcid});
  result.then(function(res){
    console.log(JSON.stringify(res));
    if(res.status==200){
      $.each(res.info, function(i, item){
         item['S_Logo']=imageUrl+item['S_Logo'];
      });
      var html=template('productbrand_tmpl',{productbrand:res.info})
      $('#productbrand_div').html(html);
      initTab();
    }
  });
}
function initTab(){
  var tab = new auiTab({
      element:document.getElementById("tab"),
      index:1,
      repeatClick:false
  },function(ret){
  });
}
//点击二级分类跳转到单品详情
function onSpecial(){
  api.openWin({
      name: 'onSpecial',
      url: './special.html'
  });
}
//点击二级分类跳转到单品详情
function onSearch(){
    api.openWin({
        name: 'onSearch',
        url: './search.html'
    });
}
