/*head tab*/
apiready = function(){
    api.parseTapmode();
    
}
//点击二级分类跳转到单品详情
function onSearProd(){
    api.openWin({
        name: 'SearProd',
        url: './searchproduct.html'
    });
}
//点击二级分类跳转到单品详情
function onStorDetal(){
    api.openWin({
        name: 'StorDetal',
        url: './storedetail.html'
    });
}