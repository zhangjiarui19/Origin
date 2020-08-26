<template>
  <div id="tabbar">
    <div class="main">
      <div class="plane"><img src="~assets/img/home/plane.png" alt=""></div>
      <div class="content">
        <div class="line">
          <div class="first"></div>
          <div class="second"></div>
          <div class="third"></div>
          <div class="fourth"></div>
        </div>
        <div class="text">
          <ul>
            <li>前寒武纪</li>
            <li>古生代</li>
            <li>中生代</li>
            <li>新生代</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
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
    width: 80%;
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
    left: 300px;
    top: -5px;
  }
  .third{
    top: -5px;
    left: 900px;
  }
  .fourth{
    top: -5px;
    left: 1240px;
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
    width: 52%;
  }
  .text ul li:nth-child(3){
    /*width: 430px;*/
    width: 23%;
  }
</style>