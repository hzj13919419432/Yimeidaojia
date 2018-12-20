/*
* @Author: Dell
* @Date:   2018-05-07 18:58:23
* @Last Modified by:   lvchanglu
* @Last Modified time: 2018-06-11 11:21:50
*/


// 轮播图
function slider(){

    var slide = new auiSlide({
        container:document.getElementById("aui-slide"),
        // "width":300,
        "height":160,
        "speed":300,
        "pageShow":true,
        "pageStyle":'dot',
        "loop":true,
        'dotPosition':'center',
        currentPage:currentFun
            })
        
            function currentFun(index) {
                // console.log(index);
            }
            var slide2 = new auiSlide({
        container:document.getElementById("aui-slide2"),
        // "width":300,
        "height":160,
        "speed":300,
        "autoPlay": 0, //自动播放
        "pageShow":true,
        "loop":true,
        "pageStyle":'dot',
        'dotPosition':'center'
            })
            var slide3 = new auiSlide({
        container:document.getElementById("aui-slide3"),
        // "width":300,
        "height":160,
        "speed":500,
        "autoPlay": 3000, //自动播放
        "loop":true,
        "pageShow":true,
        "pageStyle":'line',
        'dotPosition':'center'
            })
            console.log(slide3.pageCount());
}


// rem适配
(function (docs, win) {
  console.log("rem");
  var docEls = docs.documentElement,
  resizeEvts = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalcs = function () {

  //getBoundingClientRect()这个方法返回一个矩形对象

  window.rem = docEls.getBoundingClientRect().width/25;
  docEls.style.fontSize = window.rem + 'px';

};
  recalcs();
  if (!docs.addEventListener) return;
  win.addEventListener(resizeEvts, recalcs, false);
})(document, window);



//tab栏切换
$(function(){
     $('#tabs a').click(function(e) {
          e.preventDefault();                
          $('#tabs li').removeClass("current").removeClass("hoverItem");
          $(this).parent().addClass("current");
          $("#content div").removeClass("show");
          $('#' + $(this).attr('title')).addClass('show');
      });

     $('#tabs a').hover(function(){
        if(!$(this).parent().hasClass("current")){
          $(this).parent().addClass("hoverItem");
        }
     },function(){
        $(this).parent().removeClass("hoverItem");
     });
     console.log("tab");
  });