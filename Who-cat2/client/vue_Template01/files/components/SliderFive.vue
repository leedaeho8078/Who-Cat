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
                      <nuxt-link to="/loginpage" class="thm-btn"
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
                      반려묘를 등록하면, 반려묘 유실시 빠른 시일 내에 찾는 것을
                      도울 수 있습니다. 등록 후 '외장형 전자태그'를 소장할 수
                      있습니다. 외장형 전자태그란, 목걸이형태의 팬던트 내부에
                      RFID칩을 삽입하여 외장칩만으로 등록이 가능하며 체내
                      마이크로칩 삽입 시술을 하지 않아서 내 반려묘가 아파하지
                      않아요.
                    </p>
                    <div class="link-box">
                      <nuxt-link to="/loginpage" class="thm-btn"
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
                      비문인식 디바이스 구매 없이 스마트폰 카메라로 간편하게
                      등록하세요! 누구냥에서는 별도의 인식 디바이스 구매 없이
                      온라인 또는 스마트폰 카메라로 비문을 촬영하여 간단하게
                      반려묘를 등록할 수 있습니다. 사랑하는 우리 아이들을 위해
                      반려묘를 꼭 등록해주세요.
                    </p>
                    <div class="link-box">
                      <nuxt-link to="/loginpage" class="thm-btn"
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
