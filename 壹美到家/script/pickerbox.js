function openSelector(title,data,fn,height=160){
  var UIMultiSelector = api.require('UIMultiSelector');
      UIMultiSelector.open({
          rect: {
              h: height
          },
          text: {
              title: title,
              leftBtn: '取消',
              rightBtn: '确认',
              selectAll: 'ALL'
          },
          max: 0,
          singleSelection: true,
          styles: {
              mask: 'rgba(0,0,0,0.3)',
              title: {
                  bg: '#f5f5f5',
                  color: '#6e6e6e',
                  size: 16,
                  h: 44
              },
              leftButton: {
                  w: 80,
                  h: 35,
                  marginT: 5,
                  marginL: 8,
                  bg: '#ffffff',
                  color: '#6e6e6e',
                  size: 14
              },
              rightButton: {
                  w: 80,
                  h: 35,
                  marginT: 5,
                  marginR: 8,
                  bg: '#6b90e8',
                  color: '#fff',
                  size: 14
              },
              item: {
                  h: 35,
                  bg: '#fff',
                  bgActive: '#6b90e8',
                  bgHighlight: '#6b90e8',
                  color: '#6e6e6e',
                  active: '#fff',
                  highlight: '#6b90e8',
                  size: 14,
                  lineColor: '#e7e6ec',
                  textAlign: 'center'
              }
          },
          animation: false,
          maskClose:true,
          items: data
      }, function(ret, err) {
          if (ret) {
            if(ret.eventType=="clickRight"){
              if(ret.length<=0)return;
              fn(ret.items);
              var us = api.require('UIMultiSelector');
               us.close();
            }
            if(ret.eventType=="clickLeft"){
              var us = api.require('UIMultiSelector');
               us.close();
            }
          }
      });
}
