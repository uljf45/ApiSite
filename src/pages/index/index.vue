<template>
  <div id="index">
    <idc-header></idc-header>
    <carousel :items="1" :nav="false" :autoHeight="true" >
      <div class="banner banner1"></div>
    </carousel>
    <idc-block>
      <idc-block-item v-for="(item, index) in items1" :key="index" :item="item" :fontColor="'dark'"></idc-block-item>
    </idc-block>
    <idc-block :bgColor="'dark'">
      <idc-block-item v-for="(item, index) in items2" :key="index" :item="item"></idc-block-item>
    </idc-block>
    <idc-block>
      <idc-block-item v-for="(item, index) in items3" :key="index" :item="item" :fontColor="'dark'"></idc-block-item>
    </idc-block>
    <idc-footer></idc-footer>
  </div>
</template>

<script>
import IdcHeader from '@/components/common/IdcHeader.vue'
import Carousel from 'vue-owl-carousel'
import IdcBlock from '@/components/common/IdcBlock.vue'
import IdcBlockItem from '@/components/common/IdcBlockItem.vue'
import IdcFooter from '@/components/common/IdcFooter.vue' 

export default {
  name: 'index',
  components: {
    IdcHeader,
    Carousel,
    IdcBlock,
    IdcBlockItem,
    IdcFooter
  },
  data () {
    return {
      items1: [
        {
          icon: './icons/zhupiaopiao.png',
          title: '高效',
          content: '可通过2000+节点，助你到达成功的彼岸',
        },
        {
          icon: './icons/fangyu.png',
          title: '安全',
          content: '多年专注行业安全问题，为你的业务保驾护航'
        },
        {
          icon: './icons/sudu.png',
          title: '速度',
          content: '良好的国内及国外运营商关系，让你一路向前'
        },
        {
          icon: './icons/zhidexinlai.png',
          title: '可信赖',
          content: '强大的技术团队，7X24X365不间断待命，让你安枕无忧'
        },
      ],
      items2: [
        {
          icon: './icons/siyouyun.png',
          title: '私有云',
          content: '专属于你的云；10多年云技术团队全心打造，具有多地高速通道联通，99.999%的网络可用性+100%的基础架构可用性，让你的核心组件永不停步！'
        },
        {
          icon: './icons/fuwuqi.png',
          title: '高防服务器',
          content: '针对IDC机房内的互联网客户，提供全栈DDoS攻击防护服务，该服务具有网络路径最优、秒级切入切出、高达1T防护带宽和多种线路选择等优势，客户零操作即可接入服务。同时还提供定制化服务，以满足客户不同场景的业务需求。'
        },
        {
          icon: './icons/fuwuqi.png',
          title: 'CDN高防',
          content: '近年来，我国的CDN行业一直处于迅猛的发展态势，无论是企业、政府及媒体，在部署互联网业务的同时，都会用到CDN服务。南方联合在解决方案方面部署得非常完善，全方面、多层次地考虑到了各领域客户对CDN的需求。'
        },
        {
          icon: './icons/yunwei.png',
          title: '运维服务',
          content: '我们的支持与服务可根据你当前或计划的使用案例，为您提供一套独特的工具和专业知识，一帮助你创造奇迹'
        },
      ],
      items3: [
        {
          icon: './icons/youxi.png',
          title: '游戏解决方案',
          content: '集游戏部署、游戏运营以及游戏安全三大要素，游戏行业服务器部署方案全面解决多玩家在线，充值账户安全以及推广运营等问题，帮助游戏企业快速部署，打造安全可靠的解决方案，更好应对游戏行业的发展需求。'
        },
        {
          icon: './icons/zhibo.png',
          title: '直播解决方案',
          content: '在线视频直播是目前互联网较为常见的网络应用，包括在线娱乐平台、在线电子竞技直播、在线直播课堂、视频会议、在线电视直播、体育赛事直播等应用。而如今，随着游戏行业的火爆，电子竞技直播业务需求随之而来，特别是海外直播用户群体庞大，这就要求了设备在计算能力，网络方面必须具备一些特殊的要求。'
        },
        {
          icon: './icons/ddos.png',
          title: 'DDOS解决方案',
          content: 'DDOS高防解决方案针对DDOS攻击,香港BIGNET提供香港高防服务器租用。客户可以把网站域名解析到服务高防IP，有攻击时，高防线路会对攻击的流量进行清洗过滤，把真正的有效流量导到服务器。让攻击不影响服务器正常使用。'
        },
        {
          icon: './icons/jiankong.png',
          title: '监控解决方案',
          content: '结合BIGNET网络运维多年企业安全实战经验，深度分析游戏行业典型安全问题，为游戏行业客户打造专业，可靠的游戏安全解决方案。'
        },
      ],
      
    }
  }
}
</script>

<style>
#index {
  min-width: 1024px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.owl-carousel {
  min-width: 1024px;
  height: 468px;
}
.owl-dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
}
.owl-dot:focus {
  outline: none;
}
.banner {
  width: 100%;
  height: 468px;
  background: url('~@/assets/imgs/banner1.png') no-repeat center center;
  background-size: cover;
}
.banner1 {
  background-image: url('~@/assets/imgs/banner1.png');
}
</style>
