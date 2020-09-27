<template>
  <div id="tmp">
    <third-two :count="6">
      <img src="~assets/img/secondWindow/permian.jpg" alt="">
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
        <td><img src="~assets/img/secondWindow/f1.jpg" alt=""></td>
        <td>腕足动物门具铰纲中一类已绝灭的海生无脊椎动物。通常腹瓣强凸，两壳向前延伸，故得长身之名。初见于早泥盆世，至晚古生代达于极盛，二叠纪末突然衰亡，仅存少数属种延至三叠纪最早期。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/f2.jpg" alt=""></td>
        <td>盘龙目是古生代晚期的单弓类羊膜动物。有些品种相当大，可以长到3米长，但是大多数的品种都小的许多。它们出现在晚石炭纪，并且在二叠纪初期达到高峰，成为陆地上的优势动物长达数百万年之久。少数存活到晚二叠纪。
          盘龙目是下孔亚纲中比较原始的一个目，某些哺乳动物进步性质在盘龙目里即有萌芽，但只是到了进步的兽孔目才迅速发展起来：牙齿开始分化、下颌上的齿骨显著增大、形成次生腭、枕髁两个。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/f3.jpg" alt=""></td>
        <td>兽孔目早先被称为似哺乳爬行动物，是单孔亚纲中的一目。然而，当被用在遗传学上时，这一类通常包括哺乳类，哺乳类是兽孔目犬齿兽类的后代。演化的轨迹起源于早二叠纪（约开始于2.9亿年前），在我国最早发现的标本产自甘肃玉门大山口上二叠统的西大沟组。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/f4.jpg" alt=""></td>
        <td>杯龙目(Cotylosauria)，本类是最原始的爬行类，头骨表面有纹饰，吻短，松果孔大，无次生腭。头部各骨骼未退化。最早见于晚石炭世早期的Hylonomus(林蜥)，体细长而小，约80cm。头骨结构属典型的杯龙类。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/f5.jpg" alt=""></td>
        <td>舌羊齿是种子蕨舌羊齿目(Glossopteridales)最重要的代表属，其最重要的特征是单叶呈披针或倒披针形，具明显中脉和结成长多边形单网眼的侧脉。它是晚古生代到中生代早期冈瓦纳植物区特有的植物，见于印度，澳大利亚，南美洲、非洲南部及南极洲的二叠至三叠纪地层中，少数见于侏罗纪早期。中国西藏南部二叠纪地层中也有发现。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdTwo from "../../thirdComponents/ThirdTwo";
  export default {
    name: "Permian",
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