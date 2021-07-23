<template>
  <section class="service_four service_page">
    <div class="container">
      <div class="service_four_top"></div>
      <div class="block-title text-center">
        <p>쉽고 빠르게 고양이를 조회하세요.</p>
        <br />
        <p style="font-size:40px; color:#44433D">반려묘 조회</p>
        <div class="leaf">
          <img src="/assets/images/resources/leaf.png" alt="" />
        </div>
      </div>
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
                <li>고양이의 비문을 등록해주세요.</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-group">
              <input
                type="text"
                name="number"
                v-model.number="number"
                placeholder="고양이 고유ID를 입력해주세요."
              />
            </div>
          </div>

          <div class="col-md-12">
            <div class="input-group contact__btn">
              <button
                type="button"
                class="thm-btn contact-one__btn"
                @click="getDetail()"
                style="margin-left:450px"
              >
                조회하기
              </button>
            </div>
          </div>
        </div>

        <br />
        <div
          class="card text-white bg-dark mb-3"
          style="max-width: 30rem; margin-left:350px;"
        >
          <img :src="cat.image1" class="card-img-top" alt="" />
          <div class="card-header">
            고양이 고유 아이디:{{ this.cat.catId }} 🐈
          </div>
          <div class="card-body">
            <h5 class="card-title">고양이 이름: {{ this.cat.catName }}</h5>

            <p class="card-text" v-if="cat.userId">
              생일: {{ this.cat.catBirth.substr(0, 10) }} 🎂
              <br />
              종: {{ this.cat.catSpecies }}

              <br />

              성별: {{ this.cat.catGender }}
              <br />

              실종여부: {{ this.cat.missingYN }} 🤦

              <div class="card-header">보호자 아이디: {{ this.cat.userId }} 🙆 
  <br>
        보호자 이름: {{ this.cat.userName }}

              <br>
              보호자 연락처: {{ this.catContact.userTell}} 📞
              <br />
          </div>
            </p>

            <p class="card-text">P.S: {{ this.cat.ps }}</p>
          </div>
        </div>

        <br />

        <div>
          <!-- <table class="table table-dark">
            <thead>
              <th>
                고유 아이디
              </th>
              <th>
                고양이 이름
              </th>
              <th>
                보호자 아이디
              </th>
              <th>
                고양이 생일
              </th>
              <th>
                성별
              </th>
              <th>
                종
              </th>
              <th>
                보호자 이름
              </th>
              <th>
                P.S
              </th>
              <th>
                실종여부
              </th>
            </thead>
            <tbody>
              <tr class="table-active"></tr>

              <tr>
                <td>{{ this.cat.catId }}</td>
                <td>{{ this.cat.catName }}</td>
                <td>{{ this.cat.userId }}</td>
                <td>{{ this.cat.catBirth }}</td>
                <td>{{ this.cat.catGender }}</td>
                <td>{{ this.cat.catSpecies }}</td>
                <td>{{ this.cat.userName }}</td>
                <td>{{ this.cat.ps }}</td>
                <td>{{ this.cat.missingYN }}</td>
              </tr>
            </tbody>
          </table> -->

          <!-- {{ this.cat }} -->

          <br />
          <br />
          <!-- {{ this.catimgPath }} -->
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicePage",
  data() {
    return {
      list: [],
      number: 0,
      cat: {},
      catContact: {}
    };
  },

  mounted() {
    if (this.$route.query.catid) {
      this.number = this.$route.query.catid;
      this.getDetail();
    }
    // this.getDetail();
  },
  methods: {
    async getDetail() {
      const cat = await this.$api("/api/catDetail", "post", {
        param: [this.number]
      });

      const catimgPath = await this.$api("/api/getCatImgPath", "post", {
        param: [this.number]
      });

      if (cat.length > 0) {
        cat[0].image1 = `http://localhost:3001/static/${cat[0].image1}`;
        this.cat = cat[0];
        console.log(this.cat);
      }

      if (cat.length > 0) {
        this.catimgPath = catimgPath[0];
        console.log(this.catimgPath);
      }

      const catContact = await this.$api("/api/getContact", "post", {
        param: [this.cat.userId]
      });

      if (catContact.length > 0) {
        this.catContact = catContact[0];
        console.log(this.catContact);
      }
    }
    // async getList() {
    //   this.list = await this.$api("/api/catList", "post", {});
    //   // if (this.list.catId === this.number) {
    //   // for (let cat of this.list) {
    //   // if (cat.catId === this.number) {
    //   for (let idx in this.list) {
    //     if (this.list[idx].catId === this.number) {
    //       console.log(this.list);
    //     }
    //   }
    //   // }
    //   // }
    //   // }
    // }
  }
};
</script>

<style scoped></style>
