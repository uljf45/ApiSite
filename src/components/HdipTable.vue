<template>
    <div class="hdip-table">
        <div class="tabs">
            <div class="tab " :class="{'active': tabIndex === 0}" @click="tabIndex = 0">固定套餐（月付资费：元/月）</div>
            <div class="tab"  :class="{'active': tabIndex === 1}" @click="tabIndex = 1">弹性套餐（按天计费：元/天）</div>
        </div>
        <div class="content" v-if="tabIndex === 0">
            <table >
                <tr>
                    <th>DDoS攻击防御峰值</th>
                    <th>CC防护能力</th>
                    <th>IP解封时间</th>
                    <th width="108">WAF防护</th>
                    <th width="138">售后服务等级</th>
                    <th>回源带宽</th>
                    <th>操作</th>
                </tr>
                <tr>
                    <td>攻击峰值≤10G</td>
                    <td>20,000 QPS</td>
                    <td rowspan=4>10分钟-24小时 <br> 视攻击持续情况解封</td>
                    <td rowspan=4>基础版</td>
                    <td rowspan=4>1.在线支持：<br>7x24小时 <br>2.在线响应：<br>10分钟内</td>
                    <td>10M</td>
                    <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
                </tr>
                <tr>
                    <td>10G≥攻击峰值≤30G</td>
                    <td>240,000 QPS</td>
                    <td>10M</td>
                    <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
                </tr>
                <tr>
                    <td>30G≥攻击峰值≤50G</td>
                    <td>70,000 QPS</td>
                    <td>20M</td>
                    <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
                </tr>
                <tr>
                    <td>50G≥攻击峰值≤100G</td>
                    <td>120,000 QPS</td>
                    <td>50M</td>
                    <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
                </tr>
                <tr>
                    <td>100G≥攻击峰值≤200G</td>
                    <td>可联系客服定制</td>
                    <td rowspan=3>5分钟-30分钟 <br> 视攻击持续情况解封</td>
                    <td rowspan=6>基础版+高级定制版</td>
                    <td rowspan=6>1.在线支持：<br>7x24小时 <br>2.在线响应：<br>3分钟内</td>
                    <td>100M</td>
                    <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
                </tr>
                <tr>
                    <td>200G≥攻击峰值≤300G</td>
                    <td>可联系客服定制</td>
                    <td>200M</td>
                    <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
                </tr>
                <tr>
                    <td>300G≥攻击峰值≤500G</td>
                    <td>可联系客服定制</td>
                    <td>200M</td>
                    <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
                </tr>
                <tr>
                    <td>500G≥攻击峰值≤600G</td>
                    <td>可联系客服定制</td>
                    <td rowspan=3>5分钟内</td>
                    <td>200M</td>
                    <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
                </tr>
                <tr>
                    <td>600G≥攻击峰值≤800G</td>
                    <td>可联系客服定制</td>
                    <td>200M</td>
                    <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
                </tr>
                <tr>
                    <td>800G≥攻击峰值≤1000G</td>
                    <td>可联系客服定制</td>
                    <td>200M</td>
                    <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
                </tr>
            </table>
            <div class="desc">
                注意事项<br> 
                1.BGP回源带宽超过默认赠送带宽，扩容价格：80元/M/月<br> 
                2.单双线回源带宽超出默认赠送带宽，扩容价格：40元/M/月<br> 
                3.单IP默认可配置转发端口50个，防护域名50个（包含顶级和二级域名总数），超过默认端口及域名数，建议加购1个高防IP。<br> 
                4.高防IP如果因最高攻击超过购买固定套餐防护阈值造成黑洞，则不会产生后付费。
            </div>
        </div>
        <div class="content" v-if="tabIndex === 1">
            <table >
                <tr>
                    <th>DDoS攻击防御峰值</th>
                    <th>单线</th>
                    <th>双线</th>
                    <th>三线</th>
                    <th>BGP线路</th>
                </tr>
                <tr>
                    <td>攻击峰值≤10G</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                </tr>
                <tr>
                    <td>10G≥攻击峰值≤30G</td>
                    <td>149</td>
                    <td>160</td>
                    <td>180</td>
                    <td>199</td>
                </tr>
                <tr>
                    <td>30G≥攻击峰值≤50G</td>
                    <td>240</td>
                    <td>250</td>
                    <td>275</td>
                    <td>290</td>
                </tr>
                <tr>
                    <td>50G≥攻击峰值≤100G</td>
                    <td>490</td>
                    <td>515</td>
                    <td>550</td>
                    <td>590</td>
                </tr>
                <tr>
                    <td>100G≥攻击峰值≤200G</td>
                    <td>840</td>
                    <td>860</td>
                    <td>890</td>
                    <td>910</td>
                </tr>
                <tr>
                    <td>200G≥攻击峰值≤300G</td>
                    <td>1140</td>
                    <td>1160</td>
                    <td>1190</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>300G≥攻击峰值≤500G</td>
                    <td>2900</td>
                    <td>2950</td>
                    <td>3000</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>500G≥攻击峰值≤600G</td>
                    <td>4340</td>
                    <td>4590</td>
                    <td>4940</td>
                    <td>-</td>
                <tr>
                    <td>600G≥攻击峰值≤800G</td>
                    <td>6790</td>
                    <td>7090</td>
                    <td>7290</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>800G≥攻击峰值≤1000G</td>
                    <td>7840</td>
                    <td>7900</td>
                    <td>8250</td>
                    <td>-</td>
                </tr>
            </table>
            <div class="desc">
                注意事项<br> 
                1.攻击防护弹性计费按当天实际产生的DDoS攻击计费最高区间为准。<br> 
                2.弹性说明：每月弹性攻击超过20次达到用户选购最高峰值，则按最高峰值对应固定套餐计费，不加收弹性超出部分的额外费用。<br> 
                3.不同线路的弹性后付费价格不同，具体请参考如上表格。
            </div>
        </div>
        
    </div>
</template>

<script>
import IdcButton from '@/components/common/IdcButton.vue'

export default {
    name: 'HdipTable',
    components: {
        IdcButton
    },
    data() {
        return {
            tabIndex: 0,
            btnStyle: {
                width: '100px',
                height: '30px',
                lineHeight: '30px',
                backgroundColor: '#5189ED',
                color: '#fff',
                margin: '0 auto',
                fontSize: '14px',
            }
        }
    }
}
</script>

<style lang="scss">
    .hdip-table {
        width: 1024px;
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        background: #fff;
        .tabs {
            display: flex;
            flex-direction: row;
        }
        .tab {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            background: #F4F4F4;
            font-size: 18px;
            color: #c2c2c2;
            cursor: pointer;
            &.active {
                border-top: 2px solid #008AFF;
                background: #fff;
                color: #23395e;
            }
        }
        .content {
            padding: 50px 22px 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
           
        }
        th, td {
            border: 2px solid #E9E9E9;
        }
        th {
            padding: 12px 0;
            font-size: 16px;
        }
        td {
            line-height: 24px;
            padding: 10px;
            font-size: 14px;
        }
        .desc {
            line-height: 24px;
            padding: 24px 0;
            text-align: left;
            font-size: 14px;
            font-weight: bold;
            color: #c2c2c2;
        }
    }
</style>


