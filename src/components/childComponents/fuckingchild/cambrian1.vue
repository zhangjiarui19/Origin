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
      <p>在寒武世时，具有硬壳的动物第一次大量地出现，许多大陆都被浅海所泛滥，超大陆刚瓦那(Gondwana）则正在南极附近形成。
        形成于前寒武世末期（大约距今六亿年前）的超大陆潘诺西亚(Pannotia），在古生代的时候开始四分五裂，一个新的海洋--巨神海（Iapetus Ocean）在劳伦西亚（Laurentia，北美）、波罗地（Baltica，北欧）和西伯利亚(Siberia）这几个古大陆之间扩张。超大陆冈瓦那（Gondwana）则在泛非褶皱带上组合而成当时最大的大陆，范围从赤道延伸到南极。
        在奥陶世时期，温暖的海水把石灰岩和盐岩沉淀在冈瓦那大陆的赤道地区（Australia澳洲、India印度、China中国与Antarctica南极洲），同时在冈瓦那大陆的南极地区(Africa非洲与South America南美）则沉淀了冰河的沉积及冰漂的碎屑。</p>
    </div>
  </div>
</template>

<script>
  import ThirdTwo from "../../thirdComponents/ThirdTwo";
  export default {
    name: "cambrian1",
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