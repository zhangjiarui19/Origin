<template>
  <div class="bg">
    <secondone :count="4"></secondone>
    <div class="content">
      新生代（距今6500万年，CenozoicEra)是地球历史上最新的一个地质时代。随着恐龙的灭绝，中生代结束，新生代开始。新生代被分为三个纪：古近纪和新近纪和第四纪。总共包括七个世：古新世、始新世、渐新世、中新世、上新世、更新世和全新世。这一时期形成的地层称新生界。新生代以哺乳动物和被子植物的高度繁盛为特征，由于生物界逐渐呈现了现代的面貌，故名新生代，即现代生物的时代。
    </div>
    <div class="box">
      <div><div>
        <img src="~assets/img/photo/eocene.jpg" alt="" @click="$router.push('/eocene')">
        <div class="t1">始新世</div>
      </div></div>
      <div>
        <img src="~assets/img/photo/oligocene.jpg" alt="" @click="$router.push('/oligocene')">
        <div class="t1">渐新世</div>
      </div>
      <div>
        <img src="~assets/img/photo/miocene.jpg" alt="" @click="$router.push('/miocene')">
        <div class="t1">中新世</div>
      </div>
      <div>
        <img src="~assets/img/photo/pliocene.jpg" alt="" @click="$router.push('/pliocene')">
        <div class="t1">上新世</div>
      </div>
      <div>
        <img src="~assets/img/photo/pleistocene.jpg" alt="" @click="$router.push('/Pleistocene')">
        <div class="t1">更新世</div>
      </div>
      <div>
        <img src="~assets/img/photo/holocene.jpg" alt="" @click="$router.push('/holocene')">
        <div class="t1">全新世</div>
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