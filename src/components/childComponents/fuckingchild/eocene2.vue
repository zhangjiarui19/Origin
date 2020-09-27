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
      古新世-始新世极热事件
      始新世-渐新世过渡（距今大约3350万年前）是一次重大全球气候事件。始新世末气候异常温暖，南极洲没有明显的冰，但到渐新世，南极洲有了永久冰层。Dupont-Nivet等人分析了来自青藏高原的沉积记录，发现大气中含水量有所下降，这种下降引起与南极变冷同时发生的变冷和干旱化。以前的研究工作将这一现象归于青藏高原的迅速隆起，但这一新的研究工作表明，青藏高原的区域气候受全球事件的影响。在另一篇关于同一气候过渡事件的论文（与前一篇论文无关）中，Zanazzi等人对当时北美的气候变冷情况进行了探究。他们利用来自化石牙齿和骨头的稳定同位素测定结果来生成一个代理温度记录，发现年平均气温降低了8.2°C，这个下降幅度大于海洋中的温度下降幅度。这一大陆气候过渡事件也许可解释为什么很多冷血爬行动物和两栖动物灭绝了，而哺乳动物由于能够调节其体温却躲过了一劫。
    </div>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "eocene2",
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