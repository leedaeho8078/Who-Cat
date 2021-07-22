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
                @change="fileSelect"
                type="file"
                class="form-control"
                accept=".jpg, .png"
              />
              <div class="alert alert-secondary" role="alert">
                <ul>
                  <li>고양이의 얼굴을 등록해주세요.</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <input
                @change="fileSelect"
                type="file"
                class="form-control"
                accept=".jpg, .png"
              />
              <div class="alert alert-secondary" role="alert">
                <ul>
                  <li>고양이의 비문을 등록해주세요.</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="고양이 이름을 입력해주세요."
                  v-model="catName"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="input-group"
                style="color:black; background-color:#eceeef; border-radius: 5px; height:80px; padding:27px;"
              >
                <label
                  ><input
                    type="radio"
                    value="중성"
                    name="gender"
                    v-model="catGender"
                  />중성화완료</label
                >
                <label
                  ><input
                    type="radio"
                    value="암컷"
                    name="gender"
                    v-model="catGender"
                  />암컷</label
                >
                <label
                  ><input
                    type="radio"
                    value="수컷"
                    name="gender"
                    v-model="catGender"
                  />수컷</label
                >

                <!-- <div class="input-group">
                <input type="text" name="name" placeholder="고양이 성별" /> -->
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group">
                <input
                  type="text"
                  name="number"
                  placeholder="고양이 생일"
                  v-model.number="catBirth"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="고양이 품종을 입력해주세요."
                  v-model="catSpecies"
                />
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
                  placeholder="고양이 특이사항을 입력해주세요."
                  v-model="ps"
                ></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="input-group">
                <input
                  type="password"
                  maxlength="4"
                  name="userid"
                  placeholder="보호자 아이디를 숫자4자리로 입력해주세요."
                  v-model.number="userId"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group">
                <input
                  type="text"
                  name="username"
                  placeholder="보호자 이름을 입력해주세요."
                  v-model="userName"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="input-group"
                style="color:black; background-color:#eceeef; border-radius: 5px; height:80px; padding:27px;"
              >
                <label
                  ><input
                    type="radio"
                    value="Y"
                    name="missingYN"
                    v-model="missingYN"
                  />유실묘(O)</label
                >
                <label
                  ><input
                    type="radio"
                    value="N"
                    name="missingYN"
                    v-model="missingYN"
                  />유실묘(X)</label
                >

                <!-- <div class="input-group">
                <input type="text" name="name" placeholder="고양이 성별" /> -->
              </div>
            </div>
            <div class="col-md-12">
              <div
                class="input-group contact__btn"
                style="align-content:center"
              >
                <button
                  type="button"
                  class="thm-btn contact-one__btn"
                  @click="createCat()"
                  style="margin:0px 0px 0px 450px"
                >
                  등록하기
                </button>

                <br />
                <br />

                <!-- <button
                  type="submit"
                  class="thm-btn contact-one__btn"
                  @click="getList()"
                  style="margin:30px 0px 0px 450px"
                >
                  불러오기
                </button>
                <span
                  style="color:tomato;
                margin:50px 0 0 0"
                >
                  생성된 고유 고양이 id:{{ catId }}</span
                > -->
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
  components: {},
  data() {
    return {
      list: [],
      catName: "",
      catGender: "",
      catBirth: "",
      catSpecies: "",
      ps: "",
      missingYN: "",
      userName: "",
      userId: "",
      imageList: [],
      cat: {},
      catId: ""
    };
  },
  setup() {},
  created() {},
  mounted() {
    // this.getList();
  },
  unmounted() {},
  methods: {
    async getList() {
      this.list = await this.$api("/api/catList", "post", {});
      this.catId = this.list[this.list.length - 1]["catId"];
      console.log(this.list);
      alert("고양이 고유 아이디:" + this.catId);
    },
    // async getcatDetail() {
    //   const cat = await this.$api("/api/getcatDetail", "post", {
    //     param: [this.catName]
    //   });
    //   if (cat.length > 0) {
    //     this.cat = cat[0];
    //   }
    // },
    async createCat() {
      const r = await this.$api("/api/createCat", "post", {
        param: [
          {
            catName: this.catName,
            catGender: this.catGender,
            catBirth: this.catBirth,
            catSpecies: this.catSpecies,
            ps: this.ps,
            missingYN: this.missingYN,
            userName: this.userName,
            userId: this.userId,
            image1: this.imageList[0].filename,
            image2: this.imageList[1].filename
          }
        ]
      });
      console.log(r);
      this.$router.push({ path: "/service", query: { catid: r.insertId } });
      // this.getList();
    },
    async fileSelect(e) {
      const r = await this.$upload("/api/uploadFile", e.target.files[0]);
      console.log(r);
      this.imageList.push({
        // src: `http://localhost:3001/static/${r.filename}`,
        filename: r.filename,
        originalname: r.originalname
      });
    }
  }
};
</script>

<style scoped></style>
