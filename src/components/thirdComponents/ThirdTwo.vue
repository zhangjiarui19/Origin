<template>
  <div id="tmp">
    <tabbar :count="2"></tabbar>
    <div id="mainbody">
      <div class="left">
        <ul class="ulist">
          <li :class="{active: count===1}" @click="$router.push('/cambrian')">寒武纪</li>
          <li :class="{active: count===2}" @click="$router.push('/ordovician')">奥陶纪</li>
          <li :class="{active: count===3}" @click="$router.push('/silurian')">志留纪</li>
          <li :class="{active: count===4}" @click="$router.push('/devonian')">泥盆纪</li>
          <li :class="{active: count===5}" @click="$router.push('/carboniferous')">石炭纪</li>
          <li :class="{active: count===6}" @click="$router.push('/permian')">二叠纪</li>
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
    name: "ThirdTwo",
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