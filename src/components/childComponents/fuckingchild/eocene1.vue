<template>
  <div>
    <third-four :count="1">
      <img src="~assets/img/photo/eocene.jpg" alt="">
    </third-four>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/eocene')">生物</li>
        <li @click="$router.push('/eocene1')">非生物</li>
        <li @click="$router.push('/eocene2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      环境：
      在始新世，各大洲继续飘移向它们当今所在的位置。
      始新世初始，澳大利亚和南极洲仍然相连，同时温暖的赤道洋流汇入寒冷的南极水域，使得热量在全球范围内获得分配，从而保持全球的较高温度。但是在4500万年前，当澳大利亚从南方大陆中分裂出来时，温暖的赤道洋流开始偏离南极地区，在两块大陆之间形成了一个孤立的寒冷水道。南极地区持续变冷，南极水域开始结冻，并向北方输送冷水和海冰，使寒冷局势进一步加剧。
      北方的超大陆——劳亚大陆也开始分裂，欧洲、格陵兰岛和北美洲相继从中分裂而出。
      在北美洲西部，于始新世开始了造山运动，在平原的抬升过程中形成了诸多巨大的湖泊，并进而沉积形成了绿河岩层。
      在欧洲，阿尔卑斯山脉的抬升将特提斯洋的最后残迹——地中海包围，从而使特提斯洋最终消失，并形成了另外一个浅海，这个浅海的北部区域分布着一系列的群岛。虽然北大西洋正在扩张，但是北美洲和欧洲之间可能仍有陆桥相连，因为两块大陆上的动物区系十分相似。
      印度次大陆继续漂离非洲大陆，并开始撞击亚洲大陆，喜马拉雅山脉开始形成。
      假说认为始新世温暖的全球气候是由深埋于大洋底部的甲烷气水包合物被大量释放引起的失控的温室效应造成的。该种包合物本埋于泥层之下，但是受到了大洋升温的扰动。甲烷的全球变暖潜能（即暖化能力）比二氧化碳高22倍。
    </div>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "eocene1",
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