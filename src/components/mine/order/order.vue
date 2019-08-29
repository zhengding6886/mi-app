<template>
     <div>
         <p class="left"><a href="#/">我的订单</a></p>
         <p class="right"><a href="#/">全部订单 ></a></p>
     </div>
</template>
<script>
export default {

}
</script>
<style scoped>
   div{
       height:80px;
       background:#fff;
   }
   div p.left{
       float: left;
       margin-left:30px;
       line-height:80px;
   }
   div p.right{
       float: right;
       margin-right:30px;
       line-height:80px;
   }
   a{
       color: rgba(0,0,0,.87);
       text-decoration: none;
       font-size:35px;
       font-weight: 400;
   }
</style>
