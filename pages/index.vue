<template>
  <div>
    <Banner />
    <!-- banner part start-->

    <!-- feature_part start-->
    <Feature />
    <!-- upcoming_event part start-->

    <!-- product_list start-->
    <section class="product_list section_padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="section_tittle text-center">
              <h2>awesome <span>shop</span></h2>
            </div>
          </div>
        </div>
        <ProductList />
      </div>
    </section>
    <!-- product_list part start-->

    <!-- awesome_shop start-->
    <section class="our_offer section_padding">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-6 col-md-6">
            <div class="offer_img">
              <img src="~assets/img/offer_img.png" alt="">
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="offer_text">
              <h2>Weekly Sale on
                60% Off All Products</h2>
              <div class="date_countdown">
                <div id="timer">
                  <div id="days" class="date"></div>
                  <div id="hours" class="date"></div>
                  <div id="minutes" class="date"></div>
                  <div id="seconds" class="date"></div>
                </div>
              </div>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="enter email address"
                       aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <a href="#" class="input-group-text btn_2" id="basic-addon2">book now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- awesome_shop part start-->

    <!-- product_list part start-->
    <section class="product_list best_seller section_padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="section_tittle text-center">
              <h2>Best Sellers <span>shop</span></h2>
            </div>
          </div>
        </div>
        <ProductList />
      </div>
    </section>
    <!-- product_list part end-->

    <!-- subscribe_area part start-->
    <section class="subscribe_area section_padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="subscribe_area_text text-center">
              <h5>Join Our Newsletter</h5>
              <h2>Subscribe to get Updated
                with new offers</h2>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="enter email address"
                       aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <a href="#" class="input-group-text btn_2" id="basic-addon2">subscribe now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--::subscribe_area part end::-->

    <!-- subscribe_area part start-->
    <section class="client_logo padding_top">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <div class="single_client_logo">
              <img src="~assets/img/client_logo/client_logo_1.png" alt="">
            </div>
            <div class="single_client_logo">
              <img src="~assets/img/client_logo/client_logo_2.png" alt="">
            </div>
            <div class="single_client_logo">
              <img src="~assets/img/client_logo/client_logo_3.png" alt="">
            </div>
            <div class="single_client_logo">
              <img src="~assets/img/client_logo/client_logo_4.png" alt="">
            </div>
            <div class="single_client_logo">
              <img src="~assets/img/client_logo/client_logo_5.png" alt="">
            </div>
            <div class="single_client_logo">
              <img src="~assets/img/client_logo/client_logo_3.png" alt="">
            </div>
            <div class="single_client_logo">
              <img src="~assets/img/client_logo/client_logo_1.png" alt="">
            </div>
            <div class="single_client_logo">
              <img src="~assets/img/client_logo/client_logo_2.png" alt="">
            </div>
            <div class="single_client_logo">
              <img src="~assets/img/client_logo/client_logo_3.png" alt="">
            </div>
            <div class="single_client_logo">
              <img src="~assets/img/client_logo/client_logo_4.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from "~/components/ClientComponent/Home/Banner";
import Feature from "~/components/ClientComponent/Home/Feature";
import ProductList from "~/components/ClientComponent/Home/ProductList";

export default {
  name: 'IndexPage',
  components: {ProductList, Feature, Banner}
}
</script>
