<template>
    <div class="idc-block-item">
        <div class="icon">
            <img :src="item.icon" alt="">
        </div>
        <div class="icon-right">
            <p class="icon-title" :style="{color: fontColor === 'light' ? '#E1E5E8' : '#23395E'}" v-text="item.title"></p>
            <p class="icon-content" :style="{color: fontColor === 'light' ? '#E1E1E2' : '#23395E'}" v-html="item.content"></p>
        </div>
    </div>
</template> 

<script>
export default {
    name: 'IdcBlockItem',
    props: {
        item: {
            type: Object,
            default() {
                return {
                    icon: './icons/zhupiaopiao.png',
                    title: '',
                    content: '',
                }
            }
        },
        fontColor: {
            type: String,
            default: 'light'
        }
        
    }
}
</script>

<style lang="scss">
    .idc-block-item {
            display: flex;
            flex-direction: row;
            flex-basis: 50%;
            padding: 20px 0;
        .icon {
            flex-basis: 90px;
            flex-shrink: 0;
            flex-grow: 0;
            img {
                transform: scale(0.67);
                transform-origin: center top;
            }
        }
        .icon-right {
            padding-right: 20px;
            text-align: left;
        }
        .icon-title {
            font-size: 16px;
        }
        .icon-content {
            margin-top: 12px;
            font-size: 14px;
            line-height: 20px;
        }
    }
</style>


