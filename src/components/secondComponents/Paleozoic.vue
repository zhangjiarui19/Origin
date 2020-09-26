<template>
  <div class="bg">
    <secondone></secondone>
    <div class="content">
      古生代（Paleozoic，符号PZ)是地质时代中的一个时代，开始于同位素年龄542±0.3百万年(Ma)，结束于251±0.4Ma。古生代属于显生宙，上一个代是新元古代，下一个代是中生代。
      古生代是显生宙的第一个代，上一个代是元古宙的新元古代，下一个代是中生代。古生代包括寒武纪、奥陶纪、志留纪、泥盆纪、石炭纪、二叠纪。其中寒武纪、奥陶纪、志留纪又合称早古生代，泥盆纪、石炭纪、二叠纪又合称晚古生代。

    </div>
    <div class="box">
      <div><div>
        <img src="~assets/img/photo/cambrian.jpg" alt="" @click="$router.push('/cambrian')">
        <div class="t1">寒武纪</div>
      </div></div>
      <div>
        <img src="~assets/img/photo/ordovician.jpg" alt="" @click="$router.push('/ordovician')">
        <div class="t1">奥陶纪</div>
      </div>
      <div>
        <img src="~assets/img/photo/silurian.jpg" alt="" @click="$router.push('/silurian')">
        <div class="t1">志留纪</div>
      </div>
      <div>
        <img src="~assets/img/photo/devonian.jpg" alt="" @click="$router.push('/devonian')">
        <div class="t1">泥盆纪</div>
      </div>
      <div>
        <img src="~assets/img/photo/carboniferous.jpg" alt="" @click="$router.push('/carboniferous')">
        <div class="t1">石炭纪</div>
      </div>
      <div>
        <img src="~assets/img/photo/permian.jpg" alt="" @click="$router.push('/permian')">
        <div class="t1">二叠纪</div>
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
  .box{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    height: 50px;
    margin: 0 auto;
  }
  .content{
    width: 80%;
    height: 40px;
    /*background: #7DCDFF;*/
    color: var(--color-text);
    margin: 40px auto 110px;
    font-size: 23px;
    text-indent: 30px;
    line-height: 30px;
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