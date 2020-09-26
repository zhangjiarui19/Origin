<template>
  <div id="tabbar">
    <div class="main">
      <div class="plane"><img src="~assets/img/home/plane.png" alt=""></div>
      <div class="content">
        <div class="line">
          <div class="first" :class="{}" @click="$router.push('/precambrian')"></div>
          <div class="second" @click="$router.push('/paleozoic')"></div>
          <div class="third" @click="$router.push('/mesozoic')"></div>
          <div class="fourth" @click="$router.push('/cenozoic')"></div>
        </div>
        <div class="text">
          <ul>
            <li @click="$router.push('/precambrian')">前寒武纪</li>
            <li @click="$router.push('/paleozoic')">古生代</li>
            <li @click="$router.push('/mesozoic')">中生代</li>
            <li @click="$router.push('/cenozoic')">新生代</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tabbar",
    methods: {

    }
  }
</script>

<style scoped>
  #tabbar{
    width: 100%;
    /*background: url("~assets/img/home/backgroundimg.jpg");*/
    height: 200px;
  }
  .main{
    padding: 30px;
    width: 80%;
    margin: 0 auto;
  }
  .plane{
    float: left;
  }
  .content{
    float: left;
    width: 90%;
    margin: 50px auto;
    padding-left: 50px;
  }
  .line{
    height: 20px;
    background-color: #cccccc;
    margin: 0 auto;
    border-radius: 10px;
    position: relative;
  }
  .line div{
    background-color: var(--color-text);
    width: 35px;
    height: 35px;
    border-radius: 15px;
    position: absolute;
  }
  .first{
    left: -5px;
    top: -5px;
  }
  .second{
    /*left: 300px;*/
    left: 22%;
    top: -5px;
  }
  .third{
    top: -5px;
    left: 60%;
  }
  .fourth{
    top: -5px;
    left: 83%
  }
  .text{
    color: var(--color-text);
    font-size: 30px;
    margin: 40px;
  }
  .text ul{
    list-style: none;
  }
  .text li{
    float: left;
  }
  .text ul li:first-child{
    /*width: 310px;*/
    width: 24%;
    margin-left: -80px;
  }
  .text ul li:nth-child(2){
    /*width: 570px;*/
    width: 42%;
  }
  .text ul li:nth-child(3){
    /*width: 430px;*/
    width: 25%;
  }
</style>