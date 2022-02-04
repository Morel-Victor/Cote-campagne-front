<template>
  <div class="main">
    <h1>Côté Campagne</h1>
    <div class="carousel-container">
      <Carousel />
    </div>

    <section class="about">
      <div id="header">
        <img src="@/assets/Flower.png" class="divider" />
        <h2>Qui somme nous ?</h2>
      </div>
      <div id="aboutContent">
        <div class="row">
          <div class="col">
            <img
              id="welcome1"
              src="@/assets/photoHome.jpg"
              data-aos="zoom-in-up"
              data-aos-offset="500"
            />
          </div>
          <div class="col">
            <p
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
          <div class="col">
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
          <div class="col">
            <img
              id="welcome2"
              src="@/assets/photoHome2.jpg"
              data-aos="zoom-in-up"
              data-aos-offset="500"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="shedule">
      <div id="header2">
        <img src="@/assets/Flower.png" class="divider" />
        <h2>Horaires d'ouverture</h2>
      </div>
      <div class="sheduleContent">
        <div class="row2">
          <div class="col2">
            <div id="box1">
              <h3>Horaires</h3>
              <span></span>
              <ul>
                <li>
                  <p class="week">lundi:</p>
                  <p>Fermé</p>
                </li>
                <li>
                  <p class="week">mardi:</p>
                  <p>Fermé</p>
                </li>
                <li>
                  <p class="week">mercredi:</p>
                  <p>09:00 – 12:00 , 14:00 – 19:00</p>
                </li>
                <li>
                  <p class="week">jeudi:</p>
                  <p>0:00 – 13:00 , 14:00 – 19:00</p>
                </li>
                <li>
                  <p class="week">vendredi:</p>
                  <p>10:00 – 13:00 , 14:00 – 19:00</p>
                </li>
                <li>
                  <p class="week">samedi:</p>
                  <p>09:30 – 19:00</p>
                </li>
                <li>
                  <p class="week">dimanche:</p>
                  <p>10:00 – 13:00</p>
                </li>
              </ul>
            </div>
            <div id="box2">
              <h3>Télephone</h3>
              <span></span>
              <p id="telephone">03 . 20 . 70 . 16 . 16</p>
            </div>
          </div>
          <div class="col2">
            <div id="box3">
              <h3>Adresse</h3>
              <span class="span2"></span>
              <p id="adresse">
                125, rue Séré de Rivières 59118 Wambrechies France
              </p>
            </div>
            <div id="box4">
              <img id="map" src="@/assets/map.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script>
import Carousel from "@/components/Carousel/Carousel.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Footer,
  },
};
</script>

<style src="./style.css" scoped></style>
