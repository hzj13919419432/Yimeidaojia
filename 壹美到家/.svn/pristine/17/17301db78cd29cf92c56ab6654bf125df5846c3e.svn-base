apiready = function () {
    init();
  }
  function init() {
    api.parseTapmode();
    // fixHeaderbar();
    // inittab();
    bindTopic();
  }
  //人气推荐
function bindTopic(){
    var result=getSpecial({stcode:'rqtj'});
    result.then(function(res){
       if(res.status==200){
         var list=[];
         $.each(res.info, function(i, item){
            item['ST_Image']=imageUrl+item['ST_Image'];
            item['P_ImgUrl']=imageUrl+item['P_ImgUrl'];
            list.push(item);
        });
        console.log(JSON.stringify(list));
        var html=template('secInd_tmpl',{secInd:list})
        $('#secInd_div').html(html);
       }
    });
}
