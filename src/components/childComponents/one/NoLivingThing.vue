<template>
  <div id="tmp">
    <third-one :counts="1">
      <img src="~assets/img/demo1.jpg" alt="">
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
        <td><img src="~assets/img/firstWindow/demo1.jpg" alt=""></td>
        <td>地球的表面.涌动着通红的岩浆，内部充满白热的“液体状”岩石。水蒸气、尘埃和气体混合在一起，形成厚厚的云雾，遮挡住太阳。大大小小的陨石燃烧着从太空飞来，撞击地球。几亿年过去了，地球表面的温度逐渐下降。它一边冷却一边变硬，形成一层薄的岩石壳。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/firstWindow/demo2.jpg" alt=""></td>
        <td>大约70%的大陆是在这段时间形成的。在熔解的“海”中漂浮着小“岛”陆地。地球获得的质量足以容纳甲烷、氨气和其他气体组成的还原大气层。来自彗星和水合矿物的水凝结在大气中，并以暴雨的形式降落，使地球变冷，并使第一批海洋充满液态水</td>
      </tr>
      <tr>
        <td><img src="~assets/img/firstWindow/demo3.jpg" alt=""></td>
        <td>在古太古代中出现了最早的植物（原核生物）——蓝绿藻。蓝绿藻（又称蓝藻）它出现的意义就在于对地球生态系统的进一步向着适应现代生物生存的方面发展，就是因为，它会“制造氧气”。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/firstWindow/demo4.jpg" alt=""></td>
        <td>已经形成了足够多的盾构岩来启动可识别的地质过程，板块构造迫使可用的盾构岩相撞，形成了罗迪尼亚(一个俄罗斯术语的意思是“母亲的土地”)，地球上的第一个超级大陆。罗迪尼亚的沿岸水域充满了被称为叠层石的光合藻类的圆形菌落。光合作用开始向大气中增加氧气，对适应早期地球大气减少的生物施加压力。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/firstWindow/demo5.jpg" alt=""></td>
        <td>大陆地壳不断增厚，开始发育有盖层沉积，地球表面始终保持着一种十分有利于生命发展的环境。蓝藻和细菌继续发展。最低等的真核生物—绿藻也相继出现</td>
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
    name: "NoLivingThing",
    components: {ThirdOne},
  }
</script>

<style scoped>
  #tb{
    width: 80%;
    margin: 0 auto;
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
</style>