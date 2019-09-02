<template>
  <div class="login">
    <div class="logo">
      <span class="logo-image">
        <img :src="logImgSrc" alt />
      </span>
      <span class="logo-title">小米账号登录</span>
    </div>
    <div class="input-box clearfix">
      <form action>
        <div v-show="optLogin==='f1'?true:false" class="login-f1">
          <label for="uPhone" class="l-uPhone">
            <div class="phone86">
              <span>+86</span>
              <i class="iconfont icon-xiangyoujiantou"></i>
            </div>
            <input type="text" id="uPhone" v-model="loginInfo.phone" placeholder="手机号码" />
          </label>

          <label for="uCode" class="l-uCode">
            <input type="text" id="uCode" v-model="loginInfo.code" placeholder="短信验证码" />
            <div class="code">获取验证码</div>
          </label>
          <div class="err" v-show="errShow">
            <i class="iconfont icon-open-warn"></i>
            <span v-text="errText"></span>
          </div>
          <mt-button
            type="primary"
            size="large"
            class="btn btn-orange"
            @click="handleSubmit"
          >立即登录/注册</mt-button>
          <mt-button
            type="primary"
            size="large"
            class="btn btn-white"
            @click="changeLogin('f2')"
          >用户名密码登录</mt-button>
        </div>
        <div v-show="optLogin==='f2'?true:false" class="login-f2">
          <label for="uName" class="l-uName">
            <input type="text" id="uName" v-model="loginInfo.username" placeholder="邮箱/手机号码/小米账号" />
          </label>
          <label for="uPwd" class="l-uPwd">
            <input :type="pwdType" id="uPwd" v-model="loginInfo.password" placeholder="密码" />
            <div class="eyes" :class="{'active':PwdShow}" @click="changePwd">
              <i class="iconfont icon-yanjing"></i>
            </div>
          </label>
          <div class="err" v-show="errShow">
            <i class="iconfont icon-open-warn"></i>
            <span v-text="errText"></span>
          </div>
          <mt-button type="primary" size="large" class="btn btn-orange" @click="handleSubmit">登录</mt-button>
          <mt-button
            type="primary"
            size="large"
            class="btn btn-white"
            @click="changeLogin('f1')"
          >手机登录/注册</mt-button>
        </div>
      </form>
    </div>

    <fieldset>
      <legend class="other-login">其它方式登录</legend>
    </fieldset>

    <div class="i-other-login">
      <i class="iconfont icon-weibo i1"></i>
      <i class="iconfont icon-zhifubao2 i2"></i>
      <i class="iconfont icon-weixin1 i3"></i>
    </div>

    <div class="language">
      <ul>
        <li class="active">简体</li>
        <li>|</li>
        <li>繁体</li>
        <li>|</li>
        <li>English</li>
        <li>|</li>
        <li>常见问题</li>
        <li>|</li>
        <li>隐私政策</li>
      </ul>
    </div>
  </div>
</template>

