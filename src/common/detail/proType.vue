<template>
  <div class="product_info_choose_version">
    <div class="choose_list">
      <div class="pro_info_choose" @click="changeStatus">
        <span class="checked">已选</span>
        <span class="info">小米MIX 3 全网通版 8GB+128GB 黑色 x 1</span>
        <i class="more"> > </i>
      </div>
      <div class="pro_info_choose">
        <span class="checked">送至</span>
        <span class="info">北京市 东城区 <span style="color:#ff6700">有现货</span></span>
        <i class="more"> > </i>
      </div>
      <div class="pro_info_choose" @click="changeStatus">
        <span class="server"><i style="color:#ff6700">√</i>小米自营</span>
        <span class="server"><i style="color:#ff6700">√</i>小米发货</span>
        <span class="server"><i style="color:#ff6700">√</i>7天无理由退货</span>
        <i class="more"> > </i>
      </div>
    </div>
    <upsheet v-if='status'>
      <slot>
        <div class="top">
          <div class="left">
            <img src="https://i8.mifile.cn/v1/a1/5ad04ac8-741b-a8b9-2ca1-4483d4339b4d.webp" alt="">
          </div>
          <div class="right">
            <p class="price"><span class="new">￥2599</span><span class="old">￥3599</span></p>
            <p class="describe">小米MIX 3 全网通版 8GB+128GB 黑色</p>
          </div>
        </div>
      </slot>
      <span class="close" slot='close' @click="changeStatus">✗</span>
      <ul slot='ul'>
        <li>
          <p class="name">版本</p>
          <p class="select"><span>8GB+128GB</span></p>
        </li>
        <li>
          <p class="name">颜色</p>
          <p class="select"><span>黑色</span></p>
        </li>
        <li>
          <p class="name">
            <span class="num num-l">购买数量</span>
            <span class="num num-r">
              <span class="sub" @click="sub">-</span><span class="number">{{number}}</span><span class="add" @click="add">＋</span>
            </span>
          </p>
        </li>
        <li>
          <p class="name">意外保护<i class="icon yiwen">?</i><span class="value">{{tip}}</span></p>
          <!-- <span class="choose">意外保障服务<i class="price">299元</i></span>
          <span class="choose">碎屏保障服务<i class="price">159元</i></span> -->
          <mt-checklist
            v-model="value"
            :options="options" @change="choose">
          </mt-checklist>
          <p class="agree"><i class="icon dui">√</i>我已阅读 <span style="color:#ff6700">服务条款 | 常见问题</span></p>
        </li>
        <li>
          <p class="name">延长保修<i class="icon yiwen">?</i><span class="value">{{tip2}}</span></p>
          <span class="choose">延长保修服务<i class="price">99元</i></span>
          <p class="agree"><i class="icon dui">√</i>我已阅读 <span style="color:#ff6700">服务条款 | 常见问题</span></p>
        </li>
      </ul>
      <a href="javascript:void(0)" slot='ok' class='close' @click="changeStatus">完成</a>
    </upsheet>
  </div>
