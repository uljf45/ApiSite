<template>
    <div class="idc-memo">
        <div class="header" v-text="item.title"></div>
        <div class="content" v-html="item.content">
        </div>
        <div v-if="showButton" class="ask">
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
    .idc-memo {
        position: relative;
        height: 310px;
        background: #fff;
        border-radius: 10px;
        .header {
            height: 62px;
            line-height: 62px;
            background: #4FABFC;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            border-radius: 10px 10px 0 0;
        }
        .content {
            line-height: 38px;
            padding: 28px;
            text-align: left;
            font-size: 14px;
            line-height: 24px;
        }
        .ask {
            position: absolute;
            bottom: 44px;
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


