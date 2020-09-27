<template>
  <div id="tmp">
    <third-three :counts="2">
      <img src="~assets/img/photo/jurassic.jpg" alt="">
    </third-three>
    <div class="res">
      <ul class="reslist">
        <li>生物</li>
        <li>非生物</li>
        <li>时代的终结</li>
      </ul>
    </div>
    <table id="tb"  >
      <tr>
        <td><img src="~assets/img/thirdWindow/b1.png" alt=""></td>
        <td>上游永川龙是一种异特龙超科中棘龙科恐龙。几近完整的骨骼，仅缺失前肢及部份尾椎，被挖掘出土。这是中国迄今所知最完整的肉食性恐龙，但它不是群居生活的恐龙。这具骨架是在1976年，在建构上游水库时，一位建设工人在永川县上部沙溪庙组地层的砂岩中发掘的。永川龙体长大约11米，头骨长82厘米，高50厘米。复原的骨架放置在重庆博物馆的展示厅等多个博物馆中。这个属原本有多个种，包括上游永川龙、自贡永川龙、和平永川龙、南岸永川龙与巨型永川龙，但和平永川龙归入中华盗龙属，巨型永川龙和南岸永川龙归入上游永川龙。所以永川龙只剩下上游永川龙和自贡永川龙两个属了。永川龙最大个体达到了惊人的11米长5吨重，一跃成为已知中国侏罗纪最大最强的掠食者。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/thirdWindow/b2.png" alt=""></td>
        <td>中国发现的最大的蜥脚类恐龙之一，在宜宾市马鸣溪渡口发现其化石，经科学鉴定，属蜥脚类亚马目。此属动物全长约22米，体躯高将近7米。它的颈特别长，相当于体长的一半，不仅构成颈的每一颈椎长，且颈椎数亦多达19个，是蜥脚类中最多的一种。另外，颈部也是所有恐龙中最长的（最长颈部可达12.1米）。与颈椎相比，背椎、荐椎及尾椎 相对较少。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/thirdWindow/b3.png" alt=""></td>
        <td>鸟脚类恐龙。体长近3.5米，头小，嘴短，眼睛大而圆，前肢短小，仅为后肢的一半，属于两脚行走和善于快跑的小型恐龙。常群居生活于湖岸平原，以食植物为主，兼食其它小动物。个体较大的棱齿龙科恐龙，上颌骨略呈三角形。上颌齿每侧15颗，齿冠外侧无中脊，只有彼此近平行排列的纵纹。前后缘各有一条很短的侧脊。颈椎平凹型、腹面具显著的腹脊，颈椎神经棘小，呈三角形。背椎双平型。肩胛骨中等宽度，外侧中部显著隆起，乌喙骨轮廓近五边形，外侧前下方有一显著的棱脊。肱骨后缘弯曲度大，呈规则的弧形。肱骨与肩胛骨等长。桡骨相对较短，其长度小于股骨长的2/3。股骨远端无前髁间沟，内髁显著大于外髁。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/thirdWindow/b4.png" alt=""></td>
        <td>长头狭鼻翼龙是一种早期的喙嘴龙类翼龙，也是我国发现的最早的翼龙，其主要特点是头低长，吻端较钝，眼睛大，鼻孔窄长 ，呈裂隙状，头顶有低长的纵脊，上、下颌齿列各有9-10颗尖而细长的牙齿。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/thirdWindow/b5.jpg" alt=""></td>
        <td>梁龙（学名：Diplodocus），是梁龙科下的一属恐龙，它的骨骼化石首先由塞缪尔·温德尔·威利斯顿（Samuel Wendell Williston）所发现。梁龙生活于侏罗纪末的北美洲西部，时代可追溯至1亿5000万至1亿4700万年前。个体最长可超过30米，体重约10吨。鼻孔位于眼睛之上。它们的脖子无法抬高，推测是用来扩大原地进食面积的。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdThree from "../../thirdComponents/ThirdThree";
  export default {
    name: "Jurassic",
    components: {ThirdThree}
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