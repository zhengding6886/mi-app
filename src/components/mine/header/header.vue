<template>
  <div id="header" :style="{backgroundImage: 'url(' + userBgImgSrc + ')' }">
    <div class="user-img">
      <img :src="userImgSrc" alt />
    </div>
    <div class="user-name" @click="toast">{{u_name}}</div>
  </div>
</template>
<script>
// 导入MessageBox
import { MessageBox } from 'mint-ui'
import userImg from '@/assets/user.png'
import userBgImg from '@/assets/user-bg.png'
export default {
  data () {
    return {
      userImgSrc: userImg,
      userBgImgSrc: userBgImg,
      u_name: '登录/注册'
    }
  },
  name: 'h',
  methods: {
    toast () {
      MessageBox({
        title: '协议声明',
        message:
          '<a href="http://www.mi.com/about/user-agreement/" style="color:#FFAC73">请您认真阅读小米官方规则</a>',
        showCancelButton: true
      }).then(res => {
        // console.log(res)
        if (res !== 'cancel') {
          window.location.hash = '#/login'
        }
      })
    }
  }
}
</script>
<style scoped>
#header {
  width: 100%;
  height: 180px;
  background-color: #f37d0f;

  background-size: 80% 80%;
}
#header .user-img {
  width: 20%;
  height: 180px;
  line-height: 180px;
  display: flex;
  float: left;
}
#header .user-img img {
  width: 100px;
  height: 100px;
  margin: auto;
}
#header .user-name {
  float: left;
  width: 80%;
  height: 180px;
  line-height: 180px;
  color: #fff;
  font-size: 30px;
}
</style>
