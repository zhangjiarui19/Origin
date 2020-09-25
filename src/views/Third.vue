<template>
  <div class="third">
    <tabbar></tabbar>
    <part3>
      <ul slot="left">
        <li>12</li>
        <li>12</li>
        <li>12</li>
      </ul>
      <img src="~assets/img/home/fish.jpg" alt="" slot="img">
    </part3>
    <div class="content">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
  import Tabbar from "../components/Tabbar";
  import Part3 from "../components/Part3";

  export default {
    name: "Third",
    components: {Part3, Tabbar}
  }
</script>

<style scoped>
  .third {
    background: url("~assets/img/home/backgroundimg.jpg");
    width: 100%;
    height: 100%;
  }
</style>
<!--  浮动定位   -->