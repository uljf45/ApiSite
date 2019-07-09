<template>
    <div class="ssl-memo">
        <div class="header" >
            <p class="header-title" v-text="item.title"></p>
            <p class="header-entitle" v-text="item.enTitle"></p>
        </div>
        <div class="content" v-html="item.content">
        </div>
        <div class="price-wrap">
            <div class="price-me" v-text="item.priceMe"></div>
            <div class="price-market" v-text="item.priceMarket"></div>
        </div>

        <div class="ask">
            <idc-button :text="'立即咨询'" style="background-color: #4FABFC; color: #F7FCFF;" :bgColor="'#4FABFC'"></idc-button>
        </div>
    </div>
</template>

<script>
import IdcButton from '@/components/common/IdcButton.vue'

export default {
    name: 'IdcMemo',
    props: {
        item: {
            type: Object,
            default () {
                return {
                    title: '',
                    content: '',
                }
            }
        },
        showButton: {
            type: Boolean,
            default: false
        }
    },
    components: {
        IdcButton
    },
}
</script>

<style lang="scss">
    .ssl-memo {
        position: relative;
        background: #fff;
        border-radius: 10px;
        .header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 62px;
            background: #4FABFC;
            color: #fff;
            border-radius: 10px 10px 0 0;
        }
        .header-title {
            font-size: 18px;
            line-height: 26px;
            font-weight: bold;
        }
        .header-entitle {
            font-size: 14px;
            line-height: 20px;
        }
        .content {
            font-size: 14px;
            line-height: 24px;
            padding: 18px 26px 28px;
            text-align: left;
            height: 220px;
        }
        .price-wrap {
            margin: 0 28px;
            padding: 16px 0 62px;
            border-top: 1px solid #707070;
        }
        .price-me {
            line-height: 30px;
            font-size: 20px;
            color: #FA6000;
            white-space: nowrap
        }
        .price-market {
            font-size: 12px;
            line-height: 24px;
            color: #a8a8a8;
        }
        .ask {
            position: absolute;
            bottom: 12px;
            left: 0;
            right: 0;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
    }
</style>