<template>
  <div class="container">
    <div class="content">
      <div class="top_title">
        <div class="title"><slot>aaa</slot><slot name='close'></slot></div>
      </div>
      <div class="list">
        <slot name='ul'>
        </slot>
      </div>
      <div class="footer">
        <slot name='ok'></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      status: true
    }
  }
}
</script>
<style lang="less">
.container{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  .content{
    width: 100%;
    height: 70%;
    background: #fff;
    position: absolute;
    bottom: 0;
    border-radius: 20px 20px 0 0;
    padding: 0 40px;
    overflow: hidden;
    box-sizing: border-box;
    .top_title{
      position: absolute;
      width: 90%;
      .title{
        position: relative;
        line-height: 100px;
        min-height: 100px;
        text-align: center;
        font-size: 36px;
        font-weight: normal;
        border-bottom: 1px solid #eee;
        span{
        font-size: 38px;
        top: 0;
        color: #999;
        position: absolute;
        right: 0;
        cursor: pointer;
      }
    }
    }
    .list{
      margin-top: 100px;
    }
    .footer{
      width: 100%;
      height: 110px;
      position: fixed;
      bottom: 0px;
      background: #fff;
      z-index: 201;
      left: 0;
      text-align: center;
      line-height: 110px;
      button{
        width: 85%;
        height: 65%;
        border-radius: 35px;
        border: none;
        background: #ff6700;
        color: #fff;
        font-size: 36px;
      }
    }
  }
}
</style>
