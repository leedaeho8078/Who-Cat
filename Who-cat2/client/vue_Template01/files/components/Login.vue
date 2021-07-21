<template>
  <div style="padding:100px 100px 100px 650px;">
    <div class="col-md-12 col-sm-12 col-xs-12 login-block">
      <div class="login-check">
        <h3>login</h3>
        <div class="col-md-7 col-sm-6 col-xs-6 login-form">
          <form>
            <div class="form-group">
              <input class="form-control" placeholder="아이디" type="text" />
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="비밀번호" type="password" />
            </div>

            <nuxt-link to="/about"> <button style="padding: 5px 10px; background-color:#eddd5e; border:none; margin:10px; border-radius:8px;">login</button></nuxt-link>

            <nuxt-link to="/signinpage"><button style="padding: 5px 10px; background-color:#50CB93; border:none; margin:10px; border-radius:8px;">Join</button></nuxt-link>



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
      sampleData: ""
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
   
},
};
</script>
