<template>
  <div>
    <third-two :count="6">
      <img src="~assets/img/secondWindow/permian.jpg" alt="">
    </third-two>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/permian')">生物</li>
        <li @click="$router.push('/permian1')">非生物</li>
        <li @click="$router.push('/permian2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      环境：
      二叠纪（Permian period）是古生代的最后一个纪，也是重要的成煤期。二叠纪分为早二叠世, 中二叠世和晚二叠世。二叠纪开始于距今约2.95亿年，延至2.5亿年，共经历了4500万年。二叠纪的地壳运动比较活跃，古板块间的相对运动加剧，世界范围内的许多地槽封闭并陆续地形成褶皱山系，古板块间逐渐拼接形成联合古大陆（泛大陆）。陆地面积的进一步扩大，海洋范围的缩小，自然地理环境的变化，促进了生物界的重要演化，预示着生物发展史上一个新时期的到来。
      二叠纪是全球构造活动与岩浆活动非常活跃的时期，安加拉古陆开始与波罗的古陆碰撞，形成乌拉尔山脉，超级大陆最终形成；在西伯利亚及我国西南地区有大规模的玄武岩形成；全球海平面发生剧烈的升降。陆地上出现了大型地内陆盆地。气候变得干燥炎热，。复杂的构造运动及剧烈的环境变化促使了生物界的重要变革。
    </div>
  </div>
</template>

<script>
  import ThirdTwo from "../../thirdComponents/ThirdTwo";
  export default {
    name: "permian1",
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