/*
* @Author: Dell
* @Date:   2018-05-08 16:09:21
* @Last Modified by:   lvchanglu
* @Last Modified time: 2018-05-17 17:06:48
*/

//打开搜索页面
function opensearch(){
    api.openWin({
            name: 'search',
            url: '../search/search.html',
            pageParam: {
                name: 'search'
            }
        });
}
//打开门店详情页面
function stores_details(){
  api.openWin({
            name: 'stores_details',
            url: '../stores_details/stores_details.html',
            pageParam: {
                name: 'stores_details'
            }
        });
}
//打开商品详情页面
function to_commodity_details(){
  api.openWin({
    name:'to_commodity_details',
    url:'../commodity_details/commodity_details.html',
    pageParam:{
      name:'to_commodity_details'
    }
  })
}
//打开云支付页面
function  to_cloudLinkedPayment(){
    api.openWin({
    name:'cloudLinkedPayment',
    url:'../pay/cloudLinkedPayment.html',
  })
}
//打开管理店铺页面
function  to_managementStore(){
    api.openWin({
    name:'managementStore',
    url:'../managementStore/managementStore.html',
  })
}
//打开申请配送页面
function  to_dispatching_submit(){
    api.openWin({
    name:'dispatching_submit',
    url:'../dispatching/dispatching_submit.html',
  })
}
//打开配送抢单页面
function  to_distributionRobSingle(){
    api.openWin({
    name:'distributionRobSingle',
    url:'../distributionRobSingle/distributionRobSingle.html',
  })
}
//打开商家入驻页面
function  to_recruitment_info(){
    api.openWin({
    name:'recruitment_info',
    url:'../recruitment/recruitment_info.html',
  })
}
//打开配送入驻页面
function  to_dispatching_submit(){
    api.openWin({
    name:'dispatching_submit',
    url:'../dispatching/dispatching_submit.html',
  })
}
