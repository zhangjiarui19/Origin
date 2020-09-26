<template>
  <div id="tmp">
    <third-two :count="5">
      <img src="~assets/img/secondWindow/carboniferous.jpg" alt="">
    </third-two>
    <div class="res">
      <ul class="reslist">
        <li>生物</li>
        <li>非生物</li>
        <li>时代的终结</li>
      </ul>
    </div>
    <table id="tb">
      <tr>
        <td><img src="~assets/img/secondWindow/e1.jpg" alt=""></td>
        <td>科达树（Cordaites）是科达属植物的统称，已灭绝裸子植物的一个重要的类群，生活在与佛罗里达州大沼泽地相似的湿地中。咸水蚌类和甲壳动物时常在这些树的树根间被发现。树干高大，在茎轴上，叶呈条带状，呈紧密螺旋状分布，叶具有直线脉络。 科达树都是木本植物，高可达50米。这些化石被发现于全球各地的上石炭纪（3.18至2.99亿年前）的地层中。科达树可能和种子蕨共同起源于前裸子植物。银杏植物和松柏植物则被认为起源于科达树。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/e2.jpg" alt=""></td>
        <td>坚头类（Stegocephalia）是一种史前的两栖类四足动物分支，起源于泥盆纪的晚泥盆世，直到侏罗纪。其成员现时均已灭绝。坚头类动物外貌像蝾螈，被认为是今日爬虫纲动物的祖先。坚头类动物得名于其化石，由于它们的头骨均有坚硬的骨甲。这个词是在1868年由美国古生物学家爱德华·德林克·科普（Edward Drinker Cope）创制，源于希腊语的“στεγοκεφαλια”，意思就是“有屋顶的头”。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/e3.gif" alt=""></td>
        <td>两栖动物的一个已灭绝的亚纲。壳椎类多为小型两栖动物，适应于浅水及沼泽生活；最早出现于早石炭世，至古生代末灭绝，从未繁盛过。一般分为三个目：游螈目、小鲵目和缺肢目。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/e4.jpg" alt=""></td>
        <td>巨脉蜻蜓（学名Meganeura monyi），又名大尾蜻蜓或巨尾蜻蜓，是3亿年前石炭纪的一种昆虫，在外貌上与现代的蜻蜓接近。它的翅膀展开阔75厘米，是已知地球上曾出现过的最大的昆虫物种，但是早在2.5亿年前的二叠纪就已灭绝。它以其他昆虫及细小的两栖动物为食物。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/e5.png" alt=""></td>
        <td>石炭纪出现的原始爬行类——林蜥前奇特现象与大气中氧气的含量过高有关。在这些巨虫当中，最著名的是巨脉蜻蜓，它的翼展达0.75m；在水中，巨型古广翅鲎的体长可达2.4m，是进化史上最大的水生节肢动物；在黑暗的从林深处，有最大的陆地节肢动物——巨型马陆，有大约3米长。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdTwo from "../../thirdComponents/ThirdTwo";
  export default {
    name: "Carboniferous",
    components: {ThirdTwo}
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