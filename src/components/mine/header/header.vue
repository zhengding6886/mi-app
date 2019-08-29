<template>
     <div id="header">
          <p class="img"> </p>
          <div class="name" @click="toast">登录/注册</div>
    </div>
</template>
<script>
// 导入MessageBox
import { MessageBox } from 'mint-ui'
export default {
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
       background:rgb(234, 125, 15);
   }
   #header img{
       width:75px;
       height:75px;
       float: left;
       margin:50px 20px;
   }
   #header .name{
        line-height: 180px;
        color:#fff;
        font-size:30px;
   }
</style>
