<template>
  <div id="tmp">
    <third-two :count="3">
      <img src="~/assets/img/secondWindow/Silurian.gif" alt="">
    </third-two>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/silurian')">生物</li>
        <li @click="$router.push('/silurian1')">非生物</li>
        <li @click="$router.push('/silurian2')">大事件</li>
      </ul>
    </div>
    <table id="tb">
      <tr>
        <td><img src="~/assets/img/secondWindow/c1.jpg" alt=""></td>
        <td>节肢动物门甲壳动物亚门介形虫纲，个体微小（多0.4－2mm）。软体被包在两瓣壳内。壳形多样。躯体两侧对称，不分节，被包在两个壳瓣之间。壳面光滑或具各种瘤、槽、刺、脊以及其它纹饰，但不具生长线（这是与软体动物外壳的区别）。 器官发育较完善，身体分头胸部和腹部。具附肢， 末端具尾叉。两壳瓣可不相等，壳质分两层外层－－钙质层；内层－－几丁质，边缘可钙化。有的种具雌雄双形现象。生活领域广泛，能适应淡水、海水等多种生活环境。自早奥陶世出现，一直到现代还相当繁盛。</td>
      </tr>
      <tr>
        <td><img src="~/assets/img/secondWindow/c2.jpg" alt=""></td>
        <td>板足鲎类(Eu-rypterids)是志留纪无脊椎动物中最重要的食肉类代表。它们能游泳。板足鲎类是一类已绝灭的水生节肢动物，因其最后一对附肢宽扁似桨而得名。属于有螯肢亚门的腿口纲（Merostomata）。已发现67属300余种。体表多具鳞片、皱褶等，而且各部分体色亦常有不同。身体大小悬殊，从15厘米到2.5米左右，可能是已知最大的节肢动物。</td>
      </tr>
      <tr>
        <td><img src="~/assets/img/secondWindow/c3.jpg" alt=""></td>
        <td>几丁虫（chitinozoans）是一种在远古海洋中生存了1亿多年的微小动物，生活在4.8亿至3.6亿年前的远古海洋中，身体长度以微米计，形态上看，有长颈瓶状、壶状、圆筒状等多种形状，像是一个个微型“漂流瓶”。</td>
      </tr>
      <tr>
        <td><img src="~/assets/img/secondWindow/c4.png" alt=""></td>
        <td>棘皮动物门已经绝灭的一纲。体为球形，与林檎相似，故得名。由许多排列不规则的多边形骨板(萼板)组成。生存于古生代，以奥陶纪和志留纪最多。海林檎是较原始的有茎棘皮动物，体似林檎(沙果)，又因海生，故名海林檎。萼部由许多多边形骨板组成，板上具单孔、双孔或菱孔。口孔位于萼顶中央或近中央处，肛孔位于其侧，上覆以由小板形成的肛锥，二者之间有水孔及生殖孔。由口孔辐射出5条或更少的短食物沟。或具腕羽，茎不发育，有的完全缺失。中国奥陶纪地层中产有中国海林檎(Sinocystis)、椭圆海林檎(Ovacystis)等。</td>
      </tr>
      <tr>
        <td><img src="~/assets/img/secondWindow/c5.jpg" alt=""></td>
        <td>志留纪的鱼化石是保存好而可靠的最早鱼类记录，但比较原始，数量不多。中国志留纪的鱼化石相对地较多，最早的代表见于兰多维利世的晚期。丁氏甲鳞鱼是中科院科学家2017年3月，在云南曲靖市发现的一种4.2亿年前身披奇特鳞片的古鱼化石，证明早在志留纪（4.44-4.19亿年前）地球就已经进入了“鱼类时代”。丁氏甲鳞鱼（Sparalepis tingi）独特之处在于身体覆盖厚而紧密关节在一起的鳞片，如同身穿盔甲的武士。属名意指其鳞片类似于古波斯步兵手持的柳条编织而成的矩形盾牌。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ThirdTwo from "../../thirdComponents/ThirdTwo";
  export default {
    name: "Silurian",
    components: {ThirdTwo}
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