<template>
  <div class="main">
    <h1>Côté Campagne</h1>
    <div class="carousel-container">
      <Carousel />
    </div>
    <div class="about">
      <div id="header">
        <img src="@/assets/Flower.png" id="divider" />
        <h2>Qui somme nous ?</h2>
      </div>
      <div id="aboutContent">
        <div class="row">
          <div class="col1">
            <img
              src="@/assets/photoHome.jpg"
              data-aos="zoom-in-up"
              data-aos-offset="500"
            />
          </div>
          <div class="col2">
            <p
              class="col1"
              data-aos="fade-left"
              data-aos-offset="700"
              data-aos-easing="ease-in-sine"
            >
              Proin sed tortor sed nulla tempor semper vitae hendrerit nibh.
              Fusce porttitor vestibulum est, non scelerisque magna fermentum
              at. Morbi vitae nisl venenatis, convallis nibh feugiat, convallis
              urna. Nunc quis lectus lacus. Maecenas libero est, sagittis et
              dignissim quis, condimentum nec nunc. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas erat tellus, tincidunt at
              mattis vitae, posuere ut libero. Morbi id magna vitae magna
              faucibus pulvinar a a lorem. Phasellus vitae vehicula libero. In
              vulputate pellentesque maximus. Nunc dignissim quis arcu eget
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col2">
            <p
              data-aos="fade-right"
              data-aos-offset="700"
              data-aos-easing="ease-in-sine"
            >
              Proin sed tortor ssed nulla tempor semper vitae hendrerit nibh.
              Fusce porttitor vestibulum est, non scelerisque magna fermentum
              at. Morbi vitae nisl venenatis, convallis nibh feugiat, convallis
              urna. Nunc quis lectus lacus. Maecenas libero est, sagittis et
              dignissim quis, condimentum nec nunc. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas erat tellus, tincidunt at
              mattis vitae, posuere ut libero. Morbi id magna vitae magna
              faucibus pulvinar a a lorem. Phasellus vitae vehicula libero. In
              vulputate pellentesque maximus. Nunc dignissim quis arcu eget
            </p>
          </div>
          <div class="col1">
            <img
              src="@/assets/photoHome2.jpg"
              data-aos="zoom-in-up"
              data-aos-offset="500"
            />
          </div>
        </div>
      </div>
      <div id="shedule">
        <div id="header2">
          <img src="@/assets/Flower.png" id="divider" />
          <h2>Horaires d'ouverture</h2>
        </div>
        <div class=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel/Carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel,
  },
};
</script>

<style scoped>
/* Main Style */

.main {
  color: white;
}

.carousel-container {
  height: 500px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
}

h1 {
  font-size: 45px;
  margin-top: 50px;
  margin-bottom: 10px;
}

h2 {
  margin-top: 0px;
}

/* About section */

.about {
}

#divider {
  margin-top: 25px;
  height: 30px;
}

#aboutContent {
}

.row {
  display: flex;
  flex-direction: row;
  margin-right: auto;
  margin-left: auto;
}

.col1 {
  width: 50vw;
  height: 800px;
}

.col1 img {
  width: 40vw;
  height: 650px;
  padding-top: 80px;
  border-radius: 5px;
}

.col2 {
  width: 50vw;
  height: 800px;
}

.col2 p {
  width: 40vw;
  padding-top: 80px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0;
  font-size: 24px;
}

/* Shedule section */
</style>
