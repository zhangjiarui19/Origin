<template>
  <div class="third">
    <tabbar></tabbar>
    <part3>
    </part3>
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