<template>
  <div>
    <third-three :counts="2">
      <img src="~assets/img/photo/jurassic.jpg" alt="">
    </third-three>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/jurassic')">生物</li>
        <li @click="$router.push('/jurassic1')">非生物</li>
        <li @click="$router.push('/jurassic2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      大灭绝：
      侏罗纪时发生过一些明显的地质、生物事件。最大海侵事件发生于晚侏罗世纪末里期，与联合古陆分裂和新海洋扩张速率增强事件相吻合。环太平洋带的内华达运动也发生于纪末里期，这可能显示联合古陆增强分裂与古太平洋板块加速俯冲事件之间存在着某种联系。晚基末里期起，海生动物中出现特提斯大区和北方大区的明显分开，反映古气候分带和古地理隔离程度的加强。中侏罗世末的降温事件在欧亚大陆许多地方均有反映。在波兰、西班牙中、上侏罗统界线层中发现了地内罕见的铱、锇异常，有人认为是地外小星体撞击地球的结果。
    </div>
  </div>
</template>
<script>
  import ThirdThree from "../../thirdComponents/ThirdThree";
  export default {
    name: "jurassic2",
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