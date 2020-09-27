<template>
  <div id="tmp">
    <third-two :count="2">
      <img src="~assets/img/secondWindow/ordovician.jpg" alt="">
    </third-two>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/ordovician')">生物</li>
        <li @click="$router.push('/ordovician1')">非生物</li>
        <li @click="$router.push('/ordovician2')">大事件</li>
      </ul>
    </div>
    <table id="tb">
      <tr>
        <td><img src="~assets/img/secondWindow/b1.jpg" alt=""></td>
        <td>代表了一些样子像鱼的非常原始的脊椎动物，只能靠吮吸甚至仅靠水的自然流动将食物送进嘴里食用；因此，它们被称做无颌类。能在水层表面取食。大多数甲胄鱼生活在淡水中。较进步的鳍甲鱼类，游泳能力强，能在水层表面取食。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/b2.png" alt=""></td>
        <td>笔石是奥陶纪最奇特的海洋动物类群，它们自早奥陶世开始即已兴盛繁育，分布广泛。笔石是一类微小的蠕虫状生物，它们像今天的珊瑚虫一样群体生活。整个笔石群体仅有5厘米长，它们漂流在海面上，吃浮游生物，和今天鲸类所吃的大量微小海洋生物是一样的。笔石对于科学家来说是特别重要的，因为它们在一个较长的时期里是逐渐变化的。科学家能够根据共同发现的笔石的种类判定其他海洋生物化石的年龄。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/b3.jpg" alt=""></td>
        <td>腕足动物在这一时期里演化迅速，大部分的类群均已出现，无铰类、几丁质壳的腕足类逐渐衰退，钙质壳的有铰类则盛极一时。腕足类乍看起来很像双壳类，但和它并没有多大关系，它们壳的大小和曲线都不相同。腕足类的铰合部喙，以肉柄固着。腕足类而今比较稀少，但在5亿年～4.5亿年前，它们远比双壳类常见。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/b4.png" alt=""></td>
        <td>牙形石(conodonts) 具有各种各样尖齿或锯齿状物的古代动物遗体，微体古生物学的重要研究内容之一。牙形石可能是一类已经绝灭的海生动物的骨骼或器官所形成的微小化石。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/secondWindow/b5.jpg" alt=""></td>
        <td>直壳鹦鹉螺进入繁盛时期时，它们身体巨大，最长达6-10米，拥有梭子装外壳，喷水前进，游动迅速，发现猎物后会快速追击，再用触手将其抓获。当时大部分动物只要被直壳鹦鹉螺盯上，必死无疑。直壳鹦鹉螺是奥陶纪晚期的顶级掠食者，也是继奇虾之后的第二个世界霸主。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdTwo from "../../thirdComponents/ThirdTwo";
  export default {
    name: "Ordovician",
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
  #tb{
    width: 60%;
    margin: 0 auto;
    font-size: 20px;
    text-indent: 10px;
    line-height: 30px;
  }
  #tb img{
    width: 400px;
    height: 270px;
    margin: 20px;
  }
</style>