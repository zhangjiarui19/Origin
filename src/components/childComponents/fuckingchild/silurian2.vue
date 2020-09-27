<template>
  <div>
    <third-two :count="3">
      <img src="~/assets/img/secondWindow/Silurian.gif" alt="">
    </third-two>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/silurian')">生物</li>
        <li @click="$router.push('/silurian1')">非生物</li>
        <li @click="$router.push('/silurian2')">大事件</li>
      </ul>
    </div>
    <div id="content"></div>
  </div>
</template>

<script>
  import ThirdTwo from "../../thirdComponents/ThirdTwo";
  export default {
    name: "silurian2",
    components: {ThirdTwo}
  }
</script>

<style scoped>
  .res{
    margin: 20px auto;
    width: 100%;
    height: 50px;
    background-color: #e0e0e0;
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
  #content{
    font-size: 30px;
    line-height: 45px;
    text-indent: 20px;
    width: 80%;
    margin: 20px auto;
  }
</style>