<script>
import logImg from '@/assets/mi-logo-2.png'
import { MessageBox } from 'mint-ui'
import { getLogin } from '@/api/axios'
export default {
  data () {
    return {
      logImgSrc: logImg,
      optLogin: 'f1',
      pwdType: 'password',
      PwdShow: false,
      errShow: false,
      errText: '请输入手机号',
      loginInfo: {
        username: '',
        password: '',
        phone: '',
        code: ''
      }
    }
  },

  computed: {
    errors () {
      return this.$vuerify.$errors
    }
  },
  vuerify: {
    'loginInfo.username': {
      test: /^[a-zA-Z0-9_-]{4,16}$/,
      message: '用户名长度为4-16位'
    },
    'loginInfo.password': {
      test: /^[0-9A-Za-z]{6,}$/,
      message: '密码长度至少六位'
    },
    'loginInfo.phone': {
      test: /^\d{11}$/,
      message: '手机号为11位阿拉伯数字'
    },
    'loginInfo.code': {
      test: /^\d{6}$/,
      message: '验证码为6位数字'
    }
  },

  methods: {
    changeLogin (f) {
      if (f === 'f1') {
        this.optLogin = 'f1'
      }
      if (f === 'f2') {
        this.optLogin = 'f2'
      }
    },
    changePwd () {
      this.PwdShow ? (this.PwdShow = false) : (this.PwdShow = true)
      this.pwdType = this.pwdType === 'password' ? 'text' : 'password'
    },
    checkSuccess () {
      // 表单校验成功
      this.errText = ''
      this.errShow = true
      getLogin()
        .then(res => {
          let userInfo = []
          userInfo[0] = res.data
          this.setStorge(userInfo)
          console.log('登陆成功')
          console.log(res.data)
          console.log(window.localStorage.getItem('userInfo'))
        })
        .catch(error => {
          console.log(error)
        })
      MessageBox({
        title: '温馨提示',
        message: '登陆成功'
      }).then(res => {
        window.location.hash = '#/mine'
      })
    },
    checkFail () {
      // 表单校验失败
      this.errText =
        this.$vuerify.$errors['loginInfo.phone'] ||
        this.$vuerify.$errors['loginInfo.code'] ||
        this.$vuerify.$errors['loginInfo.username'] ||
        this.$vuerify.$errors['loginInfo.password']
      this.errShow = true
      console.log('err')
    },
    handleSubmit () {
      console.log(this.$vuerify.$errors)

      console.log(this.optLogin)
      let result = false
      if (this.optLogin === 'f1') {
        result = this.$vuerify.check(['loginInfo.phone', 'loginInfo.code'])
      }
      if (this.optLogin === 'f2') {
        result = this.$vuerify.check([
          'loginInfo.username',
          'loginInfo.password'
        ])
      }
      if (result) {
        this.checkSuccess()
      } else {
        this.checkFail()
      }
    }
  }
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
  border-radius: 10px;
  background: #ff6700;
}
.logo .logo-image img {
  width: 60px;
  height: 40px;
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
  color: #9b9b9b;
  font-size: 36px;
}
.input-box input {
  font-size: 36px;
  color: #4a4a4a;
  border: none;
  outline: none;
  -webkit-appearance: none;
}
.input-box label {
  display: flex;
  width: 100%;
  height: 110px;
}
.input-box label {
  border-bottom: 2px solid #f66 !important;
}
.login-f1 .l-uPhone .phone86 {
  width: 20%;
  height: 110px;
  line-height: 110px;
  text-align: center;
}
.login-f1 .l-uPhone .phone86 span {
  width: 60%;
}
.login-f1 .l-uPhone .phone86 i {
  width: 40%;
}
.login-f1 .l-uPhone input {
  float: left;
  width: 80%;
  height: 108px;
  line-height: 110px;
}
.login-f1 .l-uCode input {
  float: left;
  width: 60%;
  line-height: 110px;
}
.login-f1 .l-uCode .code {
  width: 40%;
  line-height: 110px;
  font-size: 28px;
  text-align: center;
  color: #6ba5e9;
}
.login-f2 .l-uName input {
  width: 100%;
}
.login-f2 .l-uPwd {
  width: 100%;
}
.login-f2 .l-uPwd input {
  float: left;
  width: 90%;
  line-height: 110px;
}
.eyes {
  width: 10%;
  line-height: 110px;
  font-size: 28px;
  text-align: center;
}
.eyes.active {
  color: #ff9650;
}
.btn {
  margin-top: 40px;
}
.btn-orange {
  background-color: #ff6700;
}
.btn-white {
  color: #000;
  background-color: #fff;
  border: 2px solid #d3d3d3;
}
.err {
  width: 100%;
  height: 80px;
  line-height: 80px;
  font-size: 28px;
  color: #ff9997;
}
.err i {
  display: inline-block;
  width: 40px;
  line-height: 80px;
}
fieldset {
  margin-top: 80px;
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
  margin-top: 40px;
  text-align: center;
  color: #9b9b9b;
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
.language ul li.active {
  color: #4a4a4a;
}
</style>
