<template>
    <div class="idc-block-item4">
        <div>
            <div class="icon">
                <img :src="item.icon" alt="">
            </div>
            <p class="icon-title" :style="{color: fontColor === 'light' ? '#fff' : '#23395E'}" v-text="item.title"></p>           
            <p class="icon-content" :style="{color: fontColor === 'light' ? '#fff' : '#23395E'}" v-text="item.content" ></p>         
           
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
                    icon: './icons/sever_icon_1.png',
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
    .idc-block-item4 {
            display: flex;
            flex-direction: column;
            flex-basis: 33.3%;
            padding-bottom: 60px;
            color: #fff;
        .icon {
            flex-basis: 140px;
            flex-shrink: 0;
            flex-grow: 0;
            img {
                transform: scale(0.7);
            }
        }
        .icon-right {
            padding-right: 20px;
            text-align: left;
        }
        .icon-title {
            font-size: 18px;
            margin-bottom: 18px;
        }
        .icon-content {
            line-height: 20px;          
            padding: 0 40px;
            font-size: 14px;
        }
    }
</style>


