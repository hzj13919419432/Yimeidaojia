/*head tab*/
apiready = function(){
    api.parseTapmode();
    
}
//点击二级分类跳转到单品详情
function onAddressAdd(){
    api.openWin({
        name: 'AddressAdd',
        url: './addressadd.html'
    });
}

