<template>
  <div id="tmp">
    <third-one :counts="1">
      <img src="~assets/img/demo1.jpg" alt="">
    </third-one>
    <div class="res">
      <ul class="reslist">
        <li>生物</li>
        <li>非生物</li>
        <li>大事件</li>
      </ul>
    </div>
    <table id="tb">
      <tr>
        <td><img src="~assets/img/firstWindow/demo1.jpg" alt=""></td>
        <td>地球的表面.涌动着通红的岩浆，内部充满白热的“液体状”岩石。水蒸气、尘埃和气体混合在一起，形成厚厚的云雾，遮挡住太阳。大大小小的陨石燃烧着从太空飞来，撞击地球。几亿年过去了，地球表面的温度逐渐下降。它一边冷却一边变硬，形成一层薄的岩石壳。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdOne from "../../thirdComponents/ThirdOne";
  export default {
    name: "NoLivingThing",
    components: {ThirdOne},
  }
</script>

<style scoped>
  #tb{
    width: 60%;
    margin: 0 auto;
    font-size: 20px;
    text-indent: 10px;
    line-height: 30px;
  }
  #tb img{
    width: 400px;
    height: 270px;
    margin: 20px;
  }
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
</style>