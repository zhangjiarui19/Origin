<template>
  <div>
    <third-four :count="2">
      <img src="~assets/img/photo/oligocene.jpg" alt="">
    </third-four>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/oligocene')">生物</li>
        <li @click="$router.push('/oligocene1')">非生物</li>
        <li @click="$router.push('/oligocene2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      灾难事件
      有记录的外星体撞击事件：加拿大，努纳武特，2,300万年前，陨石坑直径24千米。
      超级火山爆发事件：美国，科罗拉多，La Garita Caldera超级火山，2,780万年前，喷发量大于5,000km³，火山爆发指数9.2。
    </div>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "oligocene2",
    components: {ThirdFour}
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