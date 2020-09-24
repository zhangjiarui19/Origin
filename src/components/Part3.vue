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
    <div class="tab1">
        <ul class="tbul">
          <li>1123</li>
          <li>2123</li>
          <li>312321</li>
        </ul>
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
    background-color: #7DCDFF;
  }
  .right{
    float: right;
    width: 69%;
    height: 100%;
    background-color: #ff5777;
  }
  .tab1{
    width: 100%;
    height: 50px;
    background-color: #cccccc;
    position: sticky;
    top: 0px;

  }
  .tab1 .tbul{
    display: flex;
    list-style: none;
    height: 30px;
    font-size: 20px;
    text-align: center;
  }
  .tbul li{
    flex: 1;
    line-height: 30px;
    background-color: #7DCDFF;
  }
</style>