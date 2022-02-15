<template>
  <div class="container">
    <carousel :items-to-show="1" autoplay="5000" wrapAround="true">
      <slide v-for="slide in slides" v-bind:key="slide.url">
        <img v-bind:src="slide.url" alt="carousel img"/>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
          {name: "asset1", url:"https://cutt.ly/OPsTbpl"},
          {name: "asset2", url:"https://cutt.ly/JPsGJAt"},
          {name: "asset3", url:"https://cutt.ly/sPsGNfi"},
      ]
    }
  }
};
</script>

<style src="./style.css" scoped></style>
