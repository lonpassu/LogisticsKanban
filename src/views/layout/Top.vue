<template>
   <div class="top">
        <div class="top-wrap">
            <div class="top-item">
                <div class="export-volume">
                    <div class="item-title">
                        <span>年度出口箱量统计</span>
                    </div>
                    <div class="item-content">
                        <p>26748573</p>
                        <p>TEU</p>
                    </div>
                </div>
                <div class="total-exports">
                    <div class="item-title">
                        <span>年度出口总额</span>
                    </div>
                    <div class="item-content">
                        <p>7540288</p>
                        <p>万元</p>
                    </div>
                    <div class="item-content"></div>
                </div>
            </div>
        </div>
   </div>
</template>

<script  lang="ts">
import { defineComponent, ref, reactive, toRefs,onMounted, onUnmounted } from 'vue';
export default defineComponent({
  name: '',
  setup() {
    const data = reactive({})
    onMounted(() => {
    });
    onUnmounted(() => {
    });
    return {
        ...toRefs(data)
    };
  },
 });
</script>

<style lang="scss" scoped>
.top {
    width: 918px;
    height: 690px;
    margin-bottom: 26px;
    .top-wrap {
        position: relative;
        width: 918px;
        height: 690px;
        background-image: url('../../assets/images/top1.png');
        background-size: 918px 690px;
        .top-item {
            position: absolute;
            top: 565px;
            left: 25px;
            display: flex;
            .export-volume,.total-exports {
                width: 301px;
                height: 104px;
                background-image: url('../../assets/images/left1.png');
                background-size: 301px 207px;
                // opacity: 0.9;
                padding: 0 18px;
                margin-right: 23px;     
                .item-title {
                    width: 265px;
                    height: 34px;
                    padding-top: 6px;
                    font-weight: 700;
                }
                .item-content {
                    width: 265px;
                    height: 70px;
                    display: flex;
                    align-items: center;
                    p {
                        display: inline-block;
                        font-size: 14px;
                        font-weight: 700;
                    }
                    p:first-of-type {
                        font-size: 30px;
                        font-family: DS-Digital, DS-Digital-Bold;
                        font-weight: 700;
                        color: #17C8D9;
                        // background: linear-gradient(to right,#17c8d9  #8bd0d6 );
                        // background-size: cover;
                        // -webkit-background-clip: text;
                        // -webkit-text-fill-color: transparent;
                        // background-clip: text; 
                        // text-fill-color: transparent;
                        // display: inline-block;  /*重要属性，如果不写，渐变色效果有明显的区别，针对块级元素*/
                        margin-right: 13px;
                    }
                }
            }
        }
    }
}
</style>
