function uploadHeadPic(valueId,imgId,dirName='User',fn=null) {
         api.actionSheet({
             title : '上传照片',
             cancelTitle : '取消',
             buttons : ['拍照', '手机相册']
         }, function(ret, err) {
             if (ret) {
                 if (ret.buttonIndex == 1) {
                     api.getPicture({
                         sourceType : 'camera',
                         encodingType : 'jpg',
                         mediaValue : 'pic',
                         destinationType : 'url',
                         allowEdit : false,
                         quality : 100,
                         targetWidth: 750,
                         targetHeight: 750,
                         saveToPhotoAlbum : false
                     }, function(ret, err) {
                         console.log(JSON.stringify(ret));
                         if (ret) {
                             saveImg(ret.data,valueId,imgId,dirName,fn);
                         } else {
                             api.toast({
                                 msg : '图像获取失败',
                                 duration : 3000,
                                 location : 'bottom'
                             });
                         }
                     });
                 } else if (ret.buttonIndex == 2) {
                     //手机相册选图片
                     api.getPicture({
                         sourceType : 'library',
                         encodingType : 'png',
                         mediaValue : 'pic',
                         destinationType : 'url',
                         allowEdit : true,
                         quality : 100,
                         preview:true,
                         targetWidth: 750,
                         targetHeight: 750,
                         saveToPhotoAlbum : true
                     }, function(ret, err) {
                       console.log(1111);
                       console.log(JSON.stringify(ret));
                         if (ret) {
                            saveImg(ret.data,valueId,imgId,dirName,fn);
                         } else {
                             api.toast({
                                 msg : '图像获取失败',
                                 duration : 3000,
                                 location : 'bottom'
                             });
                         }
                     });
                 }
             }
         });
     };
     //保存剪辑图像
    function saveImg(path,valueId,imgId,dirName,fn) {
         api.showProgress({
             title: '上传中...',
             text: '先喝杯茶...',
         });
         var url='';
         if(dirName=='User'){
           url=baseUrl + 'User/UploadImage';
         }
         if(dirName=='Store'){
           url=baseUrl + 'Store/UploadImage';
         }
         //上传剪辑后的图像到服务器
         api.ajax({
             url : url,
             method : 'post',
             cache : 'false',
             timeout : 30,
             dataTpye : 'json',
             data : {
                 files : {
                     file : path,
                 }
             }
         }, function(ret, err) {
             api.hideProgress();
             //上传进度
             if (ret.status == 300) {
                 api.toast({
                     msg : '上传错误',
                     duration : 3000,
                     location : 'bottom'
                 });
             } else if (ret.status == 200) {
               $("#"+imgId).attr("src",imageUrl+ret.info);
               $("#"+valueId).val(ret.info);
               if(fn!=null){
                 fn();
               }
              }
         });
     }
