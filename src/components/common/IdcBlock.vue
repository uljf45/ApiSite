<template>
    <div class="idc-block" :class="bgColor === 'light' ? 'block-light' : 'block-dark'">
        <div v-if="title" class="block-title">
            <div class="brick"></div>
            <h2 :style="{color: bgColor === 'light' ? '#23395E' : '#fff'}" v-text="title"></h2>
        </div>
        <div class="idc-block-inner" :style="innerStyle">
            <slot></slot>

        </div>
    </div>
</template>

<script>
export default {
    name: 'IdcBlock',
    props: {
        bgColor: {
            type: String,
            default: 'light'
        },
        title: {
            type: String,
            default: ''
        },
        innerStyle:  {
            type: Object,
            default () {
                return null
            }
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss">
    .idc-block {
        .block-title {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 1024px;
            margin: 0 auto;
            padding-top: 40px;
            h2 {
                margin-left: 6px;
                font-weight: normal;
                font-size: 26px;
                color: #23395E;
            }
        }
        .brick {
            width: 7px;
            height: 40px;
            background: #008aff;
        }
    }
    .idc-block-inner {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 1024px;
        margin: 0 auto;
        padding: 40px 0;

    }
    .block-light {
        background: #e1e5e8;
    }
    .block-dark {
        background: #23395e;
    }
</style>