</template>
<script>
import upsheet from '@/common/upsheet'
import {Checklist} from 'mint-ui'
import Vue from 'vue'
Vue.component('mt-checklist', Checklist)
export default {
  components: {
    upsheet
  },
  data () {
    return {
      status: false,
      number: 1,
      tip: '',
      tip2: '',
      agree: false,
      value: [],
      options: [
        {
          label: '意外保障服务',
          value: '手机意外摔落/进水/碾压等损坏'
        },
        {
          label: '碎屏保障服务',
          value: '手机意外碎屏'
        }
      ]
    }
  },
  methods: {
    choose (el) {
      this.tip = this.value[0]
    },
    changeStatus () {
      this.status = !this.status
    },
    add () {
      this.number++
    },
    sub () {
      if (this.number === 0) {
        this.number = 0
        return
      }
      this.number--
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../../node_modules/mint-ui/lib/style.css');
.product_info_choose_version{
  padding: 0 20px;
  .choose_list{
    background: #fafafa;
    border-radius: 10px;
    padding: 10px 20px;
  }
  .pro_info_choose{
    border-bottom: 1px solid #e5e5e5;
    line-height: 70px;
    font-size: 26px;
    .checked{
      color: rgba(0,0,0,0.54);
    }
    .info{
      margin-left: 20px;
    }
    .more{
      float: right;
      font-size: 30px;
      color: rgba(0,0,0,0.3);
    }
    .server{
      margin: 0 10px;
      i{
        display: inline-block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid #ff6700;
        line-height: 30px;
        text-align: center;
        overflow: hidden;
        margin-right: 5px;
      }
    }
  }
}
span.close{
  margin-top: 20px;
}
a.close{
  display: block;
  width: 90%;
  height: 80px;
  border-radius: 40px;
  background: #ff6700;
  color: #fff;
  margin: 0 auto;
  line-height: 80px;
  font-size: 38px;
}
.top_title .title .top{
  margin-bottom: 20px;
  overflow: hidden;
  .left{
    width: 210px;
    height: 210px;
    margin-top: 40px;
    float: left;
    img{
      width: 100%;
      border: 1px solid #eee;
      border-radius: 10px;
    }
  }
  .right{
    float: left;
    width: 65%;
    margin-top: 40px;
    padding-left: 20px;
    line-height: normal;
    text-align: left;
    .describe{
      font-size: 28px;
      line-height: normal;
      margin-top: 20px;
    }
    .price{
      margin-top: 10px;
      span{
        position: relative;
        line-height: normal;
      }
      span.new{
        color: #ff6700;
        margin-right: 10px;
      }
      span.old{
        text-decoration: line-through;
        font-size: 24px;
      }
    }
  }
}
ul{
  overflow: hidden;
  height: 70%;
  width: 100%;
  top: 270px;
  padding-bottom: 210px;
  overflow-y: scroll;
  position: absolute;
  z-index: 200;
  li{
    p.name{
      line-height: 80px;
      font-size: 26px;
      color: rgba(0,0,0,0.87);
      margin-bottom: 20px;
      .num{
        display: inline-block;
      }
      .num-r{
        width: 210px;
        float: right;
        margin-right: 60px;
        span{
          display: inline-block;
          border-radius: 6px;
          background: rgba(0,0,0,0.1);
          width: 70px;
          height: 70px;
          text-align: center;
          line-height: 70px;
        }
        .number{
          background: #fff;
          // border: 1px solid rgba(0,0,0,0.1);
          font-family:Arial, Helvetica, sans-serif;
          font-size: 30px;
        }
        .add{
          font-size: 40px;
        }
        .sub{
          font-size: 40px;
        }
      }
      .icon{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgba(0,0,0,0.45);
        border-radius: 50%;
        color: rgba(0,0,0,0.45);
        line-height: 30px;
        text-align: center;
        margin-left: 10px;
      }
      .value{
        margin-left: 20px;
        color: rgba(0,0,0,0.45);
      }
    }
    .choose{
      display: inline-block;
      padding: 0 20px;
      border: 1px solid rgba(0,0,0,0.3);
      height: 70px;
      line-height: 70px;
      border-radius: 8px;
      color: rgba(0,0,0,0.45);
      margin-right: 10px;
    }
    .selected{
      border: 1px solid #ff6700;
      color: #ff6700;
    }
    p.select{
      padding:0 40px;
      padding-bottom: 40px;
      span{
        display: inline-block;
        height: 80px;
        line-height: 80px;
        text-align: center;
        border: 1px solid #ff6700;
        border-radius: 8px;
        padding: 0 20px;
        color: #ff6700;
      }
    }
    p.agree{
      margin-top: 20px;
      margin-bottom: 40px;
      font-size: 26px;
      i{
        display: inline-block;
        width: 30px;
        height: 30px;
        background: #ff6700;
        border-radius: 50%;
        color: #fff;
        line-height: 30px;
        margin-right: 10px;
        padding-left: 5px;
        padding-top: 3px;
      }
    }
  }
  .mint-radiolist{
    display: flex;
    .mint-cell{
      flex: 1;
    }
  }
}
</style>
