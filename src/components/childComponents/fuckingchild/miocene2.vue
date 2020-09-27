<template>
  <div>
    <third-four :count="3">
      <img src="~assets/img/photo/miocene.jpg" alt="">
    </third-four>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/miocene')">生物</li>
        <li @click="$router.push('/miocene1')">非生物</li>
        <li @click="$router.push('/miocene2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      全球岩浆活动或在中新世开始活跃,或在中新世达到巅峰状态.形成于不同构造环境的岩浆岩具有不同的地质意义:汇聚边缘岩浆岩发育,暗示板块俯冲作用强烈;裂谷岩浆岩大量喷发,表示发育与板块扩张有关的岩浆活动;洋岛岩浆岩迅速增加,指示下地幔异常活跃;埃达克岩广泛分布,表明许多地方受到构造挤压作用,导致地壳加厚.由此推测,全球在中新世可能发生了一次重大的、全球性的岩浆事件.除此之外,全球中新世还发生了一系列重要事件,如青藏高原的隆升及黄土高原的形成、安第斯的抬升、地中海的干涸、全球荒漠化以及西太平洋边缘海盆的发育等.岩浆活动与构造运动通常是相伴而生的,二者间的相互作用改变了古地理、古气候、古环境.中新世剧烈的岩浆活动与构造活动相互作用可能导致地壳加厚或隆起,形成的山脉、高原改变了原有的地形地貌,影响了大气环流,从而改变了地表环境。
    </div>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "miocene2",
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