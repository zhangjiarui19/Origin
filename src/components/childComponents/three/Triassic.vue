<template>
  <div id="tmp">
    <third-three :counts="1">
      <img src="~assets/img/photo/triassic.jpg" alt="">
    </third-three>
    <div class="res">
      <ul class="reslist">
        <li>生物</li>
        <li>非生物</li>
        <li>时代的终结</li>
      </ul>
    </div>
    <table id="tb">
      <tr>
        <td><img src="~assets/img/thirdWindow/a1.jpg" alt=""></td>
        <td>黄昏鳄身材娇小，长有长而苗条地后肢，短小的前肢，是早期真正的两足行走的动物代表，相对于派克鳄（Euparkeria ）或鸟鳄类，黄昏鳄的两足行走似乎更加完善，为了躲避波斯特鳄和卡罗林狂齿鳄、伪帕拉鳄（Pseudopalatus）等植龙类的袭击，黄昏鳄练就了迅速移动的能力，并经常与正体龙（Typothorax）等恩吐龙类结伴在一起。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/thirdWindow/a2.jpg" alt=""></td>
        <td>扁肯氏兽生活在二亿三千万年前的三叠纪，身体短宽，肢体粗大，上有许多粒状突起，头大尾短，上下颌骨的外表很像现代龟类的喙。它们成群地觅食，用两个长牙自卫。扁肯氏兽喜欢群居生活，居住在旷野中，以嚼食矮小的蕨类植物为食。扁肯氏兽最主要的特征是两个长长的獠牙和强壮的喙状嘴，这能帮助它食用坚硬的植物。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/thirdWindow/a3.jpg" alt=""></td>
        <td>波斯特鳄生活在北美洲的丛林中，是以发现地得克萨斯州的小镇波斯特命名的。波斯特鳄的体形不适合快速奔跑，但波斯特鳄经常从隐蔽处冲出，偷袭其他动物，并对其造成致命伤害，进而猎杀它们。波斯特鳄是三叠纪时期的优势猎食动物之绝大多数动物都对它们敬而远之。
          波斯特鳄的背部是厚重的鳞甲，从颈部上方一直延伸到尾巴，构成了“24小时、全方位国家保安级”防御系统，睡觉更安心。
          波斯特鳄的前肢长度大约是后肢长度的三分之一，这种较短前肢常见于二足方式行走的爬行动物。因此有学者认为波斯特鳄可以采取两足行走的步态。不过，也有学者认为波斯特鳄的身体粗壮，仅仅依靠后足不足以支撑如此大型的躯体，所以应该是四足行走的动物。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/thirdWindow/a4.jpg" alt=""></td>
        <td>距今1.6亿年前出现的中华侏罗兽，是地球上出现的最早的真兽亚纲的哺乳动物，与前两种哺乳动物相比，中华侏罗兽的体长比它们都要小，体长仅有10公分左右（含尾巴），体重仅有10g左右，它主要生活在树上以昆虫为食。</td>
      </tr>
      <tr>
        <td><img src="~assets/img/thirdWindow/a5.jpg" alt=""></td>
        <td>腔骨龙（学名Coelophysis）又名虚形龙，腔骨龙科，腔骨龙属，是北美洲的小型、肉食性、双足恐龙，是最早发现几副完整骨骼的恐龙，也是已知最早的恐龙之一。它最早出现于三叠纪晚期的诺利阶。
          及“φυσις”（意即形态），是取自它那空心的四肢骨头。
          腔骨龙的体型亦比艾雷拉龙及始盗龙更为衍化。腔骨龙的头部具有着大型洞孔，可帮助减轻头颅骨的重量，而洞孔间的狭窄骨头可以保持头颅骨的结构完整性。长颈部则呈S形。
          腔骨龙的躯体与基本的兽脚亚目体型一致，但肩带则有一些有趣的特征，就是它们有着叉骨，是恐龙中已知最早的例子。腔骨龙的每只手有四指，其中只有三指是有功能的，第四指则藏于手掌的肌肉内。
          腔骨龙的骨盆及后肢与兽脚亚目的体型有少许差别。它因开放的髋臼及笔直的脚跟关节，而被定义为恐龙。后肢脚掌有三趾，而后趾是不接触地面的。
          腔骨龙的长尾巴有不寻常的结构，在其脊椎的前关节突互相交错，形成半疆直的结构，似乎可制止它的尾巴上下摆动。当腔骨龙快速移动时，尾巴就因而成为了舵或平衡物。
          腔骨龙非常纤细，可能是种善于奔跑的动物。腔骨龙的头部长而狭窄，锐利的锯齿状牙齿显示它们为肉食性，可能以小型、类似蜥蜴的动物为食。它们可能以小群体方式集体猎食。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdThree from "../../thirdComponents/ThirdThree";
  export default {
    name: "Triassic",
    components: {ThirdThree}
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
    width: 80%;
    margin: 0 auto;
  }
  #tb img{
    width: 400px;
    height: 270px;
    margin: 20px;
  }
</style>