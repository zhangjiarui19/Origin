<template>
  <div id="tmp">
    <tabbar :count="3"></tabbar>
    <div id="mainbody">
      <div class="left">
        <ul class="ulist">
          <li :class="{active: counts===1}" @click="$router.push('/triassic')">三叠纪</li>
          <li :class="{active: counts===2}" @click="$router.push('/jurassic')">侏罗纪</li>
          <li :class="{active: counts===3}" @click="$router.push('/cretaceous')">白垩纪</li>
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
    name: "ThirdThree",
    components: {Tabbar},
    props:{
      counts:{
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
    height: 410px;
    margin: 0 auto;
  }
  #mainbody .left{
    float: left;
    width: 26%;
    /*background-color: #7DCDFF;*/
    height: 400px;
  }
  #mainbody .right{
    float: right;
    width: 70%;
    /*background-color: #cccccc;*/
    height: 400px;
  }
  .right img{
    width: 900px;
    height: 370px;
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
    height: 100px;
    color: white;
  }
  .active{
    font-family: boder;
    font-family: 方正小标宋简体;
    color: var(--color-text) !important;
  }
</style>