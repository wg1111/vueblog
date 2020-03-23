<template>
  <div>
    <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
      <h3 class="loginTitle">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="请输入用户密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="login">登录</el-button>
    </el-form>
  </div>
</template>

<script>

  export default {
        name: "Login",
      data(){
          return {
            loginForm:{
              username:'admin',
              password:123
            },
            checked:true,
            rules:{
              username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
              password: [{required: true, message: '密码不能为空', trigger: 'blur'}],
            }
          }
      },
      methods:{
          login(){
            this.$refs.loginForm.validate((valid) => {
              if (valid) {
                this.postKeyValueReqest('/doLogin',this.loginForm).then(resp=>{
                  if (resp){
                    // alert(JSON.stringify(resp))
                    window.sessionStorage.setItem("user",JSON.stringify(resp.obj))//用户信息存入session
                    this.$router.replace('/home')
                  }
                })
              } else {
                this.$message.error('请输入完整的用户信息在进行登录');
                return false;
              }
            });
          }
      }
    }
</script>

<style scoped>
  .loginContainer{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width:350px;
    padding: 15px 35px 15px 35px;
    border:1px solid #eaeaea;
    background: #fff;
    box-shadow: 0 0 25px #cac6c6;
  }

  .loginTitle{
    margin:15px auto 15px auto ;
    text-align: center;
    color: #505456;
  }
  .remember{
    text-align: left;
    margin: 0px 0px 15px 0px;
  }
</style>
