<template>
  <div class="login">
    <div class="logo">
      <span class="logo-image">
        <img :src="logImgSrc" alt />
      </span>
      <span class="logo-title">小米账号登录</span>
    </div>
    <div class="input-box">
      <label for="uName" class="l-user">
        <div class="phone86">+86</div>
        <input type="text" id="uName" placeholder="手机号码" />
      </label>
      <label for="uName" class="l-pwd">
        <input type="text" id="uName" placeholder="短信验证码" />
        <div class="code">获取验证码</div>
      </label>
    </div>
    <br />
    <br />
    <mt-button type="primary" size="large" class="btn btn-orange">立即登录/注册</mt-button>
    <br />
    <br />
    <mt-button type="primary" size="large" class="btn btn-white">用户名密码登录</mt-button>
    <br />
    <br />
    <fieldset>
      <legend class="other-login">其它方式登录</legend>
    </fieldset>
    <br />
    <div class="i-other-login">
      <i class="iconfont icon-weibo i1"></i>
      <i class="iconfont icon-zhifubao2 i2"></i>
      <i class="iconfont icon-weixin1 i3"></i>
    </div>
    <br />
    <br />
    <div class="language">
      <ul>
        <li>简体</li><li>|</li>
        <li>繁体</li><li>|</li>
        <li>English</li><li>|</li>
        <li>常见问题</li><li>|</li>
        <li>隐私政策</li>
      </ul>
    </div>
  </div>
</template>

<script>
import logImg from '@/assets/mi-logo-2.png'
export default {
  data () {
    return {
      logImgSrc: logImg
    }
  },
  methods: {}
}
</script>
<style scoped>
.login {
  width: 100%;
  padding: 80px 40px;
}
.logo .logo-image {
  display: flex;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background: #ff6700;
}
.logo .logo-image img {
  width: 80px;
  height: 50px;
  margin: auto;
}
.logo .logo-title {
  display: block;
  width: 100%;
  height: 80px;
  line-height: 80px;
  font-size: 36px;
  text-align: center;
}
.input-box {
  width: 100%;
  height: 220px;
  color: #9b9b9b;
}
.input-box label {
  display: flex;
  width: 100%;
  height: 110px;
}
.input-box label {
  border-bottom: 2px solid #f66 !important;
}
.input-box .l-user .phone86 {
  width: 20%;
  height: 110px;
  line-height: 110px;
  font-size: 36px;
}
.input-box .l-user input {
  float: left;
  width: 80%;
  height: 108px;
  line-height: 110px;
  font-size: 36px;
  border: none;
  outline: none;
  -webkit-appearance: none;
}
.input-box .l-pwd input {
  float: left;
  width: 60%;
  line-height: 110px;
  font-size: 36px;
  border: none;
  outline: none;
  -webkit-appearance: none;
}
.input-box .l-pwd .code {
  width: 40%;
  line-height: 110px;
  font-size: 28px;
  text-align: center;
  color: #6ba5e9;
}
.btn-orange {
  background-color: #ff6700;
}
.btn-white {
  color: #000;
  background-color: #fff;
  border: 2px solid #d3d3d3;
}
fieldset {
  text-align: center;
  border: 0;
  border-top: 6px solid #f2f2f2;
  padding-top: 10px;
}

.other-login {
  color: #b0b0b0;
  width: 180px;
}
.i-other-login {
  width: 100%;
  height: 100px;
  text-align: center;
}
.i-other-login i {
  display: inline-block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 58px;
}
.i-other-login .i1 {
  color: #ed9090;
}
.i-other-login .i2 {
  color: #6bb6ea;
}
.i-other-login .i3 {
  color: #49af91;
}

.language {
  width: 100%;
  height: 40px;
  text-align: center;
}
.language ul {
  display: inline-block;
  text-align: center;
}
.language ul li {
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  line-height: 40px;
}
</style>
