<template>
  <div>
    <third-two :count="3">
      <img src="~/assets/img/secondWindow/Silurian.gif" alt="">
    </third-two>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/silurian')">生物</li>
        <li @click="$router.push('/silurian1')">非生物</li>
        <li @click="$router.push('/silurian2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      环境：
      志留系三分性质比较显著。一般说来，早志留世到处形成海侵，中志留世海侵达到顶峰，晚志留世各地有不同程度的海退和陆地上升，表现了一个巨大的海侵旋回。志留纪晚期，地壳运动强烈，古大西洋闭合，一些板块间发生碰撞，导致一些地槽褶皱升起，古地理面貌巨变，大陆面积显著扩大，生物界也发生了巨大的演变，这一切都标志着地壳历史发展到了转折时期。
      主要版块
      志留纪时期全球主要的地块有冈瓦纳、劳伦、欧洲（波罗的海）、西伯利亚、科累马、哈萨克斯坦、中朝、塔里木、华南等9个。其中最大的是冈瓦纳地块，集中在南半球的高纬度区。其他地块则分布在当时的中、低纬度区，特别是低纬度区。介于劳伦和欧洲两大板块之间的海洋为古大西洋。这一古洋在加里东末期一度闭合，形成加里东褶皱带。劳伦板块与之间的前阿巴拉契亚洋闭合后形成阿巴拉契亚褶皱带。劳伦板块与欧洲板块在志留纪末期相遇碰撞，形成广泛沉积老红砂岩的欧美大陆。当时的西伯利亚板块与现今的地理方位几乎转了180°哈萨克斯坦板块是由数个中间地块联合而成，介于西伯利亚与塔里木两个板块之间。无论从动物群特征或海相红层等沉积特征来看，都表明塔里木介于中朝与华南二板块之间。中朝与华南两个板块之间为秦岭洋。
      气候特点
      志留纪初期，南极冰盖迅速消融，导致志留纪海洋和大气环流减弱，纬向气候分带不明显，深海部分相对较暖，含氧量较低，易成滞流。因此，除高纬度的冈瓦纳大陆外，其他各板块大都处于干热或温暖的气候条件下，这种全球性的温暖气候主要反映在：
      ①志留纪特别在兰多维利世初期全球广布的黑色笔石页岩，表明滞流环境的普遍性；
      ②碳酸盐岩和生物礁的广泛分布，在北美和北欧尤为明显；
      ③志留纪的海相红层普遍发育，在欧洲、华南、西伯利亚、哈萨克斯坦各板块中均有发现；
      ④志留纪的蒸发岩发育在西伯利亚、科累马和澳大利亚。
    </div>
  </div>
</template>

<script>
  import ThirdTwo from "../../thirdComponents/ThirdTwo";
  export default {
    name: "silurian1",
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