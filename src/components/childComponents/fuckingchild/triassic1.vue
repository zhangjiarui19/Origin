<template>
  <div>
    <third-three :counts="1">
      <img src="~assets/img/photo/triassic.jpg" alt="">
    </third-three>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/triassic')">生物</li>
        <li @click="$router.push('/triassic1')">非生物</li>
        <li @click="$router.push('/triassic2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      1.陆地与海洋
      从早石炭世开始聚合的劳伦大陆，在三叠纪由北区的劳亚大陆和南边冈瓦纳大陆整体拼合成规模巨大的泛大陆。
      陆地半圈起一个广大的“特提斯洋”，其北侧的陆地部分称为“劳亚大陆”，大致是由现今北美、欧洲及亚洲的大部分地区组成；南侧的部分称为“冈瓦纳古陆”，主要是由现今的非洲、阿拉伯、印度、澳洲及东南极组成。
      地球上其余的地方则是浩瀚的“泛大洋”，其面积广达现今太平洋的两倍。海西运动以后，阿尔卑斯以北的欧洲地区、乌拉尔山区、北美东部及喜马拉雅山以北的亚洲地区，许多晚古生代的地槽转变为稳定区。
      在三叠纪中期之后，北美洲东部、欧洲中、西部及非洲西北部，发育了中大西洋裂谷系。另外在中亚、西伯利亚、黑海和南非等地区也发育的一些小型裂谷系。随后，冈瓦纳大陆内部开始裂解（印度与非洲裂谷），此时长久聚集的陆地终于开始迈向分裂。
      由于华北、扬子以及基默里陆块群不断向北漂移，在三叠纪中—晚期华北和扬子陆块发生碰撞。晚三叠世中期古特提斯洋的关闭，基默里陆块群与欧亚大陆碰撞导致在欧亚大陆南缘发生造山作用。
      2.气候
      从晚二叠世开始冰川消失，海平面上升（比现今海平面高约７０ｍ），全球变暖，泛大陆大部分地区（４５°Ｓ～５０°Ｎ）处于干旱带和热带，而其余地区处于温带。
      三叠纪全球范围温度较高，冰川消融，气候以干旱带为主。三叠纪发育的大岩浆岩省、多个热点、大量的火山活动导致在三叠纪早期全球变暖、缺氧、使得有机质沉积保存极少。
    </div>
  </div>
</template>

<script>
  import ThirdThree from "../../thirdComponents/ThirdThree";
  export default {
    name: "triassic1",
    components: {ThirdThree}
  }
</script>

<style scoped>
  .res{
    margin: 20px auto;
    width: 100%;
    height: 50px;
    background-color: #e0e0e0;
    position: sticky;
    top: 0px;
  }
  .res .reslist{
    list-style: none;
  }
  .res li{
    float: left;
    line-height: 30px;
    /*text-align: center;*/
    margin: auto 270px;
  }
  #content{
    font-size: 30px;
    line-height: 45px;
    text-indent: 20px;
    width: 80%;
    margin: 20px auto;
  }
</style>