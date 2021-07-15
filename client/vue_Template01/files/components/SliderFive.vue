<template>
  <section class="banner-section banner-five">
    <div class="round_1">
      <img src="/assets/images/main-slider/round_1.png" alt="" />
    </div>
    <div class="round_2">
      <img src="/assets/images/main-slider/round_2.png" alt="" />
    </div>
    <div class="certified_logo">
      <img
        style="width:10%"
        src="/assets/images/main-slider/certified_logo.png"
        alt=""
      />
    </div>
    <div class="banner-carousel five owl-theme owl-carousel">
      <no-ssr>
        <carousel :items="1" :autoplay="true" :nav="false">
          <!-- Slide Item -->
          <div class="slide-item">
            <div
              class="banner_five_bg"
              style="background-image: url(/assets/images/main-slider/banner-five-bg.jpg)"
            ></div>
            <div class="container">
              <div class="row content-box">
                <div class="col-xl-5 content">
                  <div class="inner">
                    <div class="large-title">
                      Cat <br />
                      Identification<br />
                      System
                    </div>

                    <p>
                      고양이 비문이 무엇인가요? 사람에게 지문이 있듯이 고양이
                      코주름도 모두 다르답니다. 따라서 지문처럼 객체를 식별할 때
                      사용합니다. 당신의 바른 반려생활을 위해,반려묘의 비문을
                      등록해주세요.
                    </p>
                    <div class="link-box">
                      <nuxt-link to="/about" class="thm-btn"
                        >등록하기</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide Item -->
          <div class="slide-item">
            <div
              class="banner_five_bg"
              style="background-image: url(/assets/images/main-slider/banner-five-bg.jpg)"
            ></div>
            <div class="container">
              <div class="row content-box">
                <div class="col-xl-5 content">
                  <div class="inner">
                    <div class="large-title">
                      Cat <br />
                      Identification<br />
                      System
                    </div>
                    <p>
                      An qualisque constituam cum. Agam unum disputando ius et,
                      mel id postea voluptua, et vel assum graece feugait.
                    </p>
                    <div class="link-box">
                      <nuxt-link to="/about" class="thm-btn"
                        >등록하기</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide Item -->
          <div class="slide-item">
            <div
              class="banner_five_bg"
              style="background-image: url(/assets/images/main-slider/banner-five-bg.jpg)"
            ></div>
            <div class="container">
              <div class="row content-box">
                <div class="col-xl-5 content">
                  <div class="inner">
                    <div class="large-title">
                      Cat <br />
                      Identification<br />
                      System
                    </div>
                    <p>
                      An qualisque constituam cum. Agam unum disputando ius et,
                      mel id postea voluptua, et vel assum graece feugait.
                    </p>
                    <div class="link-box">
                      <nuxt-link to="/about" class="thm-btn"
                        >등록하기</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>
export default {
  name: "SliderFive"
};
</script>

<style scoped></style>
