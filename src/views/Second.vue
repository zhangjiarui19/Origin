<template>
  <div class="sce">
    <tabbar></tabbar>
    <div class="main">
      <table class="table">
        <tr>
          <td>
            <div>
              <slot name="tl"></slot>
              <div class="message"><slot></slot></div>
            </div>
          </td>
          <td>
            <div>
              <slot name="tr"></slot>
              <div class="message"><slot></slot></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <slot name="bl"></slot>
              <div class="message"><slot></slot></div>
            </div>
          </td>
          <td>
            <div>
              <slot name="br"></slot>
              <div class="message"><slot></slot></div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import Tabbar from "../components/Tabbar";
  export default {
    name: "Second",
    components: {Tabbar}
  }
</script>

<style scoped>
  .sce{
    background: url("~assets/img/home/backgroundimg.jpg");
  }
  .main{
    width: 80%;
    margin: 30px auto;
  }
  .main .table{
    margin: 0 auto;
    width: 60%;
    color: white;
    font-size: 30px;
    text-align: center;
  }
  .table tr{
    margin: 50px;
  }
  .table td{
    margin: 50px;
    text-align: center;
  }
  .table img{
    width: 550px;
    height: 400px;
  }
</style>