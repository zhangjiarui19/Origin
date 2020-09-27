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
      1.陆地与海洋
      中晚侏罗世时，板块运动导致了南美洲的南部从非洲分开。劳亚古陆也逐渐地从非洲和南美洲分离开，造就了大西洋和墨西哥湾。沿着这些裂谷大陆的边缘，火山活动频繁。与此同时，欧亚大陆南下，缩小了特提斯洋。侏罗纪海平面的上升，北美和欧洲间形成了大陆边缘的海道。
      侏罗纪时期，地球上要比三叠纪时拥有更多的独立陆块，导致海岸带增多。
      2.气候
      整个侏罗纪时期，大多数时期处于温暖和潮湿。当时繁盛的森林植被，形成了如今澳大利亚和南极洲丰富的煤炭资源。尽管那时有局部的干旱地区，但绝大多数盘古大陆，均处于郁郁葱葱的绿洲。劳亚大陆和南部的冈瓦纳大陆生物群，在许多方面，仍然十分独特，动物群具备了较多的洲际色彩。
      这时候全球各地的气候都很温暖，涌入裂缝而生成的海洋产生湿润的风，内陆的沙漠带来雨量。植物延伸至从前不毛的地方，提供分布广泛且数量众多的恐龙（包括最大型的陆上动物）所需的食物。在他们的上空飞翔最早的小型鸟类；这些鸟类可能是由小型的恐龙演化而来。海洋则是由大型、会游泳的新爬行类和已具[现代]线条的硬骨鱼类所共享。
      气候较现代温暖和均一，但也存在热带、亚热带和温带的区别。早、中侏罗世以蒸发岩、风成沙丘为代表的干旱气候带出现于联合古陆中西部的北美南部、南美和非洲，侏罗纪晚期时扩展到亚洲中南部。中国南部，早侏罗世时处于热带-亚热带湿润气候环境，中晚侏罗世逐渐变为炎热干旱环境；中国北部，早、中侏罗世气候温暖潮湿，晚侏罗世温暖潮湿地区缩小。环太平洋带的强烈构造变动与太平洋板块向周围大陆板块的俯冲密切相关。伴随着构造运动的强烈岩浆活动形成了钨、锡、钼、铅、锌、铜、铁等矿产，成为太平洋金属成矿带主体部分。
    </div>
  </div>
</template>

<script>
  import ThirdThree from "../../thirdComponents/ThirdThree";
  export default {
    name: "jurassic1",
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