/*
* @Author: nickhaung
* @Date:   2018-05-18 09:29:56
* @Last Modified by:   nickhaung
* @Last Modified time: 2018-06-14 16:36:28
*/
function userPost(url, data) {
    var promise= new Promise((res, rej)=> {
        api.ajax({
            url: url,
            method: 'post',
            cache:false,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
            data: {
                values: data
            }
        }, function(ret, err) {
            if (ret) {
                res(ret);
            } else {
              	rej(err);
                alert(JSON.stringify(err));
            }
        });
    });
    return promise;
}

function ajaxpost(url,data){
	$.ajax({
		type:"post",
		url:url,
		data:data,
		dataType:"json",
		success:function(res){

		}
	})
}
var imageUrl ='http://192.168.2.102/ymdj/Public/upload/';
var baseUrl ='http://192.168.2.102/ymdj/App/';

// var imageUrl ='http://hzlifan.cn/Public/upload/';
// var baseUrl ='http://hzlifan.cn/App/';

//开始控制器home
//查询行业
function getIndustry(data){
  var url = baseUrl + 'Home/GetIndustry';
  return userPost(url,data);
}
//二级专场入口
function getSecIndustry(data){
  var url = baseUrl + 'Home/GetSecIndustry';
  return userPost(url,data);
}

//查询广告
function getAdvert(data){
  var url = baseUrl + 'Home/GetAdvert';
  return userPost(url,data);
}
//查询专场 stcode:编程代码
function getSpecial(data){
  var url = baseUrl + 'Home/GetSpecial';
  return userPost(url,data);
}
//查询秒杀
function getSeckillTime(data){
  var url = baseUrl + 'Home/GetSeckillTime';
  return userPost(url,data);
}
//查询准点秒杀商品
function getSeckillProduct(data){
  var url = baseUrl + 'Home/GetSeckillProduct';
  return userPost(url,data);
}
//查询品牌馆
function getBandHall(data){
  var url = baseUrl + 'Home/GetBandHall';
  return userPost(url,data);
}
//查询新品
function getNewProduct(data){
  var url = baseUrl + 'Home/GetNewProduct';
  return userPost(url,data);
}
//查询国家馆
//cid：国家Id
function getCountryHall(data){
  var url = baseUrl + 'Home/GetCountryHall';
  return userPost(url,data);
}
//查询品牌详情,展示产品,sbid:品牌Id
function getStoreBrand(data){
  var url = baseUrl + 'Home/GetStoreBrand';
  return userPost(url,data);
}
//结束控制器home


//注册
function register(data){
	var url = baseUrl + 'User/Register';
  return userPost(url,data);
}
//账号密码登录
function login_sms(data){
	var url = baseUrl + 'User/LoginSMS';
  return userPost(url,data);
}
//获取验证码
function sendCode(data){
	var url = baseUrl + 'User/GetVCode';
  return userPost(url, data);
}
//检测是否登录过了
function check_session(data){
	var url = baseUrl + 'User/CheckSession';
  return userPost(url,data);
}
//用户Id: uid
function get_userinfo(data){
	var url = baseUrl + 'User/GetUserInfo';
  return userPost(url,data);
}

//修改用户昵称demo
//data.CU_Nickname='Nickhuang';
//data.CU_Id=1;
// var strData=JSON.stringify(data);
//var result=update_userinfo({data:strData});
////更新用户信息
function update_userinfo(data){
	var url = baseUrl + 'User/UpdateUserInfo';
  return userPost(url,data);
}
//用户Id:uid
//查询消息
function getMessage(data){
	var url = baseUrl + 'User/GetMessage';
  return userPost(url,data);
}
//mid:消息Id
//阅读消息
function setMsgIsRead(data){
	var url = baseUrl + 'User/SetMsgIsRead';
  return userPost(url,data);
}
//用户Id:uid
//插叙未读消息数
function getNoReadMsgCount(data){
	var url = baseUrl + 'User/GetNoReadMsgCount';
  return userPost(url,data);
}
//用户Id:uid
//课程Id:cid
//收藏课
function addFavCourse(data){
	var url = baseUrl + 'User/AddFavCourse';
  return userPost(url,data);
}
//用户Id:uid
//查询收藏课程
function getFavCourse(data){
	var url = baseUrl + 'User/GetFavCourse';
  return userPost(url,data);
}
//用户Id:uid
//店铺Id:sid
//收藏课
function addFavStore(data){
	var url = baseUrl + 'User/AddFavStore';
  return userPost(url,data);
}
//用户Id:uid
//查询收藏店铺
function getFavStore(data){
	var url = baseUrl + 'User/GetFavStore';
  return userPost(url,data);
}
//用户Id:uid
//产品Id:pid
//收藏产品
function addFavProduct(data){
	var url = baseUrl + 'User/AddFavProduct';
  return userPost(url,data);
}
//用户Id:uid
//查询收藏产品
function getFavProduct(data){
	var url = baseUrl + 'User/GetFavProduct';
  return userPost(url,data);
}

