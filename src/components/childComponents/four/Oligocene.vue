<template>
  <div id="tmp">
    <third-four :count="2"></third-four>
    <div class="res"></div>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "Oligocene",
    components: {ThirdFour}
  }
</script>

<style scoped>
  .res{
    margin: 20px auto;
    width: 100%;
    height: 50px;
    background-color: chartreuse;
    position: sticky;
    top: 0px;
  }
  .res .reslist{
    list-style: none;
  }
  .res li{
    float: left;
    line-height: 30px;
    /*text-align: center;*/
    margin: auto 270px;
  }
</style>