<template>
  <div id="set">
    <Header ref="son"></Header>
    <div class="set-items clearfix">
      <ul>
        <li>
          <a href="https://m.mi.com/address/list?type=user">地址管理</a>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </li>
        <li>
          <a href="https://m.mi.com/support/module?id=40">经营证照</a>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </li>
        <li>
          <a href="https://m.mi.com/support/module">协议规则</a>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </li>
        <li>
          <a href="http://www.mi.com/about/user-agreement/">小米商城用户协议</a>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </li>
        <li>
          <a href="https://static.account.xiaomi.com/html/agreement/account/cn.html">小米帐号使用协议</a>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </li>
        <li>
          <a href="https://www.mi.com/about/privacy/">隐私政策</a>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </li>
      </ul>
    </div>
    <div class="logout" @click="logout">退出登录</div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import Header from '@/common/header.vue'
export default {
  components: {
    Header
  },
  mounted () {
    this.$refs.son.title = '设置'
  },
  methods: {
    logout () {
      this.removeStorge()
      MessageBox({
        title: '温馨提示',
        message: '退出登录'
      }).then(res => {
        window.location.hash = '#/mine'
      })
    }
  }
}
</script>
<style scoped>
.logout {
  position: fixed;
  display: block;
  height: 100px;
  line-height: 100px;
  width: 100%;
  background: #f4f4f4;
  bottom: 200px;
  font-size: 32px;
  color: #3c3c3c;
  text-align: center;
}
.set-items {
  width: 100%;
  font-size: 32px;
}
.set-items ul {
  width: 100%;
}
.set-items ul li {
  display: flex;
  width: 100%;
  height: 80px;
  line-height: 80px;
  border-bottom: 4px solid #f6f6f6;
}
.set-items ul li a {
  width: 90%;
  height: 80px;
  padding-left: 40px;
  color: #3c3c3c;
}
.set-items ul li i {
  text-align: center;
  height: 80px;
  width: 10%;
}
</style>
