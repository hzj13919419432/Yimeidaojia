var data = [];
	apiready = function() {
		init();
	};

function init() {
      //判断是否是编辑
      if (api.pageParam.type === 2) {
      	$('#header .aui-title').text('编辑地址');
      	var item = JSON.parse(api.pageParam.data);
      	$('#txtName').val(item.A_Name);
      	$('#txtTel').val(item.A_Tel);
      	$('#txtDetail').val(item.A_Addr);
      	$('#txtArea').text(item.A_Province + " " + item.A_City + " " + item.A_Area);
				data={
					province:item.A_Province,
					city:item.A_City,
					area:item.A_Area
				}
				$api.setStorage('addr_data',data);
      }
  }
	function onSelectAddress(){
    citySelector(function(ret){
			$('#txtArea').text(ret.level1 + ' ' + ret.level2 + ' ' + ret.level3);
			data={
				province:ret.level1,
				city:ret.level2,
				area:ret.level3
			}
			$api.setStorage('addr_data',data);
		});
	}
	function saveAddress() {
		var type = api.pageParam.type || 1;
	    //验证输入是否合法
	    var name = $('#txtName').val().trim();
	    var tel = $('#txtTel').val().trim();
	    var detail = $('#txtDetail').val().trim();
	    if (name.length < 1) {
				api.toast({msg: '收货人没有填写',duration: 2000,	location: 'bottom'});
	    	return;
	    }
	    if (tel.length === 11 && !/^1[0-9]{10}/.test(tel)) {
				api.toast({msg: '联系电话格式不对',duration: 2000,	location: 'bottom'});
	    	return;
	    } else if (tel.length < 11) {
	    	api.toast({msg: '联系电话长度不正确',duration: 2000,	location: 'bottom'});
	    	return;
	    }
			var addrData=$api.getStorage('addr_data');
	    if (addrData.province==''|| addrData.city==''||addrData.area=='') {
					api.toast({msg: '所在地区选择不完整',duration: 2000,	location: 'bottom'});
	    		return;
	    }
	    var info = {};
	    info.name = name;
	    info.tel = tel;
	    info.addr = detail;
	    info.uid = $api.getStorage('userid');
			info.province = addrData.province;
			info.city = addrData.city;
			info.area = addrData.area;

			if(info.uid == null){
				api.toast({msg: '保存失败！',duration: 2000,	location: 'bottom'});
				return;
			}
	    if (type === 2) {
	    	var item = JSON.parse(api.pageParam.data);
	    	info.A_Id = item.A_Id;
	    }
	    api.showProgress({
	    	style: 'default',
	    	animationType: 'fade',
	    	title: '正在保存',
	    	text: '请稍候',
	    	modal: false
	    });
	    if (type === 1) {
	        //保存地址
	        var result = addAddress(info);
	        result.then(function(res) {
	        	if (res.status === 200) {
	        		api.hideProgress();
	            api.toast({msg: '保存成功',duration: 2000,	location: 'bottom'});
							setTimeout(function() {
								api.sendEvent({
									name: 'reload'
								});
								api.closeWin();
							}, 400);
	        	}
	        })
	    } else {
	        //编辑地址
	        var result = editAddress(info);
	        result.then(function(res) {
	        	if (res.status === 200) {
	        		api.hideProgress();
	            api.toast({msg: '修改成功',duration: 2000,	location: 'bottom'});
	        		setTimeout(function() {
	        			api.sendEvent({
	        				name: 'reload'
	        			});
	        			api.closeWin();
	        		}, 400);
	        	}
	        });
	    }
	}
