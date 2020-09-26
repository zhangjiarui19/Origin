<template>
  <div class="bg">
    <secondone></secondone>
    <div class="content">
      中生代（Mesozoic）是显生宙的三个地质时代之一，可分为三叠纪，侏罗纪和白垩纪三个地质年代。中生代最早是由意大利地质学家Giovanni Arduino所发表，当时名为第二纪（Secondary），以相对于现代的第三纪。在希腊文中，中生代意为“中间的”+“生物”。中生代介于古生代与新生代之间。由于这段时期的优势动物是爬虫类动物，尤其是恐龙，因此又称为爬行动物时代（Age of the Reptiles）。
    </div>
    <div class="box">
      <div><div>
        <img src="~assets/img/photo/triassic.jpg" alt="" @click="$router.push('/triassic')">
        <div class="t1">三叠纪</div>
      </div></div>
      <div>
        <img src="~assets/img/photo/jurassic.jpg" alt="" @click="$router.push('/jurassic')">
        <div class="t1">侏罗纪</div>
      </div>
      <div>
        <img src="~assets/img/photo/cretaceous.jpg" alt="" @click="$router.push('/cretaceous')">
        <div class="t1">白垩纪</div>
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
    margin: 40px auto 110px;
    font-size: 23px;
    text-indent: 30px;
    line-height: 30px;
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