<template>
  <div id="tmp">
    <third-three :counts="2"></third-three>
    <div class="res"></div>
  </div>
</template>

<script>
  import ThirdThree from "../../thirdComponents/ThirdThree";
  export default {
    name: "Jurassic",
    components: {ThirdThree}
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