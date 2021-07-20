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
                placeholder="고양이 고유ID를 입력해주세요."
              />
            </div>
          </div>

          <div class="col-md-12">
            <div class="input-group contact__btn">
              <button type="submit" class="thm-btn contact-one__btn">
                조회하기
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicePage"
};
</script>

<style scoped></style>
