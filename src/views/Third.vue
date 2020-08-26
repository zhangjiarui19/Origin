<template>
  <div class="third">
    <tabbar></tabbar>
  </div>
</template>

<script>
  import Tabbar from "../components/Tabbar";
  export default {
    name: "Third",
    components: {Tabbar}
  }
</script>

<style scoped>
  .third{
    background: url("~assets/img/home/backgroundimg.jpg");
  }
</style>