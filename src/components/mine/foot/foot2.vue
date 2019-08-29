<template>
  <div class="foot">
     <ul>
         <router-link to="/" tag="li"><i></i><p class="p1">服务中心<span>></span></p></router-link>
         <router-link to="/" tag="li"><i></i><p>小米之家<span>></span></p></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'foot'
}
</script>
<style scoped>
    div{
        margin-top:30px;
    }
     div ul li{
         width:100%;
         height:100px;
         background:#fff;
         font-size:30px;
         line-height:100px;
         position: relative;
     }
      div ul li p{
          padding-right:20px;
          box-sizing: border-box;
          width:80%;
          float: right;
      }
      div ul li p.p1{
          border-bottom: 1px solid #000;
      }
      div ul li span{
          position: absolute;
          font-size: 45px;
          right:40px;
          font-weight: 100;
          color:#333;
      }
</style>
