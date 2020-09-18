<template>
  <div class="login-by">
    <img src="../../../assets/img/common/back.png" alt="" class="back" @click="backToLogin">
    <div v-if="isPhone === true">
      <div class="title">手机号登录</div>
      <div class="content">
        <div v-if="!phoneNext">
          <span>未注册手机号登陆后将自动创建账号</span>
          <input type="text" placeholder="请输入手机号" v-model="phoneNumber">
          <button @click="phoneToNext">下一步</button>
        </div>
        <div v-else>
          <input type="password" placeholder="请输入密码" v-model="phonePassword">
          <button @click="phonelogin">登录</button>
        </div>
      </div>
    </div>
    <div v-if="isEmail === true">
      <div class="title">网易邮箱账号登录</div>
      <div class="content">
        <input type="text" placeholder="请输入邮箱账号" v-model="email">
        <input type="password" placeholder="请输入密码" v-model="emailPassword">
        <button @click="emaillogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {loginByPhone, loginByEmail} from "../../../network/login";

  export default {
    name: "LoginBy",
    props: {
      isPhone: Boolean,
      isEmail: Boolean
    },
    data() {
      return {
        phoneNext: false,
        phoneNumber: '',
        phonePassword: '',
        email: '',
        emailPassword: ''
      }
    },
    methods: {
      loginByPhone(account,password) {
        loginByPhone(account,password).then(res => {
          let userInfo = {}
          userInfo.cookie = res.cookie
          userInfo.profile = res.profile
          console.log(userInfo);
          this.$store.dispatch('getUserInfo',userInfo).then( res => {
            this.$router.go(-1)
          })
        })
      },
      loginByEmail(account, password) {
        loginByEmail(account,password).then(res => {
          let userInfo = {}
          userInfo.cookie = res.cookie
          userInfo.profile = res.profile
          console.log(userInfo);
          this.$store.dispatch('getUserInfo',userInfo).then( res => {
            this.$router.go(-1)
          })
        })
      },

      backToLogin() {
        this.$emit('backtologin')
      },
      phoneToNext() {
        if (this.phoneNumber.trim().length===11 && !isNaN(this.phoneNumber)) {
          this.phoneNext = true
        }else {
          this.$toast.show('请输入11位数字的手机号')
        }
      },
      phonelogin() {
        if (this.phonePassword.trim().length === 0) {
          this.$toast.show('请输入密码')
        } else {
          this.loginByPhone(this.phoneNumber,this.phonePassword)
        }
      },
      emaillogin() {
        if (this.email.trim().length === 0) {
          this.$toast.show('请输入邮箱账号')
        }
        else if (this.emailPassword.trim().length === 0) {
          this.$toast.show('请输入密码')
        } else {
          this.loginByEmail(this.email, this.emailPassword)
        }
      }
    }
  }
</script>

<style scoped>
  .login-by {
    background-color: #fff;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    position: fixed;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .back {
    position: absolute;
    width: 40px;
    left: 15px;
    top: 20px;
  }

  .title {
    color: #000000;
    font-size: 19px;
    font-weight: bold;
    position: absolute;
    left: 80px;
    top: 30px;
  }

  button {
    background-color: #dc2c1f;
    color: #fff;
    border: none;
    padding: 10px;
    width: 250px;
    border-radius: 25px;
    outline: none;
    margin: 10px 0;
  }

  .content {
    margin-top: 80px;
  }

  .content span {
    font-size: 13px;
    float: left;
    margin-left: 20px;
    margin-bottom: 30px;
  }

  .content input {
    width: 90%;
    font-size: 18px;
    padding: 5px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #999;
    outline: none;
  }
</style>
