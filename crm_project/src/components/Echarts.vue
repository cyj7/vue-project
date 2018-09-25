<template>
	<div id="echart" class="echart-view"></div>
</template>
<script>
	export default {
		name: "Echart",
		data(){
			return {

			}
		},
		props: ["option1", "option2", "titles", 'xName', "yName", "symbolSize"],
		mounted() {
			this.init();
		},
		methods: {
			init(){
				// 引入 ECharts 主模块
				var echarts = require('echarts/lib/echarts');
				// 引入折线图
				require('echarts/lib/chart/line');
				// 引入提示框组件
				require('echarts/lib/component/tooltip');
				
				// // 基于准备好的dom，初始化echarts实例
				var myChart = echarts.init(document.getElementById('echart'));


				// var colors = ['#5793f3', '#d14a61', '#675bba'];
				 
				var option = {
				    legend: {
				        data: this.titles
				    },
				   tooltip : {
				        trigger: 'axis',
				        axisPointer: {
					        type: 'cross',
					        animation: false,
				        }
				    },
				    toolbox: {
				        show: true,
				        feature: {
				            dataZoom: {
				                yAxisIndex: 'none'
				            },
				            dataView: {readOnly: false},
				            magicType: {type: ['line', 'bar']},
				            restore: {},
				            saveAsImage: {}
				        }
				    },
				    grid: {
				        top: 70,
				        bottom: 50
				    },
				     xAxis: {
				        type: 'category',
				        name: this.xName,
				        nameTextStyle:{
				        	color:'#333',
				            align: 'left'
				        },
				        boundaryGap: false
				    },
				    yAxis:{
				        name: this.yName,
				        type: 'value',
				        nameTextStyle:{
				            color:'#333'
				        }
				    },
				    series: [{
				        name: this.titles[0],
				        symbolSize: this.symbolSize || 5,
				        // data: [
				        //     [0, 2], //第一个是坐标
				        //     [2, 5],
				        //     [3, 9],
				        //     [5, 16],
				        //     [7, 24],
				        //     [9, 18],
				        //     [12, 15],
				        //     [15, 5],
				        //     [17, 2],
				        //     [19, 1]
				        // ],
				        data: this.option1,
				        type: 'line',
				        smooth:true,
				        showSymbol: false,
				        barGap: 0,  
                        itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'#a00'  
                                }  
                            }  
                        }
				    },
				    {
				        name: this.titles[1],
				        symbolSize: this.symbolSize || 5,
				        // data: [
				        //     [0, 1],
				        //     [2, 3],
				        //     [3, 7],
				        //     [5, 13],
				        //     [7, 21],
				        //     [9, 16],
				        //     [12, 12],
				        //     [15, 3],
				        //     [17, 1],
				        //     [19, 0]
				        // ],
				        data: this.option2,
				        type: 'line',
				        smooth:true,
				        showSymbol:false,
				        barGap: 0,  
                        itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'#0a0'  
                                }  
                            }  
                        }
				    }
				    ]
				};

				// 绘制图表
				myChart.setOption(option);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.echart-view{ 
		height: 300px; 
	}
</style>