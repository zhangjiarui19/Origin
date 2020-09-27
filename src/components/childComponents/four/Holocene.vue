<template>
  <div id="tmp">
    <third-four :count="6">
      <img src="~assets/img/photo/holocene.jpg" alt="">
    </third-four>
    <div class="res">
      <ul class="reslist">
        <li>生物</li>
        <li>非生物</li>
        <li>时代的终结</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "Holocene",
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