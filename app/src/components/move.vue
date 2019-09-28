<template>
  <div class="index">
    <div class="first_part">
      <img src="../assets/imgs/QQ图片20190926103146.png" alt class="tip" v-show="hide">
      <div class="logo">
        <img src="../assets/imgs/icon_logo_01.png" alt>
      </div>
      <span class="title">海鸥智慧消防</span>
      <h2 class="subhead">安防消防一体监控APP, 政企+个人用户</h2>
      <div class="iosdown">
        <i class="icon">
          <img src="../assets/imgs/icon_ios.png" alt>
        </i>
        <a @click.prevent="ipdownLoad">iPhone版下载</a>
      </div>
      <div class="AZdown">
        <i class="icon">
          <img src="../assets/imgs/icon_android.png" alt>
        </i>
        <a @click.prevent="downLoad">Android版下载</a>
      </div>
      <div class="phone">
        <img src="../assets/imgs/pic_download_phone01.png" alt>
        <u class="next">
          <img src="../assets/imgs/icon_nextpage.png" alt>
        </u>
      </div>
    </div>
    <div class="next_part">
      <div class="next_logo">
        <img src="../assets/imgs/icon_logo_01.png" alt>
      </div>
      <span class="next_title">海鸥装维版</span>
      <h2 class="next_subhead">设备安装,设备维护专属APP</h2>
      <div class="next_iosdown">
        <i class="next_icon">
          <img src="../assets/imgs/icon_ios.png" alt>
        </i>
        <a @click.prevent="zwdownLoad">iPhone版下载</a>
      </div>
      <div class="next_AZdown">
        <i class="next_icon">
          <img src="../assets/imgs/icon_android.png" alt>
        </i>
        <a @click.prevent="zwipdownLoad">Android版下载</a>
      </div>
      <div class="next_phone">
        <img src="../assets/imgs/pic_download_phone02.png" alt>
      </div>
    </div>
    <div class="box" v-show="show"></div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      hide: false,
      show:false,
    };
  },
  methods: {
    downLoad() {
      window.location.href = "http://139.196.78.74:8080/app_ver/zhxf/apk/android/app_release_v2.0.17.apk";
    },
    ipdownLoad() {
      alert("暂无该版本");
    },
    zwdownLoad() {
      window.location.href = "https://www.pgyer.com/s54p";
    },
    zwipdownLoad() {
      alert("暂无该版本");
    }
  },
  created() {
    var is_weixin = (function() {
      return navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1;
    })();
    if (is_weixin) {
     this.hide=true;
     this.show=true;
    } else {
      
    }
  }
};
</script>

<style scoped>

.index {
  width: 100%;
  height: 100%;
  position: relative;
}
.box {
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
  position: absolute;
  top:0px;
  left:0px;

}
.first_part {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("../assets/imgs/bg_download_01.png") no-repeat;
}
.logo {
  width: 110px;
  height: 110px;
  margin: 80px auto;
}
.logo img {
  width: 100%;
  height: 100%;
}
.tip {
  
  position: absolute;
  top:-50px;
  right: -120px;
  z-index: 100;
  transform: scale(0.6,0.6)
  
}
.title {
  font-size: 36px;
  color: #fff;
  margin-left: 270px;
}
.subhead {
  font-size: 24px;
  font-weight: normal;
  color: #fff;
  margin: 30px 0px 0px 180px;
}
.iosdown {
  width: 428px;
  height: 98px;
  margin-top: 64px;
  background-color: #09a2fa;
  border-radius: 10px;
  margin-left: 160px;
  padding-left: 88px;
  box-sizing: border-box;
}
.AZdown {
  width: 428px;
  height: 98px;
  margin-top: 35px;
  background-color: #1ddeb6;
  border-radius: 10px;
  padding-left: 88px;
  margin-left: 160px;
  box-sizing: border-box;
}
.iosdown,
.AZdown .icon {
  line-height: 98px;
}
.iosdown .icon img {
  width: 42px;
  height: 42px;
}
.AZdown .icon img {
  width: 42px;
  height: 42px;
}
.iosdown a {
  color: #fff;
  font-size: 28px;
}
.AZdown a {
  color: #fff;
  font-size: 28px;
}
.phone {
  width: 100%;
  height: 100%;
  text-align: center;
}
.phone img {
  width: 422px;
  height: 712px;
}
.next img {
  width: 750px;
  height: 173px;
  position: absolute;
  top: 1215px;
  left: 0px;
}
.next_part {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("../assets/imgs/bg_download_02.png") no-repeat left bottom;
  background-size: 544px 809px;
}
.next_logo {
  width: 110px;
  height: 110px;
  margin: 80px auto;
}
.next_logo img {
  width: 100%;
  height: 100%;
}
.next_title {
  font-size: 36px;
  color: #29303c;
  margin-left: 288px;
  margin-top: 35px;
}
.next_subhead {
  font-size: 24px;
  font-weight: normal;
  color: #29303c;
  margin: 30px 0px 0px 250px;
}
.next_iosdown {
  width: 428px;
  height: 98px;
  margin-top: 64px;
  background-color: #09a2fa;
  border-radius: 10px;
  margin-left: 160px;
  padding-left: 88px;
  box-sizing: border-box;
}
.next_AZdown {
  width: 428px;
  height: 98px;
  margin-top: 35px;
  background-color: #1ddeb6;
  border-radius: 10px;
  padding-left: 88px;
  margin-left: 160px;
  box-sizing: border-box;
}
.next_iosdown,
.next_AZdown .next_icon {
  line-height: 98px;
}
.next_iosdown .next_icon img {
  width: 42px;
  height: 42px;
}
.next_AZdown .next_icon img {
  width: 42px;
  height: 42px;
}
.next_iosdown a {
  color: #fff;
  font-size: 28px;
}
.next_AZdown a {
  color: #fff;
  font-size: 28px;
}
.next_phone {
  width: 100%;
  height: 100%;
  text-align: center;
}
.next_phone img {
  width: 560px;
  height: 698px;
  margin-top: 119px;
}
</style>
