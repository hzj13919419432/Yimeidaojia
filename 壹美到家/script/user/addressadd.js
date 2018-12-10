/*head tab*/
apiready = function(){
    api.parseTapmode();

}
function bindAddress(){
  
}
//点击二级分类跳转到单品详情
function onAddressDit(){
    api.openWin({
        name: 'AddressDit',
        url: './addressedit.html'
    });
}
