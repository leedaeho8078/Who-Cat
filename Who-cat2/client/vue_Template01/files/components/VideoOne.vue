<template>
  <section
    class="video-one"
    style="background-image: url(/assets/images/main-slider/banner-five-bg.jpg)"
  >
    <div class="container text-center">
      <a
        href="https://www.youtube.com/watch?v=eX2qFMC8cFo"
        class="video-one__btn videoOne"
        ><i class="fa fa-play"></i
      ></a>
      <p>WHO-CAT</p>
      <h3>당신의 바른 반려생활<br />누구냥이 응원합니다.</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "VideoOne",
  mounted() {
    new GLightbox({
      selector: ".videoOne",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }
};
</script>

<style scoped></style>
