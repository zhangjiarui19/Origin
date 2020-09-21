<template>
  <div class="part">
    <div class="main">
      <div class="left">
        <div><slot name="l1"></slot></div>
        <div><slot name="l2"></slot></div>
        <div><slot name="l3"></slot></div>
      </div>
      <div class="right">
        <div><slot name="img"></slot></div>
      </div>
    </div>
    <div class="tabbar">
      <div></div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Part3"
  }
</script>

<style scoped>
  .part{
    width: 100%;
    height: 100%;
  }
  .main{
    margin: 0 auto;
    height: 300px;
    width: 80%;
  }
  .left{
    font-size: 30px;
    color: white;
    float: left;
    width: 30%;
    height: 399px;
    /*background-color: #cccccc;*/
  }
  .left div{
    height: 100px;
    padding-top: 40px;
    text-indent: 200px;
  }
  .right{
    float: right;
    width: 69%;
    height: 300px;
    /*background-color: #ff5777;*/
  }
</style>