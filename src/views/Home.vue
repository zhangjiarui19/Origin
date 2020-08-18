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
        <div class="left">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
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
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
          </ul>
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
    padding-top: 50px;
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
  .tabbar .left{
    float: left;
    /*background-color: yellow;*/
    width: 48%;
    height: 200px;
  }
  .tabbar .center{
    width: 4%;
    height: 200px;
    float: left;
  }
  .tabbar .line{
    width: 10px;
    background-color: #cccccc;
  }
  .tabbar .right{
    float: left;
    /*background-color: blue;*/
    height: 200px;
    width: 48%;
  }
  .line div{
    height: 12px;
    width: 12px;
    background-color: var(--color-text);
    /*margin-bottom: 15px;*/
    margin: 0 auto 25px;
    border-radius: 5px;
  }

  .left ul{
    list-style: none;
    text-align: right;
  }
  .left li{
    color: var(--color-text);
    font-size: 20px;
    height: 37px;
    /*line-height: 37px;*/
  }

  .right ul{
    list-style: none;
    text-align: left;
  }
  .right li{
    color: var(--color-text);
    font-size: 20px;
    height: 37px;
    /*line-height: 37px;*/
  }
</style>