<template>
  <div class="container">
    <img src="@/assets/logo.jpg" class="logo" />
    <ul>
      <li></li>
    </ul>
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
