<template>
  <section class="about_two">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="block-title text-left">
            <p>쉽고 빠르게 반려묘를 등록하세요.</p>
            <div style="margin-top:20px">
              <p style="font-size:40px; color:#44433D">반려묘 등록</p>
            </div>
            <p></p>
            <div class="leaf">
              <img src="/assets/images/resources/leaf.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="about_two_text">
            <p style="font-size:17.5px; color:#757572">
              왜 고양이 비문 등록을 해야 하나요? 사람의 손 지문처럼 반려견마다
              비문(코 지문)이 모두 다르며 나이가 들어도 변하지 않아요.비문(코
              지문)이 등록된 프로필을 만들기 때문에 비문(코 지문)을 조회하면
              등록되어있는 고양이의 프로필을 확인할 수 있어요.
            </p>
          </div>
        </div>
      </div>
      <div class="contact-one__form__wrap">
        <form action="#" class="contact-one__form">
          <div class="row low-gutters">
            <div class="col-md-6">
              <input
                type="file"
                class="form-control"
                accept="image/png,image/jpeg"
              />
              <div class="alert alert-secondary" role="alert">
                <ul>
                  <li>고양이의 얼굴을 등록해주세요.</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <input
                type="file"
                class="form-control"
                accept="image/png,image/jpeg"
              />
              <div class="alert alert-secondary" role="alert">
                <ul>
                  <li>고양이의 비문을 등록해주세요.</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group">
                <input type="text" name="name" placeholder="고양이 이름을 입력해주세요." v-model="catName" />
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="input-group"
                style="color:black; background-color:#eceeef; border-radius: 5px; height:80px; padding:27px;"
              >
                <label><input type="radio" value="0" name="gender" v-model="catGender"/>중성화완료</label>               
                  <label><input type="radio" value="1" name="gender" v-model="catGender"/>암컷</label>
                  <label><input type="radio" value="2" name="gender" v-model="catGender"/>수컷</label>

                  <!-- <div class="input-group">
                <input type="text" name="name" placeholder="고양이 성별" /> -->
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group">
                <input type="text" name="number" placeholder="고양이 생일" v-model.number="catBirth"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group">
                <input type="text" name="subject" placeholder="고양이 품종을 입력해주세요." v-model="catSpecies" />
              </div>
            </div>
            <!-- <div class="col-md-6">
              <div class="input-group">
                <input type="text" name="name" placeholder="보호자 이름을 입력해주세요." v-model="parentsName" />
              </div>
            </div> -->
            <!-- <div class="col-md-6">
              <div class="input-group">
                <input type="text" name="name" placeholder="보호자 주소을 입력해주세요." v-model="parentsAddress"/>
              </div>
            </div> -->
            <!-- <div class="col-md-6">
              <div class="input-group">
                <input type="text" name="phone" placeholder="보호자 연락처를 입력해주세요." v-model="parentsContact" />
              </div>
            </div> -->
            <!-- <div class="col-md-6">
              <div class="input-group">
                <input type="text" name="email" placeholder="보호자 이메일을 입력해주세요." v-model="parentsEmail"/>
              </div>
            </div> -->

            <div class="col-md-12">
              <div class="input-group">
                <textarea
                  name="message"
                  placeholder="고양이 특이사항을 입력해주세요." v-model="ps"
                ></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div
                class="input-group contact__btn"
                style="align-content:center"
              >
                <button type="submit" class="thm-btn contact-one__btn" @click="createCat()">
                  제출하기
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- <div class="row">
        <div class="col-xl-5 col-lg-5">
          <div class="about_two_left">
            <img src="/assets/images/about/about_page_left-img.jpg" alt="" />
          </div>
        </div>
        <div class="col-xl-5 col-lg-5">
          <div class="about_two_middle">
            <img src="/assets/images/about/about_page_middle-img.jpg" alt="" />
          </div>
        </div>
        <div class="col-xl-2 col-lg-2">
          <div class="about_two-right">
            <img src="/assets/images/about/about_page_right-img.jpg" alt="" />
            <div class="about_two_content">
              <h2>We’ve 40 Years Agriculture Experience</h2>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutTwo",
  components:{},
  data(){
    return {
      list :[],
      catName:"",
      catGender:"",
      catBirth:"",
      catSpecies:"",
      ps:"",
    };

  },
  setup(){},
  created(){},
  mounted(){
    // this.getList();
  },
  unmounted(){},
  methods:{
    async getList(){
      this.list = await this.$api("/api/getList","get",{});
      console.log(this.list);
    },
    async createCat(){
      const r = await this.$api("/api/createCat","post",{
        param : [
          {
          catName : this.catName,
           catGender : this.catGender,
           catBirth : this.catBirth,
           catSpecies : this.catSpecies,
           ps : this.ps,
          },
   
        ],
      });
          console.log(r);
          this.getList();
    },

  }

};
</script>

<style scoped></style>
