<template>
  <div>
    <third-four :count="5">
      <img src="~assets/img/photo/pleistocene.jpg" alt="">
    </third-four>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/pleistocene')">生物</li>
        <li @click="$router.push('/pleistocene1')">非生物</li>
        <li @click="$router.push('/pleistocene2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      环境：
      这一时期绝大多数动、植物属种与现代物种相似。显著特征为气候变冷、有冰期与间冰期的明显交替。此时，欧洲发生过五大冰期：多瑙冰期、群智冰期、民德冰期、里斯冰期和玉木冰期。人类也在这一时期出现。
      更新世是冰川作用活跃的时期，开始于 1 806 000年（±5000年）前，结束于11 550年前，是构成地球历史的第四纪冰川的两个世中较长的第一个世。在此期间发生了一系列冰川期和间冰川期气候回旋。地层中所含生物化石，绝大部分属于现有种类。更新世中期是全球气候和环境变化的一个重要时期，当时气候周期转型，全球冰量增加，海平面下降，哺乳动物迁徙或灭绝。
      更新世是地球上气候发生剧烈变化的时代。北半球的高、中纬度地区以及低纬度地区的一些高山，在这时期出现过大规模的冰川活动。冰川的前进和退缩，形成了寒冷的冰期和温暖的间冰期的多次交替，并导致海平面的大幅度升降、气候带的转移和动荡、植物的迁徙或绝灭。这些事件对早期人类文化的发展产生过巨大的影响。因此，许多学者主张采用冰期序列作为更新世分期的主要标准。
      更新世是冰川作用活跃的时期，1846年福布斯（E.Forbes）又把更新世称为冰川世（Glacial Epoch）。在更新世几次冰期的最高峰，全球
    </div>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "pleistocene1",
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