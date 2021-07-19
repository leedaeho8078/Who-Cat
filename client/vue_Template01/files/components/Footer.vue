<template>
  <div>
    <footer class="site-footer">
      <div class="site-footer_farm_image">
        <img
          src="/assets/images/resources/site-footer-farm.png"
          alt="Farm Image"
        />
      </div>

      <div class="container">
        <div class="row no-gutters">
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div
              class="footer-widget__column footer-widget__about wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div class="footer-widget__title">
                <h3>About</h3>
              </div>
              <div class="footer-widget_about_text">
                <p>당신의 바른 반려생활 누구냥이 응원합니다.</p>
              </div>
              <form>
                <div class="footer_input-box">
                  <input type="Email" placeholder="Email Address" />
                  <button type="submit" class="button">
                    <i class="fa fa-check"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-6">
            <div
              class="footer-widget__column footer-widget__link wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div class="footer-widget__title">
                <h3>Explore</h3>
              </div>
              <ul class="footer-widget__links-list list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="/about">등록</a></li>
                <li><a href="/service">조회</a></li>
                <li><a href="/product">굿즈</a></li>
                <li><a href="/contact">고객센터</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div
              class="footer-widget__column footer-widget__news wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div class="footer-widget__title">
                <h3>누구냥 굿즈</h3>
              </div>
              <ul class="footer-widget__news list-unstyled">
                <li>
                  <div class="footer-widget__news_image">
                    <img
                      src="https://www.idpet.co.kr/upload/product/75895_%EC%99%B8%EC%9E%A5%ED%83%9C%EA%B7%B8%ED%8F%AC%EC%9E%A5_%EB%94%A5%EA%B7%B8%EB%A6%B0_%EA%B8%80%EC%9E%90.jpg"
                      alt=""
                    />
                  </div>
                  <div class="footer-widget__news_text">
                    <p>
                      <a href="/product"> 누구냥 <br />외장태그(검정)</a>
                    </p>
                  </div>
                  <div class="footer-widget__news_date_box">
                    <p>25,000원</p>
                  </div>
                </li>
                <li>
                  <div class="footer-widget__news_image">
                    <img
                      src="https://www.idpet.co.kr/upload/product/KakaoTalk_20210611_163025708.png"
                      alt=""
                    />
                  </div>
                  <div class="footer-widget__news_text">
                    <p>
                      <a href="/product">누구냥<br />냥여권</a>
                    </p>
                  </div>
                  <div class="footer-widget__news_date_box">
                    <p>10,000원</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div
              class="footer-widget__column footer-widget__contact wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div class="footer-widget__title">
                <h3>Contact</h3>
              </div>
              <div class="footer-widget_contact">
                <p>서울 영등포구 양산로 53 월드메르디앙비즈센터</p>
                <a
                  href="mailto:whocat@naver.com
"
                  >whocat@naver.com </a
                ><br />
                <a href="tel:010-7070-8080">010 7070 8080</a>
                <div class="site-footer__social">
                  <a href="#"><i class="fab fa-facebook-square"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-dribbble"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div class="site-footer_bottom">
      <div class="container">
        <div class="site-footer_bottom_copyright">
          <!-- <p>@ All copyright 2020, <a href="#">Layerdrops.com</a></p> -->
          <p>이대호 정재승 김규비 권태헌</p>
        </div>
        <!-- <div class="site-footer_bottom_menu">
          <ul class="list-unstyled">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div> -->
      </div>
    </div>

    <a
      @click="scrollTop"
      href="#"
      class="scroll-to-target scroll-to-top"
      :style="`display: ${scrollBtn ? 'block' : 'none'}`"
      ><i class="fa fa-angle-up"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      scrollBtn: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.scrollBtn = true;
      } else if (window.scrollY < 70) {
        this.scrollBtn = false;
      }
    },

    scrollTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped></style>
