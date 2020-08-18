<template>
  <div class="sce">
    <tabbar></tabbar>
    <main-body>
      <img src="~assets/img/home/fish.jpg" name="tl">
      <span>fish</span>
    </main-body>
  </div>
</template>

<script>
  import Tabbar from "../components/Tabbar";
  import MainBody from "../components/MainBody";
  export default {
    name: "Second",
    components: {MainBody, Tabbar}
  }
</script>

<style scoped>
  .sce{
    background: url("~assets/img/home/backgroundimg.jpg");
  }
</style>