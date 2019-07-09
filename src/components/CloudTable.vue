<template>
    <div class="cloud-table">
        <div class="tabs">
            <div v-for="(item, index) in items" :key="index" class="tab" :class="{active: tabIndex === index}" v-text="item.name" @mouseover="tabIndex = index"></div>
        </div>
        <div v-for="(item, index) in items" :key="index" v-show="tabIndex === index" class="content">
            <p class="p1" v-text="item.title"></p>
            <p class="p2" v-html="item.content">
            </p>
            <div class="recommend">
                <div class="recommend-left">
                    <span class="recommend-title">推荐配置</span>
                    <div class="circles">
                        <div v-for="(config, ind) in item.configs" :key="ind" class="circle">
                            <p class="circle-p1" v-html="config.txt1">16核</p>
                            <p class="circle-p2" v-text="config.txt2">CPU</p>
                        </div>
                    </div>
                </div>
                <div class="btn-pay">立即购买</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CloudTable',
    data () {
        return {
            tabIndex: 0,
            items: [
                {
                    name: '入门型',
                    title: '适用对象：小型企业官网或者个人站长',
                    content: '网站初始阶段并发访问量小，只需要一台低配置的服务器即可，应用程序，数据库，文件等所有资源均在一台服务器上，后期可以基于云计算弹性特征随时调整资源配置，无需担心低配服务器在业务突增时带来的资源不足问题。<br>适用于个人网站初始阶段并发访问量小，经济配置省钱适用。',
                    configs: [
                        {txt1: '2核', txt2: 'CPU'},
                        {txt1: '2G', txt2: '内存'},
                        {txt1: '5M', txt2: '带宽'},
                        {txt1: '5/20G', txt2: '默认防护'},
                        {txt1: 'I/O优化<br>实例', txt2: '免费开启'},
                    ]
                },
                {
                    name: '进阶型',
                    title: '适用对象：地方与行业门户网站',
                    content: '社区网站业务相对个人网站，有更多的用户访问，为保证性能，此时就需要对带宽、内存、CPU进行优化，以便提供更大的空间，提升访问速度。<br>适合流量适中的网站应用，或简单开发环境、代码存储库等。',
                    configs: [
                        {txt1: '4核', txt2: 'CPU'},
                        {txt1: '4G', txt2: '内存'},
                        {txt1: '5M', txt2: '带宽'},
                        {txt1: '5/20G', txt2: '默认防护'},
                        {txt1: 'I/O优化<br>实例', txt2: '免费开启'},
                    ]
                },
                {
                    name: '专业型',
                    title: '适用对象：网上商城、团购网',
                    content: '随着电子商务的不断发展，众多企业逐渐意识到电子商务的重要性。该配置适用于开发、测试、上线初期，后期可根据您的业务的实际增长进行增减，可灵活控制。<br>计算能力满足90%云计算使用者需求，适合企业运营活动、并行计算应用、普通数据处理服务等。',
                    configs: [
                        {txt1: '8核', txt2: 'CPU'},
                        {txt1: '8G', txt2: '内存'},
                        {txt1: '5M', txt2: '带宽'},
                        {txt1: '5/20G', txt2: '默认防护'},
                        {txt1: 'I/O优化<br>实例', txt2: '免费开启'},
                    ]
                },
                {
                    name: '理想型',
                    title: '适用对象：社区SNS/论坛/ERP/OACRM、网络游戏等其他高端服务',
                    content: '适合对计算性能要求较高的应用场景，如企业运营活动、批量处理、分布式分析、游戏app等。<br>网络游戏在近年来发展迅速，除了传统网络终端之外，网页游戏、手机游戏等发展迅速，也让整个游戏市场愈发壮大。<br>按需付费的方式节省了大量现金流和运营费用。',
                    configs: [
                        {txt1: '16核', txt2: 'CPU'},
                        {txt1: '16G', txt2: '内存'},
                        {txt1: '5M', txt2: '带宽'},
                        {txt1: '5/20G', txt2: '默认防护'},
                        {txt1: 'I/O优化<br>实例', txt2: '免费开启'},
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss">
    .cloud-table {
        width: 100%;
        display: flex;
        flex-direction: row;
        border: 1px solid #eee;
        .tabs {
            flex: 0 0 14%;
        }
        .tab {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80px;
            background: #f8f8f8;
            border: 1px solid #f1f1f1;
            font-size: 18px;
            color: #424242;
            &.active {
                border-left: 2px solid #008AFF;
            }
        }
        .content {
            position: relative;
            flex: 1;
            background: #fff;
            padding: 0 2%;
            .p1 {
                margin-top: 28px;
                text-align: left;
                font-size: 18px;
                color: #424242;
            }
            .p2 {
                line-height: 30px;
                margin-top: 20px;
                text-align: left;
                color: #424242;
                font-size: 14px;
            }
        }
        .recommend {
            position: absolute;
            bottom: 40px;
            left: 2%;
            width: 92%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-top: 40px;
            border-top: 1px dashed #707070;
        }
        .recommend-left {
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .recommend-title {
            color: #424242;
            font-size: 22px;
        }
        .circles {
            flex: 0 0 480px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-left: 10px;
        }
        .circle {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 0 0 76px;
            height: 76px;
            border: 1px solid #707070;
            border-radius: 50%;
        }
        .circle-p1 {
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 20px;
            font-size: 16px;
            color: #008aff;
        }
        .circle-p2 {
            font-size: 12px;
            line-height: 14px;
            color: #989898;
        }
        .btn-pay {
            width: 130px;
            height: 38px;
            line-height: 38px;
            background-color: #5189ed;
            font-size: 18px;
            color: #fff;
        }
    }
</style>


