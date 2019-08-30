<template>
   <div class="login">
     <h2>登录</h2>
     <p><input type="text" placeholder="请输入账号"></p>
     <p><input type="password" placeholder="请输入密码"></p>
     <mt-button type="primary" size="large" class="an1">立即登录</mt-button>
   </div>
</template>

<script>
export default{
  methods: {

  }
}
</script>
<style scoped>
  div{
      height:500px;
      /* background:yellow; */
  }
  div h2{
    text-align: center;
    font-size:60px;
  }
  div input[type="text"]{
       width:90%;
       height:100px;
       font-size:30px;
       /* background:pink; */
       padding-left:10px;
       box-sizing: border-box;
       margin:20px 30px;
       border:1px solid pink;
       outline: none;
  }
    div input[type="password"]{
       width:90%;
       height:100px;
       font-size:30px;
       background:#fff;
       padding-left:10px;
       border:1px solid pink;
       margin:20px 30px;
       box-sizing: border-box;
       outline: none;
  }
  .an1{
      margin-top:20px;
  }
</style>
