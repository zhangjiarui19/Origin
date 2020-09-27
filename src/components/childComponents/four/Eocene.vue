<template>
  <div id="tmp">
    <third-four :count="1">
      <img src="~assets/img/photo/eocene.jpg" alt="">
    </third-four>
    <div class="res">
      <ul class="reslist">
        <li>生物</li>
        <li>非生物</li>
        <li>时代的终结</li>
      </ul>
    </div>
    <table id="tb">
      <tr>
        <td><img src="~assets/img/fourthWindow/b1.jpg" alt=""></td>
        <td>萨摩麟是一种长颈鹿科的动物，属于古长颈鹿。萨摩麟在眼的后部有对角，口鼻部很长，嘴呈圆形；臼齿齿冠很高，适合侧边咀嚼，与牛和羊相似，都适合吃草，因此它应该是生活在开阔的草原上。有人认为萨摩麟是现代两种长颈鹿的祖先，还有一种说法是，只是长颈鹿家族的一个旁支。在上新世，萨摩麟分化为两支，一支是霍加狓，另一支是最早的现代长颈鹿。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/fourthWindow/b2.jpg" alt=""></td>
        <td>披毛犀（拉丁学名：Coelodonta antiquitatis，别名：长毛犀牛），奇蹄目犀科腔齿犀属哺乳动物。其约长3.5~4米，头部和颈部向下低垂，它的鼻端有两只角，前端的角离眼睛之间的角大约200厘米；臼齿齿冠很高，釉质层厚，有许多褶皱，齿凹内充填了致密的白垩。它活跃在欧亚大陆北部，与其同属真犀科的巨型犀牛板齿犀生存在一起。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/fourthWindow/b3.jpg" alt=""></td>
        <td>古代哺乳动物的一属，化石发现于北美洲及欧洲，大约在在始新世(五千万年前)生存，公认为马的祖先。体高约30厘米，脊背能弯曲，背部稍向上拱曲，尾巴较短。四肢细长，靠脚趾行走，前足有四趾，后足有三趾。以嫩树叶为食，虽然吃草，但不能像现代马那样大口咀嚼。因身体灵活，可在草丛和灌木中穿行。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/fourthWindow/b4.jpg" alt=""></td>
        <td>悬猴类(anaptomorphimae)是主要的绝灭眼镜猴类型。生存的时代为早一晚始新世。分布在美洲的西北部和西欧。有不很特化的臼齿，最后上、下臼齿有高和呈球状的主尖，北美早始新世的teronius是了解最多的悬猴类，头骨上显示出有较大的大脑半球，位置靠近的大眼眶，短的鼻和膨大的听泡。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/fourthWindow/b5.jpg" alt=""></td>
        <td>尤因它兽即恐角兽，尤因它兽是已知恐龙灭绝2000多万年来陆地上首次出现最早的泰坦级哺乳动物。它们名字的来源是由于最早被发现在北美洲的尤因它山区，位于于美国怀俄明州近福特·布瑞橘尔发现。属于早期蹄类哺乳动物中的恐角类（生活在古新世至始新世渐新世之交，由另一类早期蹄类动物钝脚目进化而来），包括原恐角兽，戈壁兽，始王兽，尤因它兽等类群。尤因它兽虽然是恐角目中最著名的，但生存时代不长，仅限于始新世一段时间。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdFour from "../../thirdComponents/ThirdFour";
  export default {
    name: "Eocene",
    components: {ThirdFour}
  }
</script>

<style scoped>
  .res{
    margin: 20px auto;
    width: 100%;
    height: 50px;
    background-color: chartreuse;
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
  #tb{
    width: 60%;
    margin: 0 auto;
    font-size: 20px;
    text-indent: 10px;
    line-height: 30px;
  }
  #tb img{
    width: 400px;
    height: 270px;
    margin: 20px;
  }
</style>