<template>
  <div>
    <Nav />
    <PageHeader title="회원가입" />
    <SignIn />

    <!-- <Login /> -->
    <!-- <BestCompany />
    <TestimonialThree />
    <BenefitsTwo />
    <WhyChooseOne />
    <CompanySolutions />
    <BrandFour /> -->

    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BestCompany from "../components/BestCompany";
import TestimonialThree from "../components/TestimonialThree";
import BenefitsTwo from "../components/BenefitsTwo";
import WhyChooseOne from "../components/WhyChooseOne";
import CompanySolutions from "../components/CompanySolutions";
import BrandFour from "../components/BrandFour";
import Login from "../components/Login";
import SignIn from "../components/SignIn";

export default {
  components: {
    BrandFour,
    CompanySolutions,
    WhyChooseOne,
    BenefitsTwo,
    TestimonialThree,
    BestCompany,
    Footer,
    PageHeader,
    Nav,
    Login,
    SignIn
  },
  head() {
    return {
      title: "whocat|Login"
    };
  }
};
</script>
