<template>
  <div id="tmp">
    <third-four :count="2">
      <img src="~assets/img/photo/oligocene.jpg" alt="">
    </third-four>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/oligocene')">生物</li>
        <li @click="$router.push('/oligocene1')">非生物</li>
        <li @click="$router.push('/oligocene2')">大事件</li>
      </ul>
    </div>
    <table id="tb">
      <tr>
        <td><img src="~assets/img/fourthWindow/c1.jpg" alt=""></td>
        <td>骇鸟（学名Phorusrhacidae）是一类大型的肉食性的鸟类，于6200万-200万年前新生代的南美洲是非常普遍的猎食者。现今最接近它们的亲戚是鹤科。骇鸟又名恐怖鸟，鸟型肉食类动物，跟剑齿虎同一个时期，它跟剑齿虎一样是独居型动物，天敌是狼群，生存于距今2700万年到150万年间，它们约有1-3米高。恐怖鸟的腿骨坚硬、肌肉强壮，可以完全击碎中等大小猎物的骨骼，然后慢慢地吸食猎物骨骼中富含营养的骨髓。奔跑速度相当快，据科学家估计，恐怖鸟跑速可达每小时97公里，并认为骇鸟的灭绝跟狼群和灾难有关。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/fourthWindow/c2.jpg" alt=""></td>
        <td>鬣齿兽（Hyaenodon）是1853年由著名古生物学家约瑟夫·雷迪命名的，意思是“鬣狗的牙齿”。当然，它们与食肉目的鬣狗并没什么亲缘关系，只是外表有些相似。在三千万年的发展历程中，鬣齿兽家族兴旺，种类繁多。其分布遍及亚洲，欧洲及北美洲，时代约为晚始新世到中中新世的上千万年时间。鬣齿兽的概念仅指鬣齿兽一属。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/fourthWindow/c3.png" alt=""></td>
        <td>中国已发现的古齿兽次目(Paleodonta)化石有双锥齿兽属(Dichobune)等一些小型的偶蹄类和一些较大型的古猪兽属(Archaeo-therium)等。
          猪形亚目 头上无角。尺骨和腓骨分别不与桡骨和胫骨愈合。第三、四掌骨分开或不完全愈合。这一亚目又分为齿兽次目 、弯齿兽次目和猪次目。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/fourthWindow/c4.jpg" alt=""></td>
        <td>大约5500万年前，有一支食肉动物从它们和猫科动物的共同祖先中分离出来，人们称其为猎猫科（Nimravidae），也有人认为它们是猫科下面的一个亚科Nimravinae。早期的猎猫科成员都是行动敏捷、善于奔跑的掠食动物，体形比家猫大不了多少，牙齿也没有猫科动物那么特化。当时它们的发展非常成功，种类繁多，呈辐射状演化，先于猫科动物蓬勃发展起来。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/fourthWindow/c5.jpg" alt=""></td>
        <td>它们是北美洲已灭绝的草食性偶蹄动物。它们的外观像鹿，但却是骆驼的近亲。它们介乎1-2米长，约有西方狍至加拿大马鹿的大小。它们不像现今的有蹄类，脚上是没有炮骨的。它们的齿列像现今的鹿及牛，显示它们是以草或其他类似东西为食物。它们的胃部结构像骆驼的胃般复杂。相信一些物种是群居生活的。
          原角鹿科的最大特征是在雄性的角上。除了在一般的位置上有角外，它们的鼻端上另有一角。这些一是像四角鹿般成对的，或是像奇角鹿般在顶尖分叉。原角鹿科的角可能是有皮肤的，这会像长颈鹿的鹿角。雌性的一是没有角，或是有非常细小的角，可能用作性显示或吸引异性之用。后期雄性原角鹿科的鹿角大小足以互相比拼。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "Oligocene",
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