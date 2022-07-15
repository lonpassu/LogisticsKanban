<template>
    <div class="buttom">
        <div class="buttom-item">
            <div class="item-title">
                <span>班列开行量</span>
            </div>
            <div class="item-content" id="train-operation-volume"></div>
        </div>
    </div>
</template>

<script  lang="ts">
import * as echarts from 'echarts';
import { defineComponent, ref, reactive, toRefs,onMounted, onUnmounted } from 'vue';
export default defineComponent({
  name: '',
  setup() {
    const data = reactive({})
    onMounted(() => {
        var chart = echarts.init(document.getElementById('train-operation-volume')!); //班列开行量的柱状图
        chart.setOption({
            title: {
                top:"-3.5%",
                left: "-0.5%",
                subtext: '单位:列', //副标题
                subtextStyle: {
                    fontSize: 12,
                    color: "#B1B1B1",
                }
            },
            grid:{
                top:"22%",
                bottom: '2%',
                left: '0%',
                right: '0%',
                containLabel: true,
            },
            xAxis: {
                type: "category",
                data: ['1月', '2月', '3月','4月', '5月', '6月','7月', '8月', '9月', '10月'],
                axisLabel: { //y轴文字的配置
                    color: "#B1B1B1",//Y轴内容文字颜色
                },
                axisLine: { //y轴线的配置
                    lineStyle: {
                        color: "rgba(45, 51, 66, 1)",
                        width: "1",
                    },
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                min: 10,
                max: 60,
                // splitNumber:3, //y轴会默认划分为5个分段，分成三段
                interval: 10, //每次加1000
                // boundaryGap: [0.5, 0.5],
                scale: true,
                axisLabel: { //y轴文字的配置
                    color: "#B1B1B1",//Y轴内容文字颜色
                    // formatter:function (value, index) {
                    //     var result = "";
                    //     switch(value) {
                    //         case 1: result="500"; break;
                    //         case 2: result="1000"; break;
                    //         case 3: result="2000"; break;
                    //         case 4: result="3000"; break;
                    //         default:"-";
                    //     }
                    // }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#2D3342",
                    }
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                }
            },
            legend: {
                itemWidth: 7,
                itemHeight: 7,
                top: "2%",
                // top: 10%,
                right: -5,
                // itemColor: '#ffffff',
                data: ['海铁', '中欧', '中亚', '总货值'],
                textStyle: {color: '#ffffff'}
            },
            series: [
                {
                name: '海铁',
                type: 'bar',
                data: [38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
                barCategoryGap: '25%', //类别之间的间隔
                itemStyle: { //柱条样式
                    normal: {
                        color: {
                            colorStops: [
                                { offset: 0, color: '#17C8D9' }, //0% 处的颜色
                                { offset: 0.8, color: '#8BD0D6' }, // 100% 处的颜色
                            ],
                            x: 0,
                            y: 1, //从上到下
                            x2: 0,
                            y2: 0, //从下到上
                            type: 'linear',
                            global: false,
                        },
                    },
                },
                },
                {
                name: '中欧',
                type: 'bar',
                data: [41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
                itemStyle: { //柱条样式
                    normal: {
                        color: {
                            colorStops: [
                                { offset: 0, color: '#43C07A' }, //0% 处的颜色
                                { offset: 0.8, color: '#83E0B8' }, // 100% 处的颜色
                            ],
                            x: 0,
                            y: 1, //从上到下
                            x2: 0,
                            y2: 0, //从下到上
                            type: 'linear',
                            global: false,
                        },
                    },
                },
                },
                {
                name: '中亚',
                type: 'bar',
                data: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35],
                itemStyle: { //柱条样式
                    normal: {
                        color: {
                            colorStops: [
                                { offset: 0, color: '#FB733F' }, //0% 处的颜色
                                { offset: 0.8, color: '#FBAF07' }, // 100% 处的颜色
                            ],
                            x: 0,
                            y: 1, //从上到下
                            x2: 0,
                            y2: 0, //从下到上
                            type: 'linear',
                            global: false,
                        },
                    },
                },
                },
                {
                name: '总货值',
                type: 'bar',
                data: [58, 58, 58, 58, 58, 58, 58, 58, 58, 58],
                itemStyle: { //柱条样式
                    normal: {
                        color: {
                            colorStops: [
                                { offset: 0, color: '#EF5147' }, //0% 处的颜色
                                { offset: 0.8, color: '#F1A58D' }, // 100% 处的颜色
                            ],
                            x: 0,
                            y: 1, //从上到下
                            x2: 0,
                            y2: 0, //从下到上
                            type: 'linear',
                            global: false,
                        },
                    },
                },
                }
            ]
        })
    
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
.buttom {
    .buttom-item {
        width: 918px;
        height: 211px;
        background-image: url('../../assets/images/left1.png');
        background-size: 918px 211px;
        padding: 0 18px;
        margin-bottom: 26px;
        .item-title {
            padding-top: 6px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .item-content {
            width: 882px;
            height: 173px;
        }
    }
}
</style>
