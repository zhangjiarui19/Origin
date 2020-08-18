<template>
  <div class="home">
    <div class="top">Origin</div>
    <div class="banner">
      <img src="~assets/img/home/top.jpg" alt="">
    </div>
    <div class="mainbody">
      <div class="plane">
        <img src="~assets/img/home/plane.png" alt="">
      </div>
      <div class="tabbar">
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
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
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
    height: 200px;
  }
  .plane{
    position: absolute;
    top: 20px;
    left: 0;
  }
  .mainbody .tabbar{
    margin: 0 auto;
    width: 80%;
    height: 200px;
    /*background-color: #ff5777;*/
  }
  .tabbar .line{
    width: 20px;
    background-color: #cccccc;
    height: 200px;
  }
</style>