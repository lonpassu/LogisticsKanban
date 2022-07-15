<template>
   <div class="right">
        <div class="right-item">
            <div class="item-title">
                <span>月度出口货值</span>
            </div>
            <div class="item-content" id="monthly-export-value"></div>
        </div>
        <div class="right-item">
            <div class="item-title">
                <span>月度出口箱量</span>
            </div>
            <div class="item-content" id="monthly-export-volume"></div>
        </div>
        <div class="right-item">
            <div class="item-title">
                <span>月度发运量占比</span>
            </div>
            <div class="item-content" id="monthly-shipment-volume"></div>
        </div>
        <div class="right-item">
            <div class="item-title">
                <span>入住企业</span>
            </div>
            <div class="item-content" id="check-in-enterprise"></div>
        </div>
   </div>
</template>

<script  lang="ts">
import * as echarts from 'echarts';
import { defineComponent, reactive, toRefs,onMounted, onUnmounted } from 'vue';
export default defineComponent({
  name: '',
  setup() {
    const data = reactive({})
    onMounted(() => {
        var chart1 = echarts.init(document.getElementById('monthly-export-value')!); //月度出口货值的柱状图
        chart1.setOption({
            title: {
                top:"-3.5%",
                left: "-1%",
                subtext: '单位：万元', //副标题
                subtextStyle: {
                    fontSize: 12,
                    color: "#B1B1B1",
                }
            },
            grid:{
                top:"22%",
                bottom: '8%',
                left: '0%',
                right: '0%',
                containLabel: true,
            },
            xAxis: {
                type: "category",
                data: ['1月', '2月', '3月'],
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
                min: 0,
                max: 3000,
                splitNumber:3, //y轴会默认划分为5个分段，分成三段
                // interval: 1000, //每次加1000
                // boundaryGap: [0.5, 0.5],
                scale: true,
                // name: '单位：万元',
                // nameLocation: "end",    
                // nameTextStyle:{
                //     color:"#B1B1B1", 
                //     fontSize:12,  
                //     align: "center",
                //     left: '20%'
                // },
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
                data: [1200, 1200, 1200],
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
                data: [1300, 1300, 1300],
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
                data: [1100, 1100, 1100],
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
                data: [2800, 2800, 2800],
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
        });
        var chart2 = echarts.init(document.getElementById('monthly-export-volume')!); //月度出口箱量的柱状图
        chart2.setOption({
            title: {
                top:"-3.5%",
                left: "-1%",
                subtext: '单位:TUE', //副标题
                subtextStyle: {
                    fontSize: 12,
                    color: "#B1B1B1",
                }
            },
            grid:{
                top:"22%",
                bottom: '8%',
                left: '0%',
                right: '0%',
                containLabel: true,
            },
            xAxis: {
                type: "category",
                data: ['1月', '2月', '3月'],
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
                min: 1,
                max: 39,
                splitNumber: 3, //y轴会默认划分为5个分段，分成三段
                // interval: 1000, //每次加1000
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
                data: ['海铁', '中欧', '中亚', '总箱量'],
                textStyle: {color: '#ffffff'}
            },
            series: [
                {
                name: '海铁',
                type: 'bar',
                data: [210, 210, 210],
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
                data: [220, 220, 220],
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
                data: [190, 190, 190],
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
                name: '总箱量',
                type: 'bar',
                data: [350, 350, 350],
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
        });
        var chart3 = echarts.init(document.getElementById('monthly-shipment-volume')!); //月度发运量占比的饼状图
        chart3.setOption({
            title: {
                right: "-1%",
                // text: '月度:2月   单位:TUE', //主标题
                subtext: '月度:2月   单位:TUE', //副标题
                // textStyle: {
                //     fontSize: 12,
                //     color: "#B1B1B1"
                // },
                subtextStyle: {
                    fontSize: 12,
                    color: "#B1B1B1",
                }
            },
            legend: {
                itemWidth: 7,
                itemHeight: 7,
                orient: "vertical", //vertical竖着，horizontal横着
                itemGap: 12, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
                right: "16%",
                top: "23%",
                data: ["海铁", "中欧", "中亚", "内贸"],
                textStyle: {color: '#ffffff'}
            },
            series: [
                {
                type: 'pie',
                radius: ["45%", "70%"],//设置饼图大小
                top:"-5%",
                left: "-33%",
                data: [
                    {
                    value: 6000,
                    name: '海铁',
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
                    value: 26,
                    name: '中亚',
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
                    value: 370,
                    name: '中欧',
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
                    value: 3600,
                    name: '内贸',
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
                    },
                ],
                label: {
                    show: true,
                    position: 'outside',
                    color: "rgba(255, 255, 255, 1)",
                    padding: [0, -20],
                    // formatter: (params) => { //文字
                    //     let val = params.percent * 1;
                    //     return `{aa|${val}%}\n\n\n`;
                    // },
                    formatter:function(params){
                        // return `{label|${v.name}}  {value|${v.percent}%}`
                        return `${params.name}  ${(params.percent).toFixed(1)}%\n\n` //\n\n浮起来
                    },
                    // rich: {
                    //     aa: {
                    //         // height: 90,
                    //         // align: 'right',
                    //         // fontSize: 12,
                    //         // verticalAlign: 'top',
                    //         // fontFamily: 'Agency FB',
                    //     },
                    // },
                },
                labelLine: {
                    show: true,
                    length: 15,
                    length2: 15,
                    minTurnAngle: 105,
                    textStyle: {color: '#ffffff'},
                    lineStyle: {
                    color: "#ffffff",
                    minTurnAngle: "45",
                    },
                }
                }
            ],
        })
        var chart4 = echarts.init(document.getElementById('check-in-enterprise')!); //入住企业的横向柱状图
        chart4.setOption({
            title: {
                right: "-1%",
                subtext: '单位:家', //副标题
                subtextStyle: {
                    fontSize: 12,
                    color: "#B1B1B1",
                }
            },
            grid:{
                top:"20%",
                bottom: '10%',
                left: '0%',
                right: '-2%',
                containLabel: true,
                y:500
            },
            xAxis: {
                type: 'value',
                min: 0,
                max: 120,
                splitNumber:3, //y轴会默认划分为5个分段，分成三段
                // show: true,
                // offset: 8, //x轴偏移量
                // barGap: '50%',
                axisLabel: { //y轴文字的配置
                    color: "#B1B1B1",//Y轴刻度文字颜色
                    fontSize: 10.5
                },
                splitLine: { //坐标轴分隔线
                    show: false,
                },
                axisTick: { //是否显示坐标轴刻度
                    show: true,
                    inside: true, //坐标轴刻度是否朝内，默认朝外false
                    length: 7.5, //坐标轴线长度
                },
                axisLine: {
                    show: true, //是否显示坐标轴轴线
                    margin: 114,
                    lineStyle: {
                        width: 2,
                        color: "#2D3342",
                    }
                },
            },
            yAxis: {
                data: ['2021', '2020'],
                axisLabel: { //y轴文字的配置
                    color: "#B1B1B1",//Y轴刻度文字颜色
                    fontSize: 10.5
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        width: 2,
                        color: "#2D3342",
                    }
                },
            },
            series: [
                {
                    type: 'bar', //设置间隙，为透明
                    data: [1, 1],
                    stack: 'x',
                    itemStyle: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        itemStyle: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                },
                {
                    type: 'bar',
                    data: [100, 50],
                    stack: 'x',
                    formatter: '{c}' + '%', // 自定义柱顶显示内容
                    barWidth: '55%',
                    barCategoryGap: '10%', //类别之间的间隔
                    label: { //柱子标签
                        show: true, //是否显示柱子上的标签
                        position: 'insideRight', //标签位置，insideRight里面的右边
                        color: "#FFFFFF", //标签文字颜色
                        fontSize: 10.5,
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#17C8D9'
                                },
                                {
                                    offset: 1,
                                    color: '#8BD0D6'
                                }
                            ]),
                        }
                    },
                    // markLine: { //加折线图
                    //     data: [
                    //         [ {name: '标线1起点', value: 100, x: 50, y: 20}, {name: '标线1终点', x: 150, y: 120} ],
                    //         [ {name: '标线2起点', value: 200, x: 30, y: 80}, {name: '标线2终点', x: 270, y: 190} ],
                    //     ]
                    // }
                },
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
.right {
    width: 446px;
    height: 926px;
    margin: 22px 26px 26px 26px;
    .right-item {
        width: 446px;
        height: 211px;
        background-image: url('../../assets/images/left1.png');
        background-size: 446px 211px;
        padding: 0 18px;
        margin-bottom: 26px;
        .item-title {
            padding-top: 6px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .item-content {
            width: 410px;
            height: 173px;
        }
    }
}
</style>
