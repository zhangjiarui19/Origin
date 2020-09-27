<template>
  <div>
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
    <div id="content">
      <p>寒武纪生命大爆发（Cambrian Explosion）：被称为古生物学和地质学上的一大悬案，自达尔文以来就一直困扰着进化论等学术界。大约6亿年前，在地质学上称做寒武纪的开始，绝大多数无脊椎动物们在几百万年的很短时间内出现了。
        这种几乎是“同时”地、“突然”地出现在寒武纪地层中门类众多的无脊椎动物化石（节肢动物、软体动物、腕足动物和环节动物等），而在寒武纪之前更为古老的地层中长期以来却找不到动物化石的现象，被古生物学家称作“寒武纪生命大爆发”，简称“寒武爆发”。
        达尔文在其《物种起源》的著作中提到了这一事实，并大感迷惑。他认为这一事实会被用做反对其进化论的有力证据。但他同时解释到，寒武纪的动物一定是来自前寒武纪动物的祖先，是经过很长时间的进化过程产生的；寒武纪动物化石出现的“突然性”和前寒武纪动物化石的缺乏，是由于地质记录的不完全或是由于老地层淹没在海洋中的缘故。</p>
    </div>
  </div>
</template>

<script>
  import ThirdTwo from "../../thirdComponents/ThirdTwo";
  export default {
    name: "cambrian2",
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
  #content{
    font-size: 30px;
    line-height: 45px;
    text-indent: 20px;
    width: 80%;
    margin: 20px auto;
  }
</style>