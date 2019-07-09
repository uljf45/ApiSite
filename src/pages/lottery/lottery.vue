<template>
    <div id="index">
        <idc-header></idc-header>
        <idc-block :style="{minHeight: minH}" :innerStyle="{padding: '24px'}">
            <nav class="lottery-tabs">
                <a href="javascript: void(0)" v-for="(tab, index) in tabItems" :class="{active:index == tabIndex}" :key="tab" v-text="tab" @click="tabIndex = index"></a>
            </nav>
            <div class="lottery-content">
                <table>
                    <tr>
                        <th>分组</th>
                        <th>彩种名称</th>
                        <th>机构</th>
                        <th>最新期号</th>
                        <th width="260">开奖号码</th>
                        <th>时间</th>
                    </tr>
                    <tr  v-for="(d, ind) in curDatas" :key="ind">
                        <td v-text="d.title"></td>
                        <td v-text="d.lottery"></td>
                        <td v-text="d.mc"></td>
                        <td v-text="d.issue"></td>
                        <td>
                            <div class="balls">
                                <span class="ball" v-for="(num, numIndex) in d.code.split(',')" :key="numIndex" v-text="num"></span>
                            </div>
                        </td>
                        <td v-text="d.opendate"></td>
                    </tr>

                </table>
            </div>
        </idc-block>
        <idc-footer></idc-footer>
    </div>
</template>

<script>
import IdcHeader from '@/components/common/IdcHeader.vue'
import IdcFooter from '@/components/common/IdcFooter.vue'
import IdcBlock from '@/components/common/IdcBlock.vue'

import lotteryDatas from '@/../utils/lotteryDatas.js'

export default {
    name: 'index',
    components: {
        IdcHeader,
        IdcFooter,
        IdcBlock
    },
    data () {
        return {
            tabItems: [
                '全国彩',
                '高频彩',
                '低频彩',
                '计算型'
            ],
            tabIndex: 0,
            lotDatas: [
                lotteryDatas.filter(v => v.title == '全国彩'),
                lotteryDatas.filter(v => v.title == '高频彩'),
                lotteryDatas.filter(v => v.title == '低频彩'),
                lotteryDatas.filter(v => v.title == '计算型')
            ],
            minH: (document.documentElement.clientHeight - 502) + 'px'
        }
    },
    computed: {
        curDatas () {
            return this.lotDatas[this.tabIndex]
        }
    },

}
</script>

<style lang="scss">
    #index {
        min-width: 1024px;
        text-align: center;
        .lottery-tabs {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            a {
                display: block;
                width: 124px;
                height: 38px;
                line-height: 38px;
                margin: 0 20px;
                text-align: center;
                font-size: 16px;
                color: #23395E;
                background: #d0d0d0;
                border-radius: 5px;
                &.active {
                    color: #fff;
                    background: #23395E;
                }
            }
        }
        .lottery-content {
            width: 100%;
            margin-top: 24px;
            table {
                width: 100%;
                border-collapse: collapse;
            }
            tr {
            }
            th, td {
                border-bottom: 1px solid #C7C7C7;
                font-size: 16px;
            }
            th {
                padding: 12px 0;
                border-top: 1px solid #C7C7C7;
                font-weight: bold;
                color: #23395E;
                background: #DDDFE0;
            }
            td {
                padding: 13px 0;
                color: #23395E;
                text-align: center;
            }
            .balls {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
            }
            .ball {
                width: 22px;
                height: 22px;
                line-height: 22px;
                border-radius: 50%;
                text-align: center;
                background: #23395E;
                color: #fff;
                margin: 2px;
                font-size: 14px;
            }
        }
    }
</style>


