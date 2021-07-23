<template>
  <div style="padding:100px 100px 100px 650px;">
    <div class="col-md-12 col-sm-12 col-xs-12 login-block">
      <div class="login-check">
        <h3>Join</h3>
        <div class="col-md-7 col-sm-6 col-xs-6 login-form">
          <form>
            <div class="form-group">
              <input class="form-control" placeholder="이름" type="text" v-model="userName" />
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="아이디" type="text" v-model="userAccount"/>
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="비밀번호" type="password" v-model="userPassword" />
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="주소" type="text" v-model="userAddress" />
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="전화번호" type="text" v-model="userTell" />
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="이메일" type="text" v-model="userEmail"/>
            </div>
              <div class="form-group">
              <input class="form-control" placeholder="등록 조회시 사용되는 고유숫자 4자리" type="text" v-model="userId"/>
            </div>
            

           

            <button style="padding: 5px 10px; background-color:#50CB93; border:none; margin:10px; border-radius:8px;" @click="createUser">Join</button>



            <!-- <a href="#" title="Forgot Password?">Forgot Password?</a> -->
          </form>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
      userName:"",
      userAccount:"",
      userPassword :"",
      userAddress :"",
      userTell :"",
      userEmail:"",
      userId: "",


    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
     async createUser() {
      const r = await this.$api("/api/createUser", "post", {
        param: [
          {
            userId: this.userId,
            userName : this.userName,
            userAccount : this.userAccount,
            userPassword : this.userPassword,
            userAddress : this.userAddress,
            userTell : this.userTell,
            userEmail : this.userEmail,
          }
        ]
      });
      console.log(r);
      alert("회원가입 완료다옹 !! 😻");

      
    }
   
},
};
</script>