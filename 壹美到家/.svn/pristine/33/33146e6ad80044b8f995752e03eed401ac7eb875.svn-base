//定时器
var SEARCH_ORDER=false;
function initMonitor(){
  var result=check_isstore({uid:$api.getStorage('userid')})
	result.then(function(res){
		if (res.status==200 && res.info!=null) {
      if(res.info.CU_DeliverStatus>0){
          setInterval(function(){
            searchDeliverOrder();
          },3000);
        }
	   }
	})

}

//查询配送订单
function searchDeliverOrder(){
  var result=get_dispatch_order({uid:$api.getStorage('userid')});
  result.then(function(res){
  //  console.log(JSON.stringify(res));
   if (res.status==200 && res.info!=null) {
      showAlert(res.info.DO_Id);
    }
  });

}
function showAlert(doid){
  var dialogBox = api.require('dialogBox');
    dialogBox.alert({
        texts: {
            title: '抢单提示',
            content: '您收到一个待抢订单,是否需要进行抢单？',
            leftBtnTitle: '否',
            rightBtnTitle: '是'
        },
        styles: {
            bg: '#fff',
            w: 300,
            corner:2,
            title: {
                marginT: 20,
                icon: 'widget://res/gou.png',
                iconSize: 40,
                titleSize: 14,
                titleColor: '#000'
            },
            content: {
                color: '#000',
                size: 14
            },
            left: {
                marginB: 7,
                marginL: 20,
                w: 130,
                h: 35,
                corner: 2,
                bg: '#f4f4f4',
                color: '#000',
                size: 12
            },
            right: {
                marginB: 7,
                marginL: 10,
                w: 130,
                h: 35,
                corner: 2,
                color: '#000',
                bg: '#f4f4f4',
                size: 12
            }
        }
    }, function(ret) {
        if (ret.eventType == 'right') {
          var result=accept_dispatchorder({doid:doid});
          result.then(function(res){
            api.openWin({
                name: 'orderuser',
                url: './html/order/orderuser.html',
              });
          });
        }
        var dialogBox = api.require('dialogBox');
        dialogBox.close({
            dialogName: 'alert'
        });
    });
}
