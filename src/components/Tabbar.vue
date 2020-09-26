<template>
  <div id="tabbar">
    <div class="main">
      <div class="plane"><img src="~assets/img/home/plane.png" alt=""></div>
      <div class="content">
        <div class="line">
          <div class="first" :class="{}" @click="firstClick"></div>
          <div class="second" @click="secondClick"></div>
          <div class="third" @click="thirdClick"></div>
          <div class="fourth" @click="fourthClick"></div>
        </div>
        <div class="text">
          <ul>
            <li @click="firstClick">前寒武纪</li>
            <li @click="secondClick">古生代</li>
            <li @click="thirdClick">中生代</li>
            <li @click="fourthClick">新生代</li>
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
      firstClick(){
        this.$router.push('/precambrian')
        console.log(this.$router.path);
        //this.$route.path.indexOf(this.path) !== -1
        console.log(this.path.indexOf('paleozoic') === -1);
      },
      secondClick(){
        this.$router.push('/paleozoic')
      },
      thirdClick(){
        this.$router.push('/mesozoic')
      },
      fourthClick(){
        this.$router.push('/cenozoic')
      }
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