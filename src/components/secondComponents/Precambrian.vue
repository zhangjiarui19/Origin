<template>
  <div class="bg">
    <secondone :count="1"></secondone>
    <div class="content">
      并未明了生物究竟起源于何时。在格陵兰西岸海外群岛曾发现一些古老石头，可能是早期的有机物。此外在澳大利亚西部有一些保存良好的细菌，已知最早的复杂多细胞生命型态。世界各地有许多5亿4200万年前到6亿年前之间的软体无壳动物化石，被称为埃迪卡拉动物群。至于硬壳动物则出现于前寒武纪结束之后。在前寒武纪的结尾，出现了许多不同型态的动物。这些动物群统称为小壳动物群，所知有限。
    </div>
    <div class="box">
      <div><div>
        <img src="~assets/img/photo/noliving.jpg" alt="" @click="$router.push('/nolivingthing')">
        <div class="t1">无生物时代</div>
      </div></div>
      <div>
        <img src="~assets/img/photo/archaeozoic.gif" alt="" @click="$router.push('/archaeozoic')">
        <div class="t1">太古代</div>
      </div>
      <div>
        <img src="~assets/img/photo/proterozoic.jpg" alt="" @click="$router.push('/proterozoic')">
        <div class="t1">元古代</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Secondone from "../../views/Secondone";
  export default {
    name: "Precambrian",
    components: {Secondone}
  }
</script>

<style scoped>
  .bg{
    background: url('~assets/img/home/backgroundimg.jpg');
    width: 100%;
    height: 1200px;
  }
  .content{
    width: 80%;
    height: 40px;
    /*background: #7DCDFF;*/
    color: var(--color-text);
    margin: 40px auto 60px;
    font-size: 20px;
    text-indent: 20px;
    line-height: 23px;
    /*border: 1px solid var(--color-text);*/
  }
  .box{
    width: 80%;
    display: flex;
    height: 50px;
    margin: 0 auto;
  }
  .box div{
    flex: 1;
    /*background-color: #7DCDFF;*/
  }
  .box img{
    width: 400px;
    height: 300px;
    margin-left: 50px;
  }
  .t1{
    text-align: center;
    font-size: 30px;
    line-height: 70px;
    color: white;
  }
</style>