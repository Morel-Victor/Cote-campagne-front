<template>
  <h1>Gallerie</h1>
  <div class="container">
    <HeaderGallery />
  </div>
</template>

<script>
import HeaderGallery from "@/components/GalleryC/HeaderGallery.vue";

export default {
  name: "Gallery",
  components: {
    HeaderGallery,
  },
};
</script>

<style src="./style.css" scoped></style>
