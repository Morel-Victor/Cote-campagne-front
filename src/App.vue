<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
:root {
  font-family: "KG-Ten-Thousand-Reasons-Alt";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--color--primary);
  --color--primary: #1b1c20;
  /* --color--secondary: rgb(1, 30, 38); */
  --color--text: #ffffff;
}
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
@font-face {
  font-family: "KG-Ten-Thousand-Reasons-Alt";
  src: url("assets/KG-Ten-Thousand-Reasons-Alt.ttf.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
</style>
