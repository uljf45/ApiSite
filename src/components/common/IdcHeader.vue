<template>
    <header id="header">
        <div class="header-inner">
            <a href="./index.html" class="logo">
                <img src="@/assets/imgs/home_logo.png" alt="">
                <div>
                    <p class="logo-name1">超新星云</p>
                    <p class="logo-name2">行业方案解决者</p>
                </div>
            </a>
            <nav class="header-nav">
                <div class="nav-item">
                    <span>产品</span>
                    <ul class="subnav">
                        <li class="subnav-border"></li>
                        <li><a href="./privateCloud.html">私有云</a></li>
                        <li><a href="./highDefense.html">高防服务器</a></li>
                        <li><a href="./highDefenseIP.html">高防IP</a></li>
                        <li><a href="./index.html">CDN高防</a></li>
                        <li><a href="./cloud.html">云主机租用</a></li>
                        <li><a href="./specialLine.html">跨境专线</a></li>
                        <li><a href="./ssl.html">SSL证书</a></li>
                        <li><a href="./operation.html">运维服务</a></li>
                    </ul>
                </div>
                <div class="nav-item">
                    <span>解决方案</span>
                    <ul class="subnav">
                        <li class="subnav-border"></li>
                        <li><a href="./GameSolution.html">游戏解决方案</a></li>
                        <li><a href="./LiveBroadcastSolution.html">直播解决方案</a></li>
                        <li><a href="./DDOSSolution.html">DDOS解决方案</a></li>
                        <li><a href="./MonitoringSolution.html">监控解决方案</a></li>
                        <li><a href="./FinancialSolutions.html">金融安全解决方案</a></li>
                    </ul>
                </div>
                <div class="nav-item">
                    <span>支持与服务</span>
                    <ul class="subnav">
                        <li class="subnav-border"></li>
                        <li><a href="./index.html">服务流程</a></li>
                        <li><a href="./index.html">7X24小时运维</a></li>
                    </ul>
                </div>
                <div class="nav-item">
                    <span>合作与共赢</span>
                </div>
                <div class="nav-item">
                    <span>关于我们</span>
                    <ul class="subnav">
                        <li class="subnav-border"></li>
                        <li><a href="./index.html">公司简介</a></li>
                        <li><a href="./index.html">联系我们</a></li>
                    </ul>
                </div>

            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'IdcHeader',
}
</script>

<style lang="scss">
    #header {
        // width: 100%;
        background: #000;
        .header-inner {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 1024px;
            height: 68px;
            // min-width: 1024px;
            // max-width: 1600px;
            margin: 0 auto;
            padding: 0 10px;
            background: #000;

        }
        .logo {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 180px;
            height: 56px;
            margin-right: 54px;
            color: #e4e4e4;
            img {
                width: 50px;
                height: 38px;
            }
        }
        .logo-name1 {
            font-size: 18px;
        }
        .logo-name2 {
            margin-top: 3px;
            font-size: 10px;
        }
        .header-nav {
            display: flex;
            flex-direction: row;
            flex-basis: 990px;
            justify-content: space-between
        }
        .nav-item {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-basis: 18%;
            height: 68px;
            span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                font-size: 18px;
                color: #e4e4e4;
            }
            &:hover {
                background: #23395e;
                cursor: pointer;
            }
            &:hover .subnav {
                display: block;
            }
        }
        .subnav {
            position: absolute;
            display: none;
            left: 0;
            top: 68px;
            width: 100%;
            padding-bottom: 6px;
            background: #23395e;
            z-index: 999;
            li {
                height: 34px;
                line-height: 34px;
                &.subnav-border {
                    width: 80%;
                    height: 1px;
                    margin: 0 auto 6px;
                    background: #e4e4e4;
                }
            }
            a {
                display: block;
                font-size: 16px;
                color: #e4e4e4;
                &:hover {
                    color: #fff;
                }
            }
        }
    }
</style>