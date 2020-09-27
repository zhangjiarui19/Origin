<template>
  <div id="tmp">
    <tabbar :count="4"></tabbar>
    <div id="mainbody">
      <div class="left">
        <ul class="ulist">
          <li :class="{active: count===1}" @click="$router.push('/eocene')">始新世</li>
          <li :class="{active: count===2}" @click="$router.push('/oligocene')">渐新世</li>
          <li :class="{active: count===3}" @click="$router.push('/miocene')">中新世</li>
          <li :class="{active: count===4}" @click="$router.push('/pliocene')">上新世</li>
          <li :class="{active: count===5}" @click="$router.push('/pleistocene')">更新世</li>
          <li :class="{active: count===6}" @click="$router.push('/holocene')">全新世</li>
        </ul>
      </div>
      <div class="right">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import Tabbar from "../Tabbar";
  export default {
    name: "ThirdFour",
    components: {Tabbar},
    props:{
      count:{
        type: Number,
        default: 0
      }
    },
  }
</script>

<style scoped>
  #tmp{
    background: url("~assets/img/home/backgroundimg.jpg");
  }
  #mainbody{
    width: 80%;
    height: 650px;
    margin: 0 auto;
  }
  #mainbody .left{
    float: left;
    width: 26%;
    /*background-color: #7DCDFF;*/
    /*color: white;*/
    height: 400px;
  }
  #mainbody .right{
    float: right;
    width: 70%;
    /*background-color: #cccccc;*/
    height: 400px;
  }
  .right img{
    margin-top: 29px;
    margin-left: -100px;
    width: 1100px;
    height: 470px;
  }
  .left .ulist{
    list-style: none;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 30px;
    font-family: 方正小标宋简体;
  }
  .ulist li{
    margin-top: 30px;
    height: 70px;
    color: white;
  }
  .active{
    font-family: boder;
    font-family: 方正小标宋简体;
    color: var(--color-text) !important;
  }

</style>