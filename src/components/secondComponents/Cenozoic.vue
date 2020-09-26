<template>
  <div class="bg">
    <secondone></secondone>
    <div class="content"></div>
    <div class="box">
      <div><div>
        <img src="~assets/img/home/fish.jpg" alt="" @click="$router.push('/eocene')">
        <div class="t1">sad</div>
      </div></div>
      <div>
        <img src="~assets/img/home/fish.jpg" alt="" @click="$router.push('/oligocene')">
        <div class="t1">sad</div>
      </div>
      <div>
        <img src="~assets/img/home/fish.jpg" alt="" @click="$router.push('/miocene')">
        <div class="t1">sad</div>
      </div>
      <div>
        <img src="~assets/img/home/fish.jpg" alt="" @click="$router.push('/pliocene')">
        <div class="t1">sad</div>
      </div>
      <div>
        <img src="~assets/img/home/fish.jpg" alt="" @click="$router.push('/Pleistocene')">
        <div class="t1">sad</div>
      </div>
      <div>
        <img src="~assets/img/home/fish.jpg" alt="" @click="$router.push('/holocene')">
        <div class="t1">sad</div>
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
    background: #7DCDFF;
    margin: 20px auto;
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