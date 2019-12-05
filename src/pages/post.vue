<!--
 * @Author: roselee
 * @Date: 2019-12-05 14:42:25
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-05 19:58:15
 * @Description: 
 -->
<template>
  <div>
    <button id="capture" @touchstart="captureImage">拍照</button>
    <img id="imgId" style="width: 200px;height: 150px;" />

    <!-- <div>
        <input
          id="upload_file"
          type="file"
          style="display: none;"
          accept="image/*"
          name="file"
          @change="fileChange($event)"
        />
        <div class="image-item space" @click="showActionSheet()">
          <div class="image-up" style="height:0.5rem;width:.5rem;background:red;"></div>
        </div>

        <div class="upload_warp">
          <div class="upload_warp_img">
            <div class="upload_warp_img_div" v-for="(item,index) in imgList" :key="index">
              <div class="upload_warp_img_div_top">
                <img
                  src="http://114.115.162.39/static/image/x.png"
                  class="upload_warp_img_div_del"
                  @click="fileDel(index)"
                />
              </div>
              <img :src="item.file.src" style="display: inline-block;" />
            </div>
            <div
              class="upload_warp_left"
              id="upload_warp_left"
              @click="fileClick()"
              v-if="this.imgList.length < 6"
            >
              <img src="../assets/img/addPic.jpg" class="imgs" width="100%"/>
            </div>
          </div>
        </div>

        <div class="upload_warp_text">
          <span>选中{{imgList.length}}张文件，共{{bytesToSize(this.size)}}</span>
        </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "cameras-and-albums",
  data() {
    return {
      // imgList: [],
      // datas: new FormData(),
      // files: 0,
      // size: 0
    };
  },
  methods: {
     captureImage(){
        var cmr = plus.camera.getCamera();//获取摄像头对象
        var res = cmr.supportedImageResolutions[2];//获取支持的分辨率，这里是第三个分辨率,直接使用supportenImageResolutions可以获取自己手机所支持的分辨率有多少种格式，返回值类型 string[]
        var fmt = cmr.supportedImageFormats[0];//JPG格式，
    
        cmr.captureImage( function( path ){//成功回调函数，获取路径
                alert( "拍照成功" );
//把保存在app目录下的照片显示在img标签里
				plus.io.resolveLocalFileSystemURL(path, function(entry) {
					pathPhoto = entry.toLocalURL();
					console.log(pathPhoto);
					document.getElementById("imgId").src=pathPhoto;
				}, function(e) {
				    console.log("出错了！");
				});
            },
            function( error ) {
                alert( "Capture image failed: " + error.message );
            },
            {resolution:res,format:fmt}//分辨率和格式，必填，就是上面获取到的。
        );
    }  
  //   //调用相册&相机
  //   fileClick() {
  //     document.getElementById("upload_file").click();
  //   },
  //   //调用手机摄像头并拍照
  //   getImage() {
  //     let cmr = plus.camera.getCamera();
  //     cmr.captureImage(
  //       function(p) {
  //         plus.io.resolveLocalFileSystemURL(
  //           p,
  //           function(entry) {
  //             compressImage(entry.toLocalURL(), entry.name);
  //           },
  //           function(e) {
  //             plus.nativeUI.toast("读取拍照文件错误：" + e.message);
  //           }
  //         );
  //       },
  //       function(e) {},
  //       {
  //         filter: "image"
  //       }
  //     );
  //   },
  //   //从相册选择照片
  //   galleryImgs() {
  //     plus.gallery.pick(
  //       function(e) {
  //         let name = e.substr(e.lastIndexOf("/") + 1);
  //         compressImage(e, name);
  //       },
  //       function(e) {},
  //       {
  //         filter: "image"
  //       }
  //     );
  //   },
  //   //点击事件，弹出选择摄像头和相册的选项
  //   showActionSheet() {
  //     let bts = [
  //       {
  //         title: "拍照"
  //       },
  //       {
  //         title: "从相册选择"
  //       }
  //     ];
  //     plus.nativeUI.actionSheet(
  //       {
  //         cancel: "取消",
  //         buttons: bts
  //       },
  //       function(e) {
  //         if (e.index == 1) {
  //           this.getImage();
  //         } else if (e.index == 2) {
  //           this.galleryImgs();
  //         }
  //       }
  //     );
  //   },
  //   fileChange(el) {
  //     this.files = $("#upload_file").get(0).files;
  //     console.log(this.files.length);
  //     for (let i = 0; i < this.files.length; i++) {
  //       this.datas.append("file", this.files[i]);
  //     }
  //     this.show1 = false;
  //     console.log(typeof this.files);
  //     console.log(this.files);
  //     if (!el.target.files[0].size) return;
  //     this.fileList(el.target);
  //     el.target.value = "";
  //   },
  //   fileList(fileList) {
  //     let files = fileList.files;
  //     for (let i = 0; i < files.length; i++) {
  //       //判断是否为文件夹
  //       if (files[i].type != "") {
  //         this.fileAdd(files[i]);
  //       } else {
  //         //文件夹处理
  //         this.folders(fileList.items[i]);
  //       }
  //     }
  //   },
  //   //文件夹处理
  //   folders(files) {
  //     let _this = this;
  //     //判断是否为原生file
  //     if (files.kind) {
  //       files = files.webkitGetAsEntry();
  //     }
  //     files.createReader().readEntries(function(file) {
  //       for (let i = 0; i < file.length; i++) {
  //         if (file[i].isFile) {
  //           _this.foldersAdd(file[i]);
  //         } else {
  //           _this.folders(file[i]);
  //         }
  //       }
  //     });
  //   },
  //   fileAdd(file) {
  //     //总大小
  //     this.size = this.size + file.size;
  //     //判断是否为图片文件
  //     if (file.type.indexOf("image") == -1) {
  //       file.src = "wenjian.png";
  //       this.imgList.push({
  //         file
  //       });
  //     } else {
  //       let reader = new FileReader();
  //       reader.vue = this;
  //       reader.readAsDataURL(file);
  //       reader.onload = function() {
  //         file.src = this.result;
  //         this.vue.imgList.push({
  //           file
  //         });
  //       };
  //     }
  //   },
  //   fileDel(index) {
  //     this.size = this.size - this.imgList[index].file.size; //总大小
  //     this.imgList.splice(index, 1);
  //   },
  //   bytesToSize(bytes) {
  //     if (bytes === 0) {
  //       return "0 B";
  //     }
  //     let k = 1000, // or 1024
  //       sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
  //       i = Math.floor(Math.log(bytes) / Math.log(k));
  //     return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
  //   },
  //   dragenter(el) {
  //     el.stopPropagation();
  //     el.preventDefault();
  //   },
  //   dragover(el) {
  //     el.stopPropagation();
  //     el.preventDefault();
  //   },
  //   drop(el) {
  //     el.stopPropagation();
  //     el.preventDefault();
  //     this.fileList(el.dataTransfer);
  //   },
  //   shows(et, tx) {
  //     this.strut = et;
  //     this.txt = tx;
  //   },
  //   handleClick() {
  //     this.$store.commit("add");
  //   }
  }
};
</script>

<style>
</style>