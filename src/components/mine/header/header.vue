<template>
     <div id="header">
          <div class="user-img"><img :src="imgUrl" alt=""></div>
          <div class="user-name" @click="toast">{{u_name}}</div>
    </div>
</template>
<script>
// 导入MessageBox
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      imgUrl: require('../images/user.png'),
      u_name: '登录/注册'
    }
  },
  name: 'h',
  methods: {
    toast () {
      MessageBox({
        title: '提示',
        message: '请您认真阅读小米官方规则',
        showCancelButton: true
      }).then(res => {
        // console.log(res)
        if (res !== 'cancel') {
          window.location.hash = '#/register'
        }
      })
    }
  }
}
</script>
<style scoped>
    #header{
       width:100%;
       height:180px;
       background-color: #f37d0f;
       background-image:url(../images/user-bg.png) ;
       background-size: 80% 80%;
   }
   #header .user-img{
       width:20%;
       height:180px;
       line-height: 180px;
       display:flex;
       float: left;
   }
   #header .user-img img{
       width:100px;
       height:100px;
       margin: auto;
   }
   #header .user-name{
        float: left;
        width:80%;
        height:180px;
        line-height: 180px;
        color:#fff;
        font-size:30px;
   }
</style>
