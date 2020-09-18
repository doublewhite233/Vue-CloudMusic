<template>
  <div class="login">
    <login-by v-if="isShowLoginBy" :is-phone="isPhone" :is-email="isEmail" @backtologin="backtologin"></login-by>
    <img src="../../assets/img/common/backwhite.png" alt="" class="back" @click="back">
    <img src="../../assets/img/common/logo.png" alt="" class="logo">
    <div class="choose">
      <button @click="loginByPhone">手机号登陆</button>
      <button @click="loginByMail">网易邮箱登录</button>
      <div class="check">
        <input type="checkbox" v-model="isCheck"><span>&nbsp;&nbsp;同意《用户协议》《隐私政策》《儿童隐私政策》</span>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginBy from "./childComp/LoginBy";

  export default {
    name: "Login",
    components: {
      LoginBy
    },
    data() {
      return {
        isCheck: false,
        isShowLoginBy: false,
        isPhone: false,
        isEmail: false
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      backtologin() {
        this.isShowLoginBy = false
        this.isPhone = false
        this.isEmail = false
      },
      loginByPhone() {
        if (this.isCheck === false) {
          this.$toast.show('请先勾选同意《用户协议》《隐私政策》《儿童隐私政策》',1500)
        }
        else {
          this.isShowLoginBy = true
          this.isPhone = true
          this.isEmail = false
        }
      },
      loginByMail() {
        if (this.isCheck === false) {
          this.$toast.show('请先勾选同意《用户协议》《隐私政策》《儿童隐私政策》',1500)
        }
        else {
          this.isShowLoginBy = true
          this.isPhone = false
          this.isEmail = true
        }
      }
    }
  }
</script>

<style scoped>
  .login {
    background-color: #dc2c1f;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    position: fixed;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .logo {
    width: 80px;
    height: 80px;
    margin-top: 150px;
  }

  button {
    background-color: #fff;
    font-weight: bold;
    color: #dc2c1f;
    border: none;
    padding: 12px;
    width: 90%;
    border-radius: 25px;
    outline: none;
    margin: 10px 0;
  }

  span {
    color: #fff;
    font-size: 12px;
  }

  .check {
    margin-top: 20px;
  }

  .choose {
    position: absolute;
    bottom: 30px;
  }

  .back {
    position: absolute;
    width: 40px;
    left: 15px;
    top: 20px;
  }
</style>