//用户Id:uid
//用户是否加入达人
function userIsJoin(data){
	var url = baseUrl + 'User/UserIsJoin';
  return userPost(url,data);
}


//获取用户收益
function get_userprofit(data){
	var url = baseUrl + 'Acc/GetUserProfit';
  return userPost(url,data);
}

//开始产品接口
//查询产品
function getProduct(data){
	var url = baseUrl + 'Product/GetProduct';
  return userPost(url,data);
}
//查询专场产品
function getSpecialProduct(data){
	var url = baseUrl + 'Product/GetSpecialProduct';
  return userPost(url,data);
}
//查询专场品牌馆
function getSpecialStore(data){
	var url = baseUrl + 'Product/GetSpecialStore';
  return userPost(url,data);
}
//查询品牌分类
function getProductCat(data){
	var url = baseUrl + 'Product/GetProductCat';
  return userPost(url,data);
}
//查询品牌
function getProductBrand(data){
	var url = baseUrl + 'Product/GetProductBrand';
  return userPost(url,data);
}
//添加购物车
//用户Id:CU_Id,商品Id:P_Id,商品数量:SC_Count
function addShoppingCart(data){
	var url = baseUrl + 'Product/AddShoppingCart';
  return userPost(url,data);
}
//查询购物车
//用户Id:uid
function getShoppingCart(data){
	var url = baseUrl + 'Product/GetShoppingCart';
  return userPost(url,data);
}




//开始店铺接口
function getSpecialBrand(data){
	var url = baseUrl + 'Store/GetSpecialBrand';
  return userPost(url,data);
}
//查询店铺详情
function getStoreDetail(data){
	var url = baseUrl + 'Store/GetStoreDetail';
  return userPost(url,data);
}


// 订单
//创建订单
function crtOrder(data){
  var url =baseUrl +'Order/CrtOrder';
  return userPost(url,data);
}
//支付订单
function payOrder(data){
  var url =baseUrl +'Order/PayOrder';
  return userPost(url,data);
}
// 支付宝支付信息
function alipay(data){
  var url =baseUrl +'Order/Alipay';
  return userPost(url,data);
}
// 支付宝支付信息
function wepay(data){
  var url =baseUrl +'Order/WePay';
  return userPost(url,data);
}
//查询个人订单
//用户uid
//订单状态：orderstatus:('':全部,'unpay'：待支付,'unSend':待发货,'unRec':待接收,'cmpd':已完成)
function getUserOrder(data){
	var url = baseUrl + 'Order/GetUserOrder';
  return userPost(url,data);
}
//取消订单
//oid:订单Id
function cancelOrder(data){
	var url = baseUrl + 'Order/CancelOrder';
  return userPost(url,data);
}
//确认收货
//oid:订单Id
function confirmOrder(data){
	var url = baseUrl + 'Order/ConfirmOrder';
  return userPost(url,data);
}
//删除订单
//oid:订单Id
function delOrder(data){
	var url = baseUrl + 'Order/DelOrder';
  return userPost(url,data);
}

///添加地址
function addAddress(data){
  var url = baseUrl + 'Address/AddAddress';
  return userPost(url,data);
}
//渲染地址列表
function addressList(data){
  var url = baseUrl + 'Address/GetAddress';
  return userPost(url,data);
}
//设置默认地址
function setDefaultAddress(data){
 var url = baseUrl + 'Address/SetDefault';
 return userPost(url,data);
}
//修改地址Address/edit_address
function editAddress(data){
 var url = baseUrl + 'Address/EditAddress';
 return userPost(url,data);
}
//删除地址
function deleteAddress(data){
  var url = baseUrl + 'Address/DelAddress';
  return userPost(url,data);
}
//查询默认地址
function getDefaultAddress(data){
 var url = baseUrl + 'Address/GetDefaultAddress';
 return userPost(url,data);
}

//壹美社区 话题分类
function getTopicCat(data){
  var url = baseUrl + 'Topic/GetTopicCat';
  return userPost(url,data);
}
//壹美社区
function getTopic(data){
  var url = baseUrl + 'Topic/GetTopic';
  return userPost(url,data);
}
//查询文章
//atcode:程序编码，例如：rmzx
function getArticle(data){
  var url = baseUrl + 'Topic/GetArticle';
  return userPost(url,data);
}
//查询文章
//alid:文章Id
function getContent(data){
  var url = baseUrl + 'Topic/GetContent';
  return userPost(url,data);
}
