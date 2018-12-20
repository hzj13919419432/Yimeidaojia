
//手机端响应式设计rem
//
// alert()
(function(doc,win){
    var docEl = doc.documentElement,
            resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if(!clientWidth)return;
                if( clientWidth >= 640 ){
                    var clientWidth = 640;
                }
                docEl.style.fontSize = clientWidth/25 + "px";
                //alert(docEl.style.fontSize);
                console.log(docEl.style.fontSize);
            };
    if(!doc.addEventListener)return;

    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener("DOMContentLoaded",recalc,false);
})(document,window);

function dialogBox(title,content,callbackfn){
    var dialogBox = api.require('dialogBox');
    dialogBox.alert({
        texts: {
            title: title,
            content: content,
            leftBtnTitle: '取消',
            rightBtnTitle: '确认'
        },
        styles: {
            bg: '#fff',
            w: 300,
            corner:5,
            title: {
                marginT: 20,
                icon: 'widget://image/qietu/confirmimport@2x.png',
                iconSize: 25,
                titleSize: 18,
                titleColor: '#000'
            },
            content: {
                color: '#000',
                size: 16
            },
            left: {
                marginB: 7,
                marginL: 20,
                w: 130,
                h: 35,
                corner: 2,
                bg: '#fff',
                size: 16
            },
            right: {
                marginB: 7,
                marginL: 10,
                w: 130,
                h: 35,
                corner: 2,
                bg: '#fff',
                size: 16
            }
        }
    }, function(ret) {
        if (ret.eventType == 'left') {
            var dialogBox = api.require('dialogBox');
            dialogBox.close({
                dialogName: 'alert'
            });
        }else{
          callbackfn();
          var dialogBox = api.require('dialogBox');
          dialogBox.close({
              dialogName: 'alert'
          });
        }
    });
}
