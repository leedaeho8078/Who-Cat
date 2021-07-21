<template>
  <section class="bx-testimonial">
    <div
      class="bx-testimonial_bg"
      style="background-image: url(/assets/images/testimonials/bx-testi-bg.png)"
    ></div>
    <div class="container">
      <div class="block-title text-center">
        <p>외장형 전자태그란?</p>
        <h3>WHO-CAT</h3>
        <div class="leaf">
          <img src="/assets/images/resources/leaf.png" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="bx_testimonial_slider">
            <div class="slider-pager">
              <ul class="thumb-box list-unstyled text-center">
                <li>
                  <a class="active" data-slide-index="0" href="#">
                    <div class="img-holder">
                      <img
                        src="http://localhost:3000/assets/images/resources/logo.png"
                        alt=""
                      />
                      <div class="quote_testimonial">
                        <img src="/assets/images/icon/quote_1.png" alt="" />
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <ul
              class="slider-content clearfix bxslider list-unstyled text-center"
            >
              <no-ssr>
                <carousel
                  :items="1"
                  :autoplay="true"
                  :nav="false"
                  :dots="false"
                >
                  <li>
                    <div class="bx_testimonial_single clearfix">
                      <div class="bx_testimonial_text">
                        <p>
                          반려묘를 등록하면, 반려묘 유실시 빠른 시일 내에 찾는
                          것을 도울 수 있습니다. 등록 후 '외장형 전자태그'를
                          소장할 수 있습니다.
                        </p>
                        <h3>누구냥 만의 독보적인 디자인</h3>
                        <h6>외장형 전자태그</h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="bx_testimonial_single clearfix">
                      <div class="bx_testimonial_text">
                        <p>
                          외장형 전자태그란, 목걸이형태의 팬던트 내부에 RFID칩을
                          삽입하여 외장칩만으로 등록이 가능합니다.
                        </p>
                        <h3>누구냥 만의 간편한 사용성</h3>
                        <h6>외장형 전자태그</h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="bx_testimonial_single clearfix">
                      <div class="bx_testimonial_text">
                        <p>
                          외장형 전자태그는, 체내 마이크로칩 삽입 시술을 하지
                          않아서 내 반려묘가 아파하지 않아요.
                        </p>
                        <h3>누구냥 만의 높은 활용성</h3>
                        <h6>외장형 전자태그</h6>
                      </div>
                    </div>
                  </li>
                </carousel>
              </no-ssr>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialFour"
};
</script>

<style scoped></style>
