<template>
  <div id="tmp">
    <third-one :counts="2">
      <img src="~assets/img/demo2.jpg" alt="">
    </third-one>
    <div class="res">
      <ul class="reslist">
        <li>生物</li>
        <li>非生物</li>
        <li>时代的终结</li>
      </ul>
    </div>
    <table id="tb">
      <tr>
        <td><img src="~assets/img/firstWindow/demo3.jpg" alt=""></td>
        <td>在古太古代中出现了最早的植物（原核生物）——蓝绿藻。蓝绿藻（又称蓝藻）它出现的意义就在于对地球生态系统的进一步向着适应现代生物生存的方面发展，就是因为，它会“制造氧气”。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/firstWindow/demo4.jpg" alt=""></td>
        <td>已经形成了足够多的盾构岩来启动可识别的地质过程，板块构造迫使可用的盾构岩相撞，形成了罗迪尼亚(一个俄罗斯术语的意思是“母亲的土地”)，地球上的第一个超级大陆。罗迪尼亚的沿岸水域充满了被称为叠层石的光合藻类的圆形菌落。光合作用开始向大气中增加氧气，对适应早期地球大气减少的生物施加压力。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/firstWindow/demo5.jpg" alt=""></td>
        <td>大陆地壳不断增厚，开始发育有盖层沉积，地球表面始终保持着一种十分有利于生命发展的环境。蓝藻和细菌继续发展。最低等的真核生物—绿藻也相继出现</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdOne from "../../thirdComponents/ThirdOne";
  export default {
    name: "Archaeozoic",
    components: {ThirdOne}
  }
</script>

<style scoped>
  .res{
    margin: 20px auto;
    width: 100%;
    height: 50px;
    background-color: chartreuse;
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