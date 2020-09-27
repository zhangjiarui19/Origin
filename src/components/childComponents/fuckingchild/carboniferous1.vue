<template>
  <div>
    <third-two :count="5">
      <img src="~assets/img/secondWindow/carboniferous.jpg" alt="">
    </third-two>
    <div class="res">
      <ul class="reslist">
        <li @click="$router.push('/carboniferous')">生物</li>
        <li @click="$router.push('/carboniferous1')">非生物</li>
        <li @click="$router.push('/carboniferous2')">大事件</li>
      </ul>
    </div>
    <div id="content">
      环境：
      石炭纪是地壳运动非常活跃的时期，因而古地理的面貌有着极大的变化。这个时期气候分异现象又十分明显，北方古大陆为温暖潮湿的聚煤区，冈瓦纳大陆却为寒冷大陆冰川沉积环境。气候分带导致了动、植物地理分区的形成。
      石炭纪是地壳发展史上重要的造山时期，地壳上分布最广的晚古生代海西山系的雏型，基本上在石炭纪形成。早石炭世末期的苏台德运动是晚古生代最主要一次构造变动，使北美的阿帕拉钦地槽、西欧的莱茵海西地槽、欧亚交界的乌拉尔地槽等的主体部分皱起形成山系;西伯利亚地台以南的辽阔地槽区，大致可以中天山-内蒙古自治区南部一线为界，其北部石炭纪陆相为主，苏台德运动也明显存在。石炭纪的古气候问题中最令人注意的是：岗瓦纳大陆自石炭纪末至二叠纪初的大规模的冰川活动现象、持续时间长达5000万年，属极地大陆冰盖类型。
      根据石炭纪的珊瑚礁分布，可以推断早石炭世的赤道带通过北美洲中部，西北欧经黑海穿过中国西北、华南到达印尼和澳洲东部。石炭纪同大陆上的古气候相适应的是植物地理区系的分布，欧美植物区和华夏植物区为热带、亚热带气候，冈瓦纳植物区和安加拉植物区分别代表热带以外的南北温凉气候区。世界上各地石炭纪的成煤时期早晚也有差别，分别代表各地区的热带潮湿气候，石炭纪的干旱气候区仅限于一定的地理分布,同泥盆纪和二叠纪相比，干旱面积较小,干旱气候同蒸发岩类沉积的分布相适应，例如亚洲早石炭世从哈萨克斯坦南部经天山伸延至南天山和塔里木，哈萨克斯坦向东到西伯利亚干旱气候一直延续到中石炭世。南半球的冈瓦纳大陆，石炭纪时高出海面，从石炭纪中晚期开始气候变冷，冰川活动一直持续到早二叠世，冰期和间冰期沉积在南美、南非、印度和澳大利亚都有广泛的分布，在南非南部冰川呈放射状方向流动。在北半球，仅在西伯利亚东部可能为寒冷干燥气候。石炭纪时陆地海岸和沼泽地区气候温暖潮湿,形成重要的煤矿,中国华南早石炭世晚期的测水组(湖南)、梓山组（江西）、叶家塘组（浙江），均含可采煤层。东北、华北和西北的上石炭统，含有重要的煤系。大陆上经过长期剥蚀的地区，往往形成铝土矿和耐火粘土，中国华北石炭系含有G层铝土矿和山西式铁矿,贵州清镇一带下石炭统顶部亦含大型铝土矿。北美晚石炭世蕴藏有油页岩和石油。中国石炭系也是油气勘探的重要层位。中国新疆、甘肃、宁夏中部石炭系含有石膏及蒸发岩矿床。石炭纪碳酸盐岩沉积分布广泛，世界各地开采石灰岩和白云岩作为石灰和水泥的原料。
    </div>
  </div>
</template>

<script>
  import ThirdTwo from "../../thirdComponents/ThirdTwo";
  export default {
    name: "carboniferous1",
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
  #content{
    font-size: 30px;
    line-height: 45px;
    text-indent: 20px;
    width: 80%;
    margin: 20px auto;
  }
</style>