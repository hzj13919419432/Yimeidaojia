/*head tab*/
apiready = function(){
    init();
}
function init() {
  api.parseTapmode();
  loadData();
}
//点击导航栏内容跳转到限时特惠页面
function onStoBrand(c_code){
  var result = getBandHall();
  result.then(function (res) {
    if(res.status ==200){
      $.each(res.info,function (index,item) {
        if(item.C_Code == c_code){
          api.openWin({
              name: 'StoBrand',
              url: './storebrand.html',
              pageParam:{
                cid:item.C_Id
              }
          });
        }
      })
    }
  });
}
function loadData() {
  loadCountry();
  loadNproducts();
  loadCountryPlist();
}
function loadCountry() {
  var result = getBandHall();
  result.then(function (res) {
    if(res.status ==200){
      console.log(JSON.stringify(res));
      $api.setStorage('bandHall', res.info);
      var html=template('country_tmpl',{country_list:res.info})
      $('#country_box').html(html);
    }
  });
}
function loadNproducts() {
  var result = getNewProduct();
  result.then(function (res) {
    console.log(JSON.stringify(res));
  });
}
function loadCountryPlist() {
  var result = getBandHall();
  result.then(function(res) {
    $.each(res.info,function (index,item) {
      switch (item.C_Code) {
        case 'cn':
          bindCountryP('cn',item.bandhall);
          break;
        case 'ep':
          bindCountryP('ep',item.bandhall);
          break;
        case 'am':
          bindCountryP('am',item.bandhall);
          break;
        case 'kr':
          bindCountryP('kr',item.bandhall);
          break;
        case 'jp':
          bindCountryP('jp',item.bandhall);
          break;
        case 'at':
          bindCountryP('at',item.bandhall);
          break;
        default:
          break;
      }
    })
  });
}

function bindCountryP(country,item) {
  if(item.length){
    $.each(item,function (index2,item2) {
      if(item2.BH_IsHot){
        $('#'+country+'Hotsale').append('<div class="aui-row"><div class="aui-col-xs-6"><div>中国热售</div><div>'+item2.SB_Name+'</div></div><div class="aui-col-xs-6"><img src="../../image/public/bandhall/54dd651fNf16722d9.jpg" alt=""></div></div>');
      }else{
        $('#'+country+'Plist').append('<div class="aui-col-xs-4"><div><img src="../../image/public/bandhall/54dd651fNf16722d9.jpg" alt=""></div><div class="aui-grid-label">'+item2.SB_Name+'</div></div>');
      }
    });
  }else{
    $('#'+country+'CH').remove();
  }
}
