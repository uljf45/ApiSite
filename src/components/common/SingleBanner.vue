<template>
    <div class="single-banner" :class="{'single-banner--bg2': bgImgType == 2}">
        <div class="single-banner-inner" >
            <section class="txt">`
                <h1 v-text="title"></h1>
                <p v-html="content"></p>
                <idc-button :text="'立即咨询'"></idc-button>
            </section>
            <section class="pic">
                <img src="../../../public/imgs/fangyu-large.png" alt="">
            </section> 
        </div>
    </div>
</template>
<script>
import IdcButton from '@/components/common/IdcButton.vue'

export default {
    name: 'SingleBanner',
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        bgImgType: {
            type: Number,
            default: 1, // 1. '../../../public/imgs/single-banner.png'   2. '../../../public/imgs/single-banner2.png'
        }
    },
    components: {
        IdcButton
    }
}
</script>
<style lang="scss">
    .single-banner {
        min-width: 1024px;
        height: 468px;
        background: url('../../../public/imgs/single-banner.png') no-repeat center top;
        color: #e1e1e2;
    }

    .single-banner--bg2 {
        background: url('../../../public/imgs/single-banner.png') no-repeat center top;
    }

    .single-banner-inner {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 1024px;
        margin: 0 auto;
        padding-top: 60px;  
        .txt {
            flex: 0 1 660px;
        }
        .pic {
            flex: 0 1 280px;
            text-align: right;
            img {
                width: 67%;
            }
        }
        h1 {
            text-align: left;
            font-weight: normal;
            font-size: 50px;
        }
        p {
            line-height: 24px;
            margin-top: 36px;
            text-align: left;
            font-size: 14px;
        }
    }

</style>