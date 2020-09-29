<template>
  <div class="home">
    <div class="top">Origin</div>
    <div class="banner">
      <img src="~assets/img/home/top.png" alt="">
    </div>
    <div class="mainbody">
<!--      <div class="plane">-->
<!--        <img src="~assets/img/home/plane.png"  alt="">-->
<!--      </div>-->
      <div class="tabbar">
        <div class="left">
          <ul>
            <li class="title" @click="$router.push('/precambrian')">前寒武纪</li>
            <li @click="$router.push('nolivingthing')">无生物时代</li>
            <li @click="$router.push('archaeozoic')">太古代</li>
            <li @click="$router.push('proterozoic')">元古代</li>
            <li><img src="~assets/img/home/fish.jpg" alt=""></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li class="title" @click="$router.push('mesozoic')">中生代</li>
            <li @click="$router.push('triassic')">三叠纪</li>
            <li @click="$router.push('jurassic')">侏罗纪</li>
            <li @click="$router.push('cretaceous')">白垩纪早期</li>
            <li @click="$router.push('cretaceous')">白垩纪晚期</li>
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
            <li><img src="~assets/img/home/sunrise.jpg" id="only" alt=""></li>
      <li></li>
      <li></li>
      <li></li>
      <li class="title" @click="$router.push('paleozoic')">古生代</li>
      <li @click="$router.push('cambrian')">寒武纪</li>
      <li @click="$router.push('ordovician')">奥陶纪</li>
      <li @click="$router.push('silurian')">志留纪</li>
      <li @click="$router.push('devonian')">泥盆纪</li>
      <li @click="$router.push('carboniferous')">石炭纪</li>
      <li @click="$router.push('permian')">二叠纪</li>
      <li><img src="~assets/img/home/dinosaur.png" alt=""></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li class="title" @click="$router.push('cenozoic')">新生代</li>
      <li @click="$router.push('eocene')">始新世</li>
      <li @click="$router.push('oligocene')">渐新世</li>
      <li @click="$router.push('miocene')">中新世</li>
      <li @click="$router.push('pliocene')">上新世</li>
      <li @click="$router.push('pleistocene')">更新世</li>
      <li @click="$router.push('holocene')">全新世</li>
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
  .title{
    font-weight: bolder;
    color: red;
    font-size: 55px;
    letter-spacing: 10px;
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
  #only{
    height: 200px;
    width: 400px;
  }

</style>