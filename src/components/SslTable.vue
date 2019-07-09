<template>
    <div class="ssl-table">
        <table >
            <tr>
                <th width="16%">对比项</th>
                <th width="28%">域名型 DV</th>
                <th width="28%">企业型 OV</th>
                <th width="28%">增强型 EV</th>
            </tr>
            <tr>
                <td>地址栏</td>
                <td>小锁标记 + HTTPS</td>
                <td>小锁标记 + HTTPS</td>
                <td>小锁标记 + HTTPS</td>
            </tr>
            <tr>
                <td>一般用途</td>
                <td>个人站点和应用<br>简单的HTTPS加密需求</td>
                <td>商务站点和应用<br>中小型企业站点</td>
                <td>大型金融平台<br>大型企业和政府机构站点</td>
            </tr>
            <tr>
                <td>颁发时长</td>
                <td>域名所有权验证</td>
                <td>全面的企业身份验证<br>域名所有权验证</td>
                <td>最高等级的企业身份验证<br>域名所有权验证</td>
            </tr>
            <tr>
                <td>审核内容</td>
                <td>10分钟-1小时</td>
                <td>3-5个工作日</td>
                <td>5-7个工作日</td>
            </tr>
            <tr>
                <td>单次申请年限</td>
                <td>1-3年</td>
                <td>1-3年</td>
                <td>1-2年</td>
            </tr>
            <tr>
                <td>购买</td>
                <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
                <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
                <td><idc-button :style="btnStyle" :text="'立即咨询'"></idc-button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import IdcButton from '@/components/common/IdcButton.vue'

export default {
    name: 'SslTable',
    components: {
        IdcButton
    },
    data() {
        return {
            btnStyle: {
                 width: '100px',
                height: '30px',
                lineHeight: '30px',
                backgroundColor: '#4FABFC',
                color: '#fff',
                margin: '0 auto',
                fontSize: '14px',
            }
        }
    }
    
}
</script>

<style lang="scss">
    .ssl-table {
        width: 100%;
        color: #fff;
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
            cursor: pointer;
            &.active {
                border-top: 2px solid #008AFF;
                background: #fff;
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
        }
    }
</style>


