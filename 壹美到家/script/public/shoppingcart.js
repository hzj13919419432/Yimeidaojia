
	apiready = function(){
        api.parseTapmode();
				init();
    }


function init() {
	onCheckbox();
}
	var dialog = new auiDialog();
	var toast = new auiToast({});

	$(function(){
	  $('input.del-btn').on('click',delShopItem);
		$('#selectAll').on('click',selectAll);
	});

	function delShopItem(){
		var del_obj = this;
		dialog.alert({
            title:"弹出提示",
            msg:'您确认要删除吗？',
            buttons:['取消','确定']
        },function(ret){
            if(ret.buttonIndex==2){
            	//ajax del from server

      	var parents = $(del_obj).parentsUntil('section');
				$(parents[parents.length-1]).remove();
				var shopItemCount = $('section>div.shop-item').length;
				if(shopItemCount == 0){
					$('#addUp').hide();
				}
        toast.success({
		     	title:'删除成功',
		    	duration:2000

		      });
            }
        });
	}

// 全选
	function selectAll(){
		if($(this).is(':checked')){
				$('section input[type=checkbox]').prop('checked',true);
		}else{
				$('section input[type=checkbox]').prop('checked',false);
		}
	}
function onCheckbox() {
	$('section input[type=checkbox]').on('click',function () {
		noselectAll();
	});
}
function noselectAll(){
		var allCheckbox =  $('section input[type=checkbox]');
		var inputCount=allCheckbox.length;
		var notCheckCount =0
		$.each(allCheckbox,function (index,item) {
			if(!$(item).is(':checked')){
				notCheckCount++;
			}
		});
		notCheckCount?$('#selectAll').prop('checked',false):$('#selectAll').prop('checked',true);

}
function delShoppingcartItem(ele,shoppingcartId) {
	var delStatus =false;
	if(delStatus){
		$(ele).parent().parent().remove();
	}else{
		api.toast({
		    msg: '删除失败',
		    duration: 2000,
		    location: 'bottom'
		});
	}
}
