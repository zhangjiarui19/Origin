<template>
  <div>
    <third-four :count="4">
      <img src="~assets/img/photo/pliocene.jpg" alt="">
    </third-four>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/pliocene')">生物</li>
        <li @click="$router.push('/pliocene1')">非生物</li>
        <li @click="$router.push('/pliocene2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      环境：
      上新世时气候开始变冷变干，四季比此前的中新世分明，有点象今天的气候。上新世开始前后南极洲开始被冰雪覆盖，中纬度的冰川在上新世末期前也已发展，北冰洋的冰层形成。上新世末南极洲已经终年被冰雪覆盖。上新世的海洋依然相当温暖，但其水温在不断下降。北冰洋的冰盖形成后使得气候变得干燥，北大西洋上的浅寒流加剧。
      巴拿马地峡上新世时大陆板块继续向它们今天的位置移动，上新世初它们离今天的位置约为250千米，上新世未它们离今天的位置约70千米。南美洲与北美洲通过巴拿马地峡连接到一起，导致南美洲的有袋类动物几乎灭绝。巴拿马地峡的形成对地球的气候有很大影响，原来沿赤道的大洋暖流被切断，大西洋开始变冷，大西洋和北冰洋的水温降低。
      非洲板块与欧洲板块的碰撞使地中海开始形成。古地中海消失。
      海面的降低使亚洲和阿拉斯加之间形成了一条地峡。
      在地中海、印度和中国有上新世的海底岩石暴露，其它地方上新世的海底岩石一般在海岸附近可以找到。。
    </div>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "pliocene1",
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