<template>
  <div class="home">
    <div class="top">Origin</div>
    <div class="banner">
      <img src="~assets/img/home/top.png" alt="">
    </div>
    <div class="mainbody">
      <div class="plane">
        <img src="~assets/img/home/plane.png" alt="">
      </div>
      <div class="tabbar">
        <div class="left">
          <ul>
            <li class="title">前寒武纪</li>
            <li>无生物时代</li>
            <li>太古代</li>
            <li>元古代</li>
            <li><img src="~assets/img/home/fish.jpg" alt=""></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li class="title">中生代</li>
            <li>三叠纪</li>
            <li>侏罗纪</li>
            <li>白垩纪早期</li>
            <li>白垩纪晚期</li>
            <li><img src="~assets/img/home/elephant.jpg" alt=""></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="center">
          <div class="line">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="right">
          <ul>
            <li @click="liClick(1)"><img src="~assets/img/home/sunrise.jpg" alt=""></li>
            <li @click="liClick(2)"></li>
            <li @click="liClick(2)"></li>
            <li @click="liClick(2)"></li>
            <li class="title">古生代</li>
            <li>寒武纪</li>
            <li>奥陶纪</li>
            <li>志留纪</li>
            <li>泥盆纪</li>
            <li>石炭纪</li>
            <li>二叠纪</li>
            <li><img src="~assets/img/home/dinosaur.png" alt=""></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li class="title">新生代</li>
            <li>始新世</li>
            <li>渐新世</li>
            <li>中新世</li>
            <li>上新世</li>
            <li>更新世</li>
            <li>全新世</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// @ is an alias to /src

import router from "../router";

export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      count: 0,
      color: 'blue',
      isActive: false,
    }
  },
  methods: {
    liClick(num){
      if (num){
        this.router = router.replace(' gushengdai')
      }

    }
  }
}
</script>

<style>
  .home{
    width: 100%;
    background: url("~assets/img/home/backgroundimg.jpg");
    height: 100%;
  }
  .home div{
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .top{
    height: 90px;
    line-height: 90px;
    color: var(--color-text);
    font-size: 50px;
  }
  .banner img{
    width: 100%;
    height: 550px;
  }
  .mainbody{
    position: relative;
    height: 1200px;
    padding-top: 100px;
    /*font-family: "方正行楷简体";*/
  }
  .plane{
    position: absolute;
    top: 20px;
    left: 0;
  }
  .mainbody .tabbar{
    margin: 0 auto;
    width: 80%;
    /*height: 200px;*/
    /*background-color: #ff5777;*/
  }
  .tabbar .left{
    float: left;
    /*background-color: yellow;*/
    width: 48%;
    color: var(--color-text);
    font-family: "方正小标宋简体";
    /*height: 200px;*/
  }
  .tabbar .center{
    width: 4%;
    /*height: 200px;*/
    float: left;
  }
  .tabbar .line{
    width: 30px;
    /*background-color: #cccccc;*/
    background: url("~assets/img/home/line.png") repeat-y 10px;
    margin-left: 30px;
  }
  .tabbar .right{
    float: left;
    color: var(--color-text);
    font-family: "方正小标宋简体";
    /*background-color: blue;*/
    /*height: 200px;*/
    width: 48%;
  }
  .line div{
    height: 22px;
    width: 22px;
    background-color: var(--color-text);
    /*margin-bottom: 15px;*/
    margin: 0 auto 35px;
    border-radius: 15px;
  }

  .left ul{
    list-style: none;
    text-align: right;
  }
  .left li{
    color: var(--color-text);
    font-size: 30px;
    height: 57px;
    letter-spacing: 5px;
    /*line-height: 37px;*/
    /*text-indent: 30px;*/
  }
  .right ul{
    list-style: none;
    text-align: left;
  }
  .right li{
    color: var(--color-text);
    font-size: 30px;
    height: 57px;
    /*line-height: 37px;*/
    letter-spacing: 5px;
    text-indent: 30px;
  }
  .mainbody img{
    height: 250px;
    width: 400px;
  }
  .title{
    font-weight: bolder;
    color: yellow;
    font-size: 55px;
    letter-spacing: 10px;
  }
</style>