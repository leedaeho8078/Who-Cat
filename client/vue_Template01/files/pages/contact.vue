<template>
  <div>
    <Nav />
    <PageHeader title="고객센터" />
    <FaqOne />

    <!-- <Location /> -->
    <!-- <ContactTwo /> -->
    <!-- <GMap /> -->
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Location from "../components/Location";
import ContactTwo from "../components/ContactTwo";
import GMap from "../components/GMap";
import FaqOne from "../components/FaqOne";

export default {
  components: {
    GMap,
    ContactTwo,
    Location,
    Footer,
    PageHeader,
    FaqOne,

    Nav
  },
  head() {
    return {
      title: "whocat|고객센터"
    };
  }
};
</script>
