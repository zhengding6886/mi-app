<template>
     <div id="nav_list">
        <ul>
            <li>
                <p class="iconfont icon-daifukuan"></p>
                <span>待付款</span>
            </li>
             <li>
                <p class="iconfont icon-daishouhuo"></p>
                <span>待收货</span>
            </li>
             <li>
                <p class="iconfont icon-icon--"></p>
                <span>退换修</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'h'
}
</script>
<style scoped>
   #nav_list{
      width: 100%;
      height:160px;
      background:#fff;
      margin-top:10px;
   }
   #nav_list ul li{
       padding-top:20px;
       box-sizing:border-box;
       list-style: none;
       float:left;
       width:100px;
       height:160px;
       /* border:1px solid red; */
       /* background:black; */
       margin-left:120px;
       text-align:center;
   }
   #nav_list ul li p{
       font-size:60px;
       color: rgba(0,0,0,.87)
   }
   #nav_list ul li span{
       font-size:30px;
       display: inline-block;
       margin-top:15px;
       color: rgba(0,0,0,.87)
   }
</style>
