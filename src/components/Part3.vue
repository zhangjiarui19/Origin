<template>
  <div class="part">
    <div class="main">
      <div class="left">
        <div><slot name="left"></slot></div>
      </div>
      <div class="right">
        <div><slot name="img"></slot></div>
      </div>
    </div>
    <div class="tab1">
      <div>123</div>
      <div>123</div>
      <div>123</div>
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
    background-color: white;
    float: left;
    width: 30%;
    /*height: 500px;*/
    /*background-color: #cccccc;*/
  }
  .left div{
    height: 150px;
    padding-top: 40px;
    text-indent: 200px;
    /*background-color: #7DCDFF;*/
  }
  .right{
    float: right;
    width: 69%;
    height: 100%;
    /*background-color: #ff5777;*/
  }
  .right img{
    width: 900px;
    height: 380px;
  }
  .tab1{
    width: 100%;
    height: 50px;
    background-color: #cccccc;
    position: sticky;
    top: 0px;
  }
  .tab1 div{
    float: left;
    width: 400px;
    height: 50px;
    text-align: left;
  }
</style>