<template>
  <section class="product">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-6">
          <div class="sidebar-wrapper style2">
            <!--Start single sidebar-->
            <div
              class="single-sidebar wow fadeInUp animated animated"
              data-wow-delay="0.1s"
              data-wow-duration="1200ms"
              style="visibility: visible; animation-duration: 1200ms; animation-delay: 0.1s; animation-name: fadeInUp;"
            >
              <div class="sidebar-search-box">
                <form class="search-form" action="#">
                  <input placeholder="Search" type="text" />
                  <button type="submit">
                    <i class="icon-magnifying-glass" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
            <!--End single sidebar-->
            <!--Start sidebar categories Box-->
            <div
              class="single-sidebar wow fadeInUp animated animated"
              data-wow-delay="0.3s"
              data-wow-duration="1200ms"
              style="visibility: visible; animation-duration: 1200ms; animation-delay: 0.3s; animation-name: fadeInUp;"
            >
              <!-- <div class="categories-box">
                <div class="title">
                  <h3>Categories</h3>
                </div>
                <ul class="categories clearfix">
                  <li><a href="#">Vegetables</a></li>
                  <li><a href="#">Fruit Basket</a></li>
                  <li><a href="#">Dairy Products</a></li>
                  <li><a href="#">Tomatos</a></li>
                  <li><a href="#">Oranges</a></li>
                </ul>
              </div> -->
            </div>
            <!--End sidebar categories Box-->
            <!--Start single sidebar-->
            <div
              class="single-sidebar wow fadeInUp animated animated"
              data-wow-delay="0.5s"
              data-wow-duration="1200ms"
              style="visibility: visible; animation-duration: 1200ms; animation-delay: 0.5s; animation-name: fadeInUp;"
            >
              <div class="top_sellers">
                <div class="title">
                  <h3>Top Products</h3>
                </div>
                <ul class="top-products">
                  <li>
                    <div class="product_item">
                      <div class="img-box">
                        <img
                          src="https://www.idpet.co.kr/upload/product/75895_%EC%99%B8%EC%9E%A5%ED%83%9C%EA%B7%B8%ED%8F%AC%EC%9E%A5_%EB%94%A5%EA%B7%B8%EB%A6%B0_%EA%B8%80%EC%9E%90.jpg"
                          alt="Awesome Image"
                        />
                        <div class="overlay-content">
                          <a href="#"
                            ><i class="fa fa-link" aria-hidden="true"></i
                          ></a>
                        </div>
                      </div>
                      <div class="title-box">
                        <h4><a href="#">누구냥 외장태그(검정)</a></h4>
                        <div class="value">25,000원</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="product_item">
                      <div class="img-box">
                        <img
                          src="https://www.idpet.co.kr/upload/product/KakaoTalk_20210611_163025708_01.png"
                          alt="Awesome Image"
                        />
                        <div class="overlay-content">
                          <a href="#"
                            ><i class="fa fa-link" aria-hidden="true"></i
                          ></a>
                        </div>
                      </div>
                      <div class="title-box">
                        <h4><a href="#">누구냥백+파우치</a></h4>
                        <div class="value">20,000원</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!--End single sidebar-->
          </div>
        </div>
        <!--End Sidebar Wrapper-->
        <div class="col-xl-9 col-lg-9">
          <div class="product-items">
            <div class="row">
              <div class="col-xl-12">
                <div class="showing-result-shorting">
                  <div class="left">
                    <div class="showing">
                      <p>Showing 1-9 of 9 Results</p>
                    </div>
                  </div>
                  <div class="right">
                    <div class="shorting">
                      <div
                        class="dropdown shorting bootstrap-select"
                        style="width: 100%;"
                      >
                        <!--<select
                          class="selectpicker"
                          data-width="100%"
                          tabindex="-98"
                        >
                          <option selected="selected">Default Sorting</option>
                          <option>Default Sorting 1</option>
                          <option>Default Sorting 2</option>
                          <option>Default Sorting 3</option>
                          <option>Default Sorting 4</option>
                        </select>-->
                        <div class="dropdown-menu " role="combobox">
                          <div
                            class="inner show"
                            role="listbox"
                            aria-expanded="false"
                            tabindex="-1"
                          >
                            <ul class="dropdown-menu inner show"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="all_products">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="all_products_single text-center">
                    <div class="all_product_item_image">
                      <img
                        src="https://www.idpet.co.kr/upload/product/75895_%EC%99%B8%EC%9E%A5%ED%83%9C%EA%B7%B8%ED%8F%AC%EC%9E%A5_%EB%94%A5%EA%B7%B8%EB%A6%B0_%EA%B8%80%EC%9E%90.jpg"
                        alt=""
                      />
                      <div class="all_product_hover">
                        <div class="all_product_icon">
                          <nuxt-link to="/cart"
                            ><span class="icon-shopping-cart"></span
                          ></nuxt-link>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <nuxt-link to="/product-detail"
                        >누구냥 외장태그(검정)</nuxt-link
                      >
                    </h4>
                    <p>25,000원</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="all_products_single text-center">
                    <div class="all_product_item_image">
                      <img
                        src="https://www.idpet.co.kr/upload/product/74064_%EC%99%B8%EC%9E%A5%ED%83%9C%EA%B7%B8%ED%8F%AC%EC%9E%A5_%EC%98%A4%EB%A0%8C%EC%A7%80_%EA%B8%80%EC%9E%90.jpg"
                        alt=""
                      />
                      <div class="all_product_hover">
                        <div class="all_product_icon">
                          <nuxt-link to="/cart"
                            ><span class="icon-shopping-cart"></span
                          ></nuxt-link>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <nuxt-link to="/product-detail"
                        >누구냥 외장태그(주황)</nuxt-link
                      >
                    </h4>
                    <p>25,000원</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="all_products_single text-center">
                    <div class="all_product_item_image">
                      <img
                        src="https://www.idpet.co.kr/upload/product/%EC%99%B8%EC%9E%A5%ED%83%9C%EA%B7%B8%ED%8F%AC%EC%9E%A5_%EC%95%84%EC%9D%B4%EB%B3%B4%EB%A6%AC_%EA%B7%B8%EB%A6%BC.jpg"
                        alt=""
                      />
                      <div class="all_product_hover">
                        <div class="all_product_icon">
                          <nuxt-link to="/cart"
                            ><span class="icon-shopping-cart"></span
                          ></nuxt-link>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <nuxt-link to="/product-detail"
                        >누구냥 외장태그(하양)</nuxt-link
                      >
                    </h4>
                    <p>25,000원</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="all_products_single text-center">
                    <div class="all_product_item_image">
                      <img
                        src="https://www.idpet.co.kr/upload/product/KakaoTalk_20210611_163025708.png"
                        alt=""
                      />
                      <div class="all_product_hover">
                        <div class="all_product_icon">
                          <nuxt-link to="/cart"
                            ><span class="icon-shopping-cart"></span
                          ></nuxt-link>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <nuxt-link to="/product-detail">누구냥 냥여권</nuxt-link>
                    </h4>
                    <p>10,000원</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="all_products_single text-center">
                    <div class="all_product_item_image">
                      <img
                        src="https://www.idpet.co.kr/upload/product/47054_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD.-001%20%281%29.png"
                        alt=""
                      />
                      <div class="all_product_hover">
                        <div class="all_product_icon">
                          <nuxt-link to="/cart"
                            ><span class="icon-shopping-cart"></span
                          ></nuxt-link>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <nuxt-link to="/product-detail"
                        >누구냥 럭셔리 패키지</nuxt-link
                      >
                    </h4>
                    <p>49,000원</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="all_products_single text-center">
                    <div class="all_product_item_image">
                      <img
                        src="https://www.idpet.co.kr/upload/product/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD.-008.png"
                        alt=""
                      />
                      <div class="all_product_hover">
                        <div class="all_product_icon">
                          <nuxt-link to="/cart"
                            ><span class="icon-shopping-cart"></span
                          ></nuxt-link>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <nuxt-link to="/product-detail"
                        >누구냥 냥냥민증</nuxt-link
                      >
                    </h4>
                    <p>13,000원</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="all_products_single text-center">
                    <div class="all_product_item_image">
                      <img
                        src="https://www.idpet.co.kr/upload/product/004.jpg"
                        alt=""
                      />
                      <div class="all_product_hover">
                        <div class="all_product_icon">
                          <nuxt-link to="/cart"
                            ><span class="icon-shopping-cart"></span
                          ></nuxt-link>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <nuxt-link to="/product-detail"
                        >냥여권+외장태그</nuxt-link
                      >
                    </h4>
                    <p>28,000원</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="all_products_single text-center">
                    <div class="all_product_item_image">
                      <img
                        src="https://www.idpet.co.kr/upload/product/006.jpg"
                        alt=""
                      />
                      <div class="all_product_hover">
                        <div class="all_product_icon">
                          <nuxt-link to="/cart"
                            ><span class="icon-shopping-cart"></span
                          ></nuxt-link>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <nuxt-link to="/product-detail"
                        >누구냥백+파우치+외장태그</nuxt-link
                      >
                    </h4>
                    <p>30,000원</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="all_products_single text-center">
                    <div class="all_product_item_image">
                      <img
                        src="https://www.idpet.co.kr/upload/product/KakaoTalk_20210611_163025708_01.png"
                        alt=""
                      />
                      <div class="all_product_hover">
                        <div class="all_product_icon">
                          <nuxt-link to="/cart"
                            ><span class="icon-shopping-cart"></span
                          ></nuxt-link>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <nuxt-link to="/product-detail"
                        >누구냥백+파우치</nuxt-link
                      >
                    </h4>
                    <p>20,000원</p>
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
  name: "Products"
};
</script>

<style scoped></style>
