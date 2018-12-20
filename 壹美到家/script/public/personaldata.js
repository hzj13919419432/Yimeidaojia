/*head tab*/
apiready = function(){
    api.parseTapmode();
    
}
//点击二级分类跳转到单品详情
function onNickName(){
    api.openWin({
        name: 'NickName',
        url: './nickname.html'
    });
}
//点击二级分类跳转到单品详情
function onAddEdit(){
    api.openWin({
        name: 'AddEdit',
        url: '../user/addressedit.html'
    });
}
//点击二级分类跳转到单品详情
function onCellPhone(){
    api.openWin({
        name: 'CellPhone',
        url: './cellphone.html'
    });
}
