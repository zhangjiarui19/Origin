<template>
  <div id="tmp">
    <third-one :counts="3">
      <img src="~assets/img/demo3.jpg" alt="">
    </third-one>
    <div class="res">
      <ul class="reslist">
        <li>生物</li>
        <li>非生物</li>
        <li>时代的终结</li>
      </ul>
    </div>
    <table id="tb">
      <tr>
        <td><img src="~assets/img/firstWindow/demo2.jpg" alt=""></td>
        <td>大约70%的大陆是在这段时间形成的。在熔解的“海”中漂浮着小“岛”陆地。地球获得的质量足以容纳甲烷、氨气和其他气体组成的还原大气层。来自彗星和水合矿物的水凝结在大气中，并以暴雨的形式降落，使地球变冷，并使第一批海洋充满液态水</td>
      </tr>
      <tr>
        <td><img src="~assets/img/firstWindow/demo6.jpg" alt=""></td>
        <td>和现代海洋中的珊瑚、水母和海葵等动物很类似。从外观上看化石上的物质直径为20—40毫米，排列规则就像旋涡星系。在5.4亿年前动物的“寒武纪大爆发”之前已经灭绝。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/firstWindow/demo7.jpg" alt=""></td>
        <td>该水母呈柔软的椭圆形，身体分为多个部分，有一个肋状的凸面层。它们的正面和背面区别明显，身长可达一米，但厚度只有几毫米 。我们相信它代表了一种 既能消化食物，又能将营养输送、分布到整个有机体内 的系统。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/firstWindow/demo8.jpg" alt=""></td>
        <td>在震旦纪，出现了全球性的大冰期，称为震旦纪大冰期，是地球发展史上的三大冰期之一。冰川最盛时覆盖了亚洲、欧洲、美洲、大洋洲的许多地区，有的地方冰层厚达千米。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdOne from "../../thirdComponents/ThirdOne";
  export default {
    name: "Proterozoic",
    components: {ThirdOne}
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
</style>