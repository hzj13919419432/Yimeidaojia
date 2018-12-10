

function citySelector(fn){
  var UIActionSelector = api.require('UIActionSelector');
  UIActionSelector.open({
      datas: 'widget://res/city.json',
      layout: {
          row: 8,
          col: 3,
          height: 30,
          size: 14,
          sizeActive: 14,
          rowSpacing: 5,
          colSpacing: 10,
          maskBg: 'rgba(0,0,0,0.2)',
          bg: '#fff',
          color: '#979797',
          colorActive: '#6b90e8',
          colorSelected: '#6b90e8'
      },
      animation: true,
      cancel: {
          text: '取消',
          size: 14,
          w: 90,
          h: 35,
          bg: '#fff',
          bgActive: '#ccc',
          color: '#888',
          colorActive: '#fff'
      },
      ok: {
          text: '确定',
          size: 14,
          w: 90,
          h: 35,
          bg: '#fff',
          bgActive: '#ccc',
          color: '#888',
          colorActive: '#fff'
      },
      title: {
          text: '请选择省市区',
          size: 12,
          h: 44,
          bg: '#eee',
          color: '#888'
      },
      fixedOn: api.frameName
  }, function(ret, err) {
      // console.log(JSON.stringify(ret));
      if (ret.eventType=='ok') {
          fn(ret);
      }
  });
}
