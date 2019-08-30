<template>
     <div class="order">
         <div class="left"><a href="#/">我的订单</a></div>
         <div class="right"><a href="#/">全部订单 <i class="iconfont  icon-xiangyoujiantou"></i></a></div>
     </div>
</template>
<script>
export default {

}
</script>
<style scoped>
   .order{
       height:80px;
       line-height:80px;
       background:#fff;
       text-align: center;
       font-size: 28px;
       border-bottom: 2px solid rgba(0,0,0,.15);
   }
   .left{
       width: 33.3%;
       float: left;
       line-height:80px;
   }
   .right{
       width: 33.3%;
       float: right;

   }
   a{
       color: rgba(0,0,0,.87);
       text-decoration: none;
       font-weight: 400;
   }
   i{
        font-style: normal;
   }
</style>
