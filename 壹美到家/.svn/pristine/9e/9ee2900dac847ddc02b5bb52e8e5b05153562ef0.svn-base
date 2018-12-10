/*head tab*/
apiready = function(){
    api.parseTapmode();
    init();

}
function init() {
  var data={};
  data.uid = $api.getStorage('userid');
  console.log(data.uid);
  var result = getMessage(data);
  result.then(function(res) {
    console.log(JSON.stringify(res));
    if(res.status ==200){
      var html=template('message_tmpl',{messageList:res.info})
      $('#messageDiv').html(html);
    }
  });
}

function setMassageRead(ele,mid) {
  var data={};
  data.mid = mid;
  var result = setMsgIsRead(data);
  result.then(function(res) {
    if(res.status ==200){
      $(ele).find('.notReadLabel').remove();
    }
  })
}
