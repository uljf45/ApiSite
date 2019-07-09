<template>
    <div class="idc-block-item3" :class="mIconWidth">
        <div class="idc-block-1" >
           <div v-if="item.topIcon" class="top-icon"><img :src="item.topIcon" /></div>
           <div v-for="(item1, index) in item.obj" :key="index" :class = "index == 0?'secon-part':''">           
                <p class="icon-title" :style="{color: item.bgColor === 'light' ?'#23395E': '#fff' }" v-text="item1.title" ></p>
                <p class="tips" :class=" [item.bgColor === 'light' ?'tipsBlock1': 'tipsBlock2',item1.title == ''?'onlyContent':'']" v-html="item1.content"></p>
            </div> 
        </div>
        
        <div class="icon" v-if="item.icon">
            <img :src="item.icon" alt="">
        </div>
    </div>
</template> 

<script>
export default {
    name: 'IdcBlockItem3',
    props: ['item','mIconWidth']   
}
</script>

<style lang="scss" scoped>
    .idc-block-item3 {
            display: flex;           
            padding-bottom: 60px;
            color: #fff;
            width: 100%;
            .idc-block-1{
                width: 40%;
                text-align: left;
                padding-left: 28px;
                p{
                    margin-bottom: 22px; 
                }
                .tips{
                    font-size: 21px;
                    width: 90%;
                    line-height: 42px;
                }                        
                .tipsBlock1{
                  color:  #23395E;
                  font-size: 18px;
                  line-height: 38px;
                }
                .tipsBlock2{
                  color:  #fff;
                  font-size: 14px;
                  line-height: 22px;
                 
                }
                .secon-part{
                    margin-bottom: 54px;
                }                
            }
        .top-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 800px;
            }
        }
        .icon {
            flex-basis: 140px;
            flex-shrink: 0;
            flex-grow: 0;
            flex-grow: 1;
            align-self: center;
            img{
                width: 100%;
            }           
        }
        .icon-right {
            padding-right: 20px;
            text-align: left;
        }
        .icon-title {
            font-size: 20px;
        }
        .icon-content {
            line-height: 48px;
            margin-top: 12px;
            padding: 0 40px;
            font-size: 20px;
        }
         &.mIconWidth{
             .idc-block-1{
                width: 46%;
                margin-right: 5%;
             }           
            .tips{                       
                width:100%;                       
            }
        }    
         &.LiveBroadcastSolution{          
            padding-bottom: 40px;  
             .idc-block-1{
                    width: 100%;   
                    padding:0 50px;   
                             
                    .tips{                       
                        width:100%;                       
                    }
                    .secon-part{
                        margin-bottom: 30px;
                    }
                     p{
                        margin-bottom: 12px; 
                    }
                    div{                        
                         margin-bottom: 40px;                 
                    }
                     .tipsBlock1{                       
                        font-size: 16px;
                        &.onlyContent{
                         font-size: 16px;
                         line-height: 22px;
                    }
                        
                    }
                    
             }
        }
    }
</style>


