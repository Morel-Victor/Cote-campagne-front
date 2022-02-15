<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div id="logo">
          <router-link to="/">
            <img src="@/assets/chalogofleur.png" class="logo" alt="fleur"/>
          </router-link>
        </div>
        <div class="nav">
          <a class="nav-link nav-link-ltr" href="http://localhost:8080/#header1">Qui sommes-nous </a>
          <router-link class="nav-link nav-link-ltr" to="/gallerie">Gallerie </router-link>
          <a class="nav-link nav-link-ltr" href="http://localhost:8080/#header2">Horaires </a>
          <a class="nav-link nav-link-ltr" href="/">Contact </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  // props: {
  //   msg: String,
  // }, {{ msg }}
};
</script>

<style src="./style.css" scoped></style>
