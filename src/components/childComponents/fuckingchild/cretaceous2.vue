<template>
  <div>
    <third-three :counts="3">
      <img src="~assets/img/photo/cretaceous.jpg" alt="">
    </third-three>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/cretaceous')">生物</li>
        <li @click="$router.push('/cretaceous1')">非生物</li>
        <li @click="$router.push('/cretaceous2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      大灭绝：
      剧烈的地壳运动和海陆变迁，导致了白垩纪生物界的巨大变化，中生代许多盛行和占优势的门类（如裸子植物、爬行动物、菊石和箭石等）后期相继衰落和绝灭，新兴的被子植物、鸟类、哺乳动物及腹足类、双壳类等都有所发展，预示着新的生物演化阶段——新生代的来临。
      白垩纪是地球上海陆分布和生物界急剧变化、大西洋迅速开裂和火山活动频繁的时代，后期地势低平发生了广泛的海侵。晚白垩世被子植物代替裸子植物在陆上占优势，是植物界的一大变革。动物界在白垩纪末才发生重大变化，恐龙、菊石和其他许多生物类群大量灭绝，预示着新生代即将开始。对引起这次大规模生物灭绝的原因，在国际科学界展开了热烈的争论。颇为流行的“地外事件”学说认为，地球上一些地方,白垩-第三系界线上的粘土岩中铱元素异常高含量，是宇宙中一颗巨大的流星碰撞地球产生的类似核冬天效应的结果，据此，在世界各地确定白垩-第三系界线时,铱异常就是一条重要原则。但是，对“地外事件”持怀疑和反对意见的人也不少，他们认为，白垩纪末生物大规模灭绝是逐渐发生的，是生态改变的结果，而不是一次简单的天外来客撞击地球所引起的灾难。
    </div>
  </div>
</template>

<script>
  import ThirdThree from "../../thirdComponents/ThirdThree";
  export default {
    name: "cretaceous2",
    components: {ThirdThree}
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