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
    <table id="tb">
      <tr>
        <td><img src="" alt=""></td>
        <td></td>
      </tr>
      <tr>
        <td><img src="" alt=""></td>
        <td></td>
      </tr>
      <tr>
        <td><img src="" alt=""></td>
        <td></td>
      </tr>
      <tr>
        <td><img src="" alt=""></td>
        <td></td>
      </tr>
      <tr>
        <td><img src="" alt=""></td>
        <td></td>
      </tr>
    </table>
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
  #tb{
    width: 80%;
    margin: 0 auto;
  }
  #tb img{
    width: 400px;
    height: 270px;
    margin: 20px;
  }
</style>