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
      环境：
      地球在从渐新世衍进到中新世再到上新世的过程中进入了一连串的冰河时期。中新世的边界并不能依靠一个单个的地理事件来划分，而是由从更温暖的渐新世到更冷的上新世之间的多个不同区域事件组成的。
      中新世出现了一系列的气候事件,是现代生物区系形成的关键时期。最近研究人员用植物气孔参数的方法恢复了中新世的CO2浓度,发现中新世CO2浓度在300-600ppmv之间。
      晚中新世时期（约11.6至5.3百万年前），陆地气候和生态系统发生了系列重大转折，包括亚洲内陆在内的陆地大面积干旱化，C4植物扩张及相应的哺乳动物群落转型等。作为陆地气候和生态系统变化的重要驱动力，CO2和构造活动（如青藏高原隆升）在晚中新世陆地气候和生态变化中的相对重要性仍存在争论。
      最近的晚中新世全球海表面温度重建研究发现，约7至5.4百万年前存在一次全球性大幅降温事件（Late Miocene cooling，LMC），与大气CO2含量降低有关，由此认为CO2含量降低驱动了晚中新世陆地环境的系列变化。但由于缺少陆地温度的直接记录，难以评估该事件在陆地的表现及其与陆地气候和生态系统变化的关联。此外，晚中新世普遍被认为是青藏高原东北部隆升的重要阶段，但缺少定量古高度和隆升过程研究以厘定隆升的时间和幅度，导致无法精确评估青藏高原隆升对气候和生态的影响。
    </div>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "miocene1",
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