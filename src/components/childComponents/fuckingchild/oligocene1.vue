<template>
  <div>
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
    <div id="content">
      环境：
      古近纪时期全球气温持续下降的趋势在渐新世被打断，在40万年之间气温急剧下降8.2℃之后进入了一段长达700万年的气温平稳震荡期。这段平稳震荡期从3,250万年前开始，至2,550万年前结束。渐新世的气候变迁包括全球冰量的增加、海平面的下降（降幅达55米，从3,570万年前至3,350万年前）和气温的平稳变化。之后，在2,800万年至2,600万年间，随着La Garita Caldera超级火山的爆发，这段气温平稳震荡期随之结束。不过，渐新世和中新世更替期间的气候仍然比较稳定。海洋持续变冷，特别是在南极洲附近。
      在这段时期，各大洲继续飘移向它们当今所在的位置。南极洲越来越孤立，并最终成为一个永久性的冰封大陆。
      北美洲西部的造山运动仍在继续；非洲板块持续向北挤压欧亚板块，阿尔卑斯山脉随之开始隆起，并将特提斯洋的残余部分与大洋隔离开。在渐新世早期，欧洲遭遇到了短期的海洋入侵，这种状况在北美洲则较少发生。渐新世早期在北美洲和欧洲之间似乎仍有陆桥相连，因为这段时期这两处的动物区系仍然十分相似。在渐新世的某段时间里，南美洲最终与南极洲分离，并漂向北美洲；这也使得南极洲环流得以畅通无阻，最终使南极大陆的温度急剧下降。
    </div>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "oligocene1",
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