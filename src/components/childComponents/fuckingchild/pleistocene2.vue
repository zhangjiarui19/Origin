<template>
  <div>
    <third-four :count="5">
      <img src="~assets/img/photo/pleistocene.jpg" alt="">
    </third-four>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/pleistocene')">生物</li>
        <li @click="$router.push('/pleistocene1')">非生物</li>
        <li @click="$router.push('/pleistocene2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      灭绝：
      冰河帝国
      在距今2万年到1万年前的某段时期，欧亚大陆北部、大洋洲、美洲马达加斯加的数十种大型动物走向灭绝，北美遭受的打击最为严重，70%的大型哺乳动物在距今大约1.1万年前突然消失。这些大型动物的消失，一直是科学家争论的话题。但据《新科学家》2008年的报道，俄罗斯生物学家正在设想有可能在某一天再现更新世的面貌，他们在俄罗斯西伯利亚修建一座“更新世公园”，希望以此来说明气候突变不应该是更新世大型动物灭绝的元凶。
      大多数人认为，更新世末期冰河时代的消退引起气候和植被的剧烈变化，寒冷、干旱的草地让位于温暖湿润的苔原和森林，大型草食类哺乳动物无法适应生态系统的这种剧变，于是走向末路。随着大型草食动物的消失，依靠捕食这些动物的大型肉食动物也随之很快灭绝，包括剑齿虎和洞穴狮子。
      还有一种理论将动物灭绝的责任归罪于智人（现代人的学名）的大肆捕杀。这种“闪击式捕杀假说”的支持者认为，动物的灭绝和早期现代人大举迁向受影响的地区并非巧合，这些外来的智能动物利用手中的石制标枪和“协同作战”的围捕方式，大肆捕杀行动缓慢的兽群。北美洲的动物损失最为严重，当地人类猎手在距今1.5万年到1万年前穿过白令大陆桥，寻找动物资源丰富且尚未遭到屠宰的大陆。
    </div>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "pleistocene2",
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