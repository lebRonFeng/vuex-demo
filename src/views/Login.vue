<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="form-item">
        <label for="">账号：</label>
        <input type="text" v-model="loginId" />
      </div>
      <div class="form-item">
        <label for="">密码：</label>
        <input type="text" autocomplete="new-password" v-model="loginPwd" />
      </div>
      <div class="form-item">
        <label for="">账号：</label>
        <button :disabled="loading">
          {{ loading ? "loading..." : "登录" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {
      loginId: "",
      loginPwd: "",
    }
  },

  // 第一种处理方式：
  // computed: {
  //   loading() {
  //     return this.$store.state.loginUser.loading;
  //   }
  // },

  // 第二种处理方式： 
  // computed: mapState({
  //   loading: (state) => state.loginUser.loading
  // }),

  // 第三种处理方式
  // computed: {
  //   loading: mapState({
  //     loading: (state) => state.loginUser.loading
  //   }).loading
  // },

  // 第四中处理方式
  // computed: {
  //   ...mapState({
  //     loading: (state) => state.loginUser.loading
  //   }),
  // }, 

  // 第五种处理方式
  // computed:{
  //   ...mapState("loginUser",{
  //     loading: "loading"
  //   })
  // },

  // 第六种处理方式
  computed:{
    ...mapState("loginUser", ["loading"])
  },
  methods: {
    async handleSubmit() {
      const resp = await this.$store.dispatch("loginUser/login", {
        loginId: this.loginId,
        loginPwd: this.loginPwd
      });
      if (resp) {
        this.$router.push("/");
      } else {
        alert("账号密码错误")
      }
      console.log("登录", this.loginId, this.loginPwd)
    }
  }
}
</script>

<style scoped>
.form-item {
  margin: 1em auto;
  width: 300px;
  display: flex;
  align-items: center;
}

.form-item input {
  height: 26px;
  font-size: 14px;
  flex: 1 1 auto;
}

.form-item label {
  width: 70px;
}

.form-item button {
  flex: 1 1 auto;
  background: #50936c;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  height: 35px;
  font-size: 16px;
}
</style>