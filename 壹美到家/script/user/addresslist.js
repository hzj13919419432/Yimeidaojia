 var dialog = new auiDialog();
    var data = [];
    apiready = function() {
      api.addEventListener({
          name: 'reload'
      }, function(ret, err) {
          init();
      });
        init();
    };

    function init(type) {
      if(!type){
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: '努力加载',
            text: '',
            modal: false
        });
      }
      var result = addressList({
          uid: $api.getStorage('userid')
      });
      result.then(function(res) {
          if (res.status === 200) {
              var tmpl = doT.template($('#tmpl').text());
              $('#addressList').html(tmpl(res.info));
              data = res.info;
          }
          api.refreshHeaderLoadDone();
          api.hideProgress();
      });
    }
    function addAddr() {
      api.openWin({
          name: 'updateaddress',
          url: './addressupdate.html',
          pageParam: {
            type: 1
          }
      });
    }
    //编辑地址
    function editAddr(id,index) {
      console.log(JSON.stringify(data[index]));
        api.openWin({
            name: 'updateaddress',
            url: './addressupdate.html',
            pageParam: {
                type: 2,
                index: index,
                id:id,
                data: JSON.stringify(data[index])
            }
        });
    }
    //删除地址
    function deleteAddr(index) {
      var info = {};
      info.A_Id = index;
      info.uid = $api.getStorage('userid');
      dialog.alert({
          title:"提示",
          msg:'确定要删除？',
          buttons:['取消','确定']
      },function(ret){
          if(ret.buttonIndex === 2){
            var result = deleteAddress(info);
            result.then(function(res){
              if(res.status === 200) {
                api.toast({
                    msg: '删除成功',
                    duration: 1200,
                    location: 'middle'
                });
                init();
              }
            })
          }
      })
    }
//设置默认地址
    function setDefaultAddr(id,index) {
      api.showProgress({
          style: 'default',
          animationType: 'fade',
          title: '设置中',
          text: '',
          modal: true
      });
      var result = setDefaultAddress({uid:$api.getStorage('userid'),A_Id:id});
      result.then(function(res){
        if(res.status === 200){
          api.hideProgress();
          api.toast({
              msg: '设置成功',
              duration: 1500,
              location: 'middle'
          });
          $('#addressList .aui-card-list').find('.moren.aui-checked').removeClass('aui-checked');
          $('#addressList .aui-card-list').eq(index).find('.moren').addClass('aui-checked');
        }
      });
    }
function back(){
  api.closeWin()
  if (api.pageParam.ordercomfirm === true) {
   api.sendEvent({name: 'ordercomfirm_initAddr'});
  }
}
