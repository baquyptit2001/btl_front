<template>
  <div class="product_image_area section_padding">
    <div class="container">
      <div class="row s_product_inner justify-content-between">
        <div class="col-lg-7 col-xl-7">
          <div data-thumb="~assets/img/product/single-product/product_1.png">
            <img src="~assets/img/product/single-product/product_1.png" />
          </div>
        </div>
        <div class="col-lg-5 col-xl-4">
          <div class="s_product_text">
            <h3>Faded SkyBlu Denim Jeans</h3>
            <h2>$149.99</h2>
            <ul class="list">
              <li>
                <a class="active" href="#">
                  <span>Category</span> : Household</a>
              </li>
              <li>
                <a href="#"> <span>Availibility</span> : In Stock</a>
              </li>
            </ul>
            <p>
              First replenish living. Creepeth image image. Creeping can't, won't called.
              Two fruitful let days signs sea together all land fly subdue
            </p>
            <div class="card_area d-flex justify-content-between align-items-center">
              <div class="product_count">
                <span class="inumber-decrement" @click="product.quantity > 0  ? product.quantity-- : ''"> <i class="ti-minus"></i></span>
                <input class="input-number" type="text" v-model="product.quantity">
                <span class="number-increment" @click="product.quantity++"> <i class="ti-plus"></i></span>
              </div>
              <a href="#" class="btn_3" onclick="event.preventDefault()" @click="addCart" :disabled="product.quantity < 0 || product.quantity > 100">add to cart</a>
              <a href="#" class="like_us"> <i class="ti-heart"></i> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addCart() {
      this.$root.$emit('add-cart', this.product);
    }
  }
}
</script>

<style scoped>

</style>
