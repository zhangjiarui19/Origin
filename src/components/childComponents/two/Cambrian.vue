<template>
  <div id="tmp">
    <third-two :count="1">
      <img src="~assets/img/secondWindow/cambrian.jpg" alt="">
    </third-two>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/cambrian')">生物</li>
        <li @click="$router.push('/cambrian-1')">非生物</li>
        <li @click="$router.push('/cambrian-2')">大事件</li>
      </ul>
    </div>
    <table id="tb">
      <tr>
        <td><img src="~assets/img/secondWindow/a1.jpg" alt=""></td>
        <td>5.3亿年前的海洋中，最凶猛的捕食者。它的个体最大可达2米以上，而当时其他大多数动物平均只有几毫米到几厘米。被认为是显生宙海洋生态系统中最早的顶级捕食者，也是“寒武纪大爆发”最具代表性的明星动物之一。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/a2.jpg" alt=""></td>
        <td>最有代表性的远古动物，是节肢动物的一种，全身明显分为头、胸、尾三部分，背甲坚硬，背甲为两条背沟纵向分为大致相等的三片——一个轴叶和两个肋叶。有的长达70厘米，有的只有2毫米，个体大小相差却很悬殊。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/a3.jpg" alt=""></td>
        <td>单体形状为杯状、锥状或圆柱状等，表面光滑，或具有瘤状突起，或具横向、纵向褶皱。单体高一般为10~30毫米，直径5~20毫米,骨骼由多孔的钙质骨板组成，具外壁或由外壁及内壁组成的两个壁，内、外壁之间的空隙有放射状纵向排列的隔板及横向排列的横板等。内壁之内为中央腔，有时部分填有泡沫板。内、外壁及隔板、横板等均穿有小孔。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/a4.png" alt=""></td>
        <td>棘皮动物门（Echinodermata）是一类后口动物（deuterostomes），在无脊椎动物中进化地位很高。大多底栖，少数海参行浮游生活；自由生活的种类能够缓慢移动。从浅海到数千米的深海都有广泛分布。现存种类6000多种，但化石种类多达20000多种，从早寒武纪出现到整个古生代都很繁盛，其中有5个纲已完全灭绝。沿海常见的海星、海胆、海参、海蛇尾等都属于棘皮动物，它们在形态结构与发生上都有一些独特之处，与原口动物有很大不同。外观差别很大，有星状、球状、圆筒状和花状。成体五放辐射对称（次生辐射对称），由管足排列表现出来。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/a5.jpg" alt=""></td>
        <td>牙形刺，Conodonts，是一类已经灭绝的牙形动物的骨骼，存在于寒武纪到三叠纪由海洋沉积物形成的地层即海相地层中。牙形刺形体很小，一般只有1毫米左右，最大也不过7毫米，形态多变，如角锥梳状、耙状、台状，颜色各异，广泛分布于海相地层中，是一类重要的微体古生物。生存在寒武纪至三叠纪。 具有重大的实用价值，在生物演化中也占有极重要的位置。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdTwo from "../../thirdComponents/ThirdTwo";
  export default {
    name: "Cambrian",
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