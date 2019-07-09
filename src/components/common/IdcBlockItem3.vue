<template>
    <div class="idc-block-item3">
        <div class="icon">
            <img :src="item.icon" alt="">
        </div>
        <p class="icon-title" :style="{color: fontColor === 'light' ? '#E1E5E8' : '#23395E'}" v-text="item.title"></p>
        <p class="icon-content" :style="{color: fontColor === 'light' ? '#E1E1E2' : '#23395E'}" v-text="item.content"></p>
        <p class="icon-content" :style="{color: fontColor === 'light' ? '#E1E1E2' : '#23395E'}" v-text="item.content2"></p>
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
    .idc-block-item3 {
            display: flex;
            flex-direction: row;
            flex-basis: 100%;
            padding: 20px 0;
        .icon {
            flex-basis: 140px;
            flex-shrink: 0;
            flex-grow: 0;
            img {
                transform: scale(0.7);
                transform-origin: center top;
            }
        }
        .icon-right {
            padding-right: 20px;
            text-align: left;
        }
        .icon-title {
            flex: 0 0 80px;
            margin-top: 4px;
            font-size: 20px;
            font-weight: bold;
        }
        .icon-content {
            flex: 1;
            margin-top: 4px;
            padding: 0 30px;
            text-align: left;
            font-size: 14px;
            line-height: 20px;
        }
    }
</style>


