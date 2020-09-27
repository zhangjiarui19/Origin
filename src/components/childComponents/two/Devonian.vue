<template>
  <div id="tmp">
    <third-two :count="4">
      <img src="~assets/img/secondWindow/devonian.jpg" alt="">
    </third-two>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/devonian')">生物</li>
        <li @click="$router.push('/devonian1')">非生物</li>
        <li @click="$router.push('/devonian2')">大事件</li>
      </ul>
    </div>
    <table id="tb">
      <tr>
        <td><img src="~assets/img/secondWindow/d1.jpg" alt=""></td>
        <td>石燕贝目（Spiriferida）大多数为无疹壳，少数疹壳。壳多横向扩展，也有方圆或椭圆的。铰合线一般直长。双凸式。壳面多具放射壳饰，也有同心壳饰，或光滑。腹中槽，背中隆多数发育；槽隆两侧的壳面，称为侧部，通常比较宽阔。齿板发育程度不等。具腕螺，螺顶指向侧后方或正侧方。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/d2.jpg" alt=""></td>
        <td>盾皮鱼纲是最原始的颌口类。它们初见于上志留纪，至泥盆纪则称霸水域，故泥盆纪之所以被称为鱼类的时代（Age of Fishes），就是由于此类动物之盛产。当时介皮类式微，而软骨鱼类仅见端倪。泥盆纪结束，盾皮鱼类大部分灭亡。古生代结束后，便不再有此类动物存在。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/d3.jpg" alt=""></td>
        <td>肺鱼是现今仅存的三支肉鳍鱼类（肺鱼类、腔棘鱼类、四足动物）之一，也是著名的“活化石”，对肺鱼的研究在演化生物学的历史上起到过重要的作用。现生肺鱼仅存3属6种，但肺鱼类在泥盆纪曾经十分繁盛，1811年至今，已经发现约80个属近250种化石肺鱼，其中有49属发现于泥盆纪地层中。喙肺鱼科是原始的泥盆纪肺鱼类，其典型代表包括喙肺鱼（Dipnorhynchus），卡思尔斯喙鱼（Cathlorhynchus）和洞岛鱼（Speonesydrion）。典型的肺鱼类十分特化，拥有如腭部齿板；腭方骨和内颅愈合；两对鼻孔开口于脑颅腹侧等独有特征，以适应压碎式摄食和水陆交界地带的生活。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/d4.jpg" alt=""></td>
        <td>鱼石螈是已知最古老的陆生脊椎动物之一。从发现的化石来看，它们大约生活在3亿6千万年前。与棘螈相比，鱼石螈的四肢关节非常灵活，肋骨宽大，这些都有利于支撑它的身体在陆上行走，它的脊椎上也已经长出了关节突，能够让脊柱弯曲活动。鱼石螈是我们已知的最早的两栖动物。虽然它具有陆生动物的躯干、腿以及脚趾，可它的头部依然是鱼的样子，尾巴也类似于鱼的尾鳍。这说明鱼石螈的祖先是鱼类。 </td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/d5.jpg" alt=""></td>
        <td>真蕨类为草本、灌木或呈乔木状。除少数具乔木状的直立茎外，大都具横走的根状茎。化石中保存的多为其叶。叶的中脉羽状或掌状，侧脉二歧分叉或二歧合轴分叉1次至数次，也有不分叉的，开放或结成网状。孢子囊散生或聚成孢子囊群或聚合囊，生于叶背，原始的单生于轴的顶端，也可保存为化石。孢子囊壁由一层或多层细胞形成，有环带或无。环带为一列或一撮孢壁增厚的组织。孢子囊成熟时，因失水、收缩而将孢子囊撕裂以使孢子易于散发，其形态特征是分类的主要依据之一，因此对古植物学研究有特殊意义。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdTwo from "../../thirdComponents/ThirdTwo";
  export default {
    name: "Devonian",
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