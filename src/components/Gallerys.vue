<template>
  <div class="container">
    <p>i'm Gallerys component</p>
  </div>
</template>

<script>
export default {
  name: "Gallery",
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
img {
  height: 180px;
  margin: 20px;
  display: flex;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0;
}
a {
  color: #42b983;
}
</style>
