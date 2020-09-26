<template>
  <div id="tmp">
    <third-one :counts="3">
      <img src="~assets/img/demo3.jpg" alt="">
    </third-one>
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
  import ThirdOne from "../../thirdComponents/ThirdOne";
  export default {
    name: "Proterozoic",
    components: {ThirdOne}
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