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
  data() {
    return {
      Pictures: [
        {id: 1, img: 'https://urlz.fr/hqUI', legend:'test', categories:'Mariages', subCategories:'Bouquets'},
        {id: 2, img: '', legend:'', categories:'Mariages', subCategories:''},
        {id: 3, img: '', legend:'', categories:'Bouquets', subCategories:''},
        {id: 4, img: '', legend:'', categories:'Bouquets', subCategories:''},
        {id: 5, img: '', legend:'', categories:'Couronnes', subCategories:''},
      ]
    }
  },
};
</script>

<style src="./style.css" scoped></style>
