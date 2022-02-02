<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div id="logo">
          <router-link to="/">
            <img src="@/assets/logo.jpg" class="logo" />
          </router-link>
        </div>
        <div class="nav">
          <router-link to="/">Qui sommes-nous </router-link>
          <router-link to="/gallerie">Gallerie </router-link>
          <router-link to="/">Horaires </router-link>
          <router-link to="/">Contact </router-link>
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

<style scoped>
.container {
  height: 180px;
  width: 100%;
}
.row {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.col-12 {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img {
  height: 180px;
  width: 180px;
  margin: 20px;
  display: flex;
}
.nav {
  color: var(--color--text);
  font-size: 32px;
  width: 800px;
  margin: 30px;
  text-align: end;
}
a {
  cursor: pointer;
  text-decoration: none;
  color: white;
}
</style>
