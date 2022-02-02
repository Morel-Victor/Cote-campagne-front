<template>
  <div class="container"><h1>HOME</h1></div>
  <Carousel />
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel,
  },
};
</script>

<style>
.container {
  color: white;
}
</style>
