<template>
  <div>
    <third-three :counts="1">
      <img src="~assets/img/photo/triassic.jpg" alt="">
    </third-three>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/triassic')">生物</li>
        <li @click="$router.push('/triassic1')">非生物</li>
        <li @click="$router.push('/triassic2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      大灭绝：
      三叠纪以一次灭绝事件结束，尤其对海洋生物来说它的摧毁惨重：牙形石灭绝，除鱼龙外所有的海生三叠纪植物爬行动物消失。腕足动物、腹足动物和贝壳等无脊椎动物受到巨大冲击。
      在海洋中，22%的属，大约一半的种消失。这次灭绝事件并非在所有地方的摧残程度都一样。在有些地方几乎它没有任何影响。在其它一些地方实际上所有的迷龙和大多数合弓类动物都消失了。
      许多早的恐龙也均灭绝，而那些发达一些的恐龙却幸存了。许多槽齿目动物也都灭绝了。幸存的植物包括针叶类和苏铁。这次灭绝事件的原因还不清楚。可能的原因有全球性的气候冷却或陨星。
    </div>
  </div>
</template>

<script>
  import ThirdThree from "../../thirdComponents/ThirdThree";
  export default {
    name: "triassic2",
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