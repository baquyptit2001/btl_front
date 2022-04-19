<template>
  <div>
    <Header ref="cart"/>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/ClientComponent/Header";
import Footer from "~/components/ClientComponent/Footer";

export default {
  name: "default",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>
