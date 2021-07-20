<template>
  <section class="faq_one">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="faq_one_left">
            <div class="block-title text-left">
              <p>frequently asked questions</p>
              <h3>F A Q</h3>
              <div class="leaf">
                <img src="/assets/images/resources/leaf.png" alt="" />
              </div>
            </div>
            <div
              class="faq_one_image"
              style="background-image: url(/assets/images/main-slider/banner-five-bg.jpg)"
            >
              <div class="phone_number">
                <p>
                  질문이 있으시다면 전화주세요!<a href="tel:888-999-0000"
                    >666 888 0000</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="faq_one_right">
            <div class="accrodion-grp" data-grp-name="faq-one-accrodion">
              <div class="accordion-container-one">
                <div class="ac">
                  <p class="ac-q accordion__title-text" tabIndex="0">
                    배송은 언제 되나요?
                  </p>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      반려동물등록과 함께 구매하신 외장칩, 패키지 상품은
                      평균적으로 3영업일 이내 발송됩니다. CJ대한통운으로
                      발송되며 택배사 상황에 따라 최대 7일까지 소요될 수
                      있습니다.
                    </p>
                  </div>
                </div>

                <div class="ac accordion__content">
                  <p class="ac-q accordion__title-text" tabIndex="0">
                    취소는 어떻게 하나요?
                  </p>
                  <div class="ac-a">
                    <p class="accordion__content-desc">
                      취소를 원하신다면 이메일로 메일 부탁드립니다.
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <p class="ac-q accordion__title-text" tabIndex="0">
                    어느 지역에서나 고양이 등록이 가능한가요?
                  </p>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      네. 전국 어디서든 동물등록이 가능하며, 제출완료 직후
                      누구냥[반려묘 등록조회서비스]에서 동물등록번호 확인이
                      가능합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FaqOne",
  mounted() {
    new Accordion(".accordion-container-one");
  }
};
</script>

<style scoped>
.ac {
  margin-top: 10px;
  padding: 10px;
  background: #ffffff;
  box-sizing: border-box;
}

.ac > .ac-q {
  font-size: 20px;
  color: #444;
  padding: 10px 30px 10px 10px;
  margin: 0;
  text-decoration: none;
  display: block;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  font-family: var(--thm-font);
}

.ac.is-active .ac-q {
  color: #5a8b50 !important;
}
.ac > .ac-q::after {
  content: "+";
  text-align: center;
  width: 15px;
  right: 10px;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  position: absolute;
}

.ac > .ac-a {
  overflow: hidden;
  -webkit-transition-property: all;
  transition-property: all;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}

.ac > .ac-a p {
  color: #878e9c;
  margin: 0;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
}

.ac.js-enabled > .ac-a {
  visibility: hidden;
}

.ac.is-active > .ac-a {
  visibility: visible;
}

.ac.is-active > .ac-q::after {
  content: "\2013";
  color: #5a8b50;
}
</style>
