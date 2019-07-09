
<template>
  <div class="ddos-block-item">
      <div class="block-item-head">
          <span>{{item.subTitle}}</span>
      </div>
      <div class="block-item-m">
          <p>{{item.subTitle1}}</p>
          <div class="block-item-tip">
              <h3 v-for="(item, index) in item.des" :key="index">全球三大清洗中心打造T级防护</h3>              
          </div>
      </div>
      <div class="block-item-foot">          
          <div class="block-item-tip" v-for="(item, index) in item.obj" :key="index">
             <img :src="item.icon" alt="">
              <h3>{{item.content}}</h3>
          </div>          
      </div>
  </div>
</template>

<script>

export default {
    name: 'DdosBlockItem',
    props: ['item'],   
  data () {
    return {
    };
  }
}

</script>
<style lang='scss' scoped>
.ddos-block-item{
    width: 90%;   
    background: white;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 70px;
    .block-item-head{
        height:62px;
        background:rgba(79,171,252,1);      
        border-radius:5px 5px 0px 0px;
        color: #fff;
        line-height:62px;
        font-size:24px;
        font-weight: bold;
    }
    .block-item-m{
       height: 160px;
       border-bottom: 1px solid #707070;
        p{
                height: 54px;
                font-size: 20px;
                color: #23395E;
                padding: 24px 0 20px 0;
                line-height: 54px;
        }
        .block-item-tip{
            display: flex;
            justify-content: space-around;
            color: #23395E;
            font-size: 16px;           
             h3{
                 color: #23395E;
                 font-weight: normal;
             }
        }
    }
    .block-item-foot{
        display: flex;
        .block-item-tip{
            width: 25%;
            padding: 34px 0;
            h3{
                color: #23395E;
                font-weight: normal;
                font-size: 16px;
            }
            img{
                width: 22%;
                margin-bottom: 30px; 
            }
        }
    }
}
</style>
