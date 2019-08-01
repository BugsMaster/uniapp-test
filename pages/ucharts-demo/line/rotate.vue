<template>
	<view class="qiun-columns">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">折线图旋转</view>
		</view>
		<view class="qiun-charts-rotate" >
			<canvas canvas-id="canvasLineB" id="canvasLineB" class="charts-rotate" @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaLineB=null;
	/*下面是服务器返回的数据格式
	var Data={
		"LineB": {
			  "categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
			  "series": [{
				"name": "成交量A",
				"data": [35, 20, 25, 37, 4, 20]
			  }, {
				"name": "成交量B",
				"data": [70, 40, 65, 100, 44, 68]
			  }, {
				"name": "成交量C",
				"data": [100, 80, 95, 150, 112, 132]
			  }]
			}
		}
	*/
   
	export default {
		data() {
			return {
				cWidth2:'',//横屏图表
				cHeight2:'',//横屏图表
				pixelRatio:1,
				serverData:'',
			}
		},
		onLoad() {
			_self = this;
			this.cWidth2=uni.upx2px(700);
			this.cHeight2=uni.upx2px(1100);
			this.getServerData();
		},
		methods: {
			getServerData(){
				uni.request({
					url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata2',
					data:{
					},
					success: function(res) {
						console.log(res.data.data)
						//下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
						_self.serverData=res.data.data;
						let LineB={categories:[],series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						LineB.categories=res.data.data.LineB.categories;
						//这里的series数据,如果为Meter，series[0]定义为外层数据，series[1]定义为内层数据
						LineB.series=res.data.data.LineB.series;
						_self.showLineB("canvasLineB",LineB);
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
			},
			showLineB(canvasId,chartData){
				canvaLineB=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					legend:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					rotate:true,//开启图表横屏
					// #ifdef MP-ALIPAY
					rotateLock:true,//百度及支付宝需要锁定旋转
					// #endif
					categories: chartData.categories,
					enableScroll: true,//开启图表拖拽功能
					animation: true,
					series: chartData.series,
					xAxis: {
						disableGrid:false,
						type:'grid',
						gridType:'dash',
						itemCount:4,//可不填写，配合enableScroll图表拖拽功能使用，x轴单屏显示数据的数量，默认为5个
						scrollShow:true,//新增是否显示滚动条，默认false
						scrollAlign:'left',
						//scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
						//scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
					},
					yAxis: {
						//disabled:true
					},
					width: _self.cWidth2*_self.pixelRatio,
					height: _self.cHeight2*_self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
						lineStyle: 'curve'
					},
				});
			},
			touchLineA(e){
				canvaLineB.scrollStart(e);
			},
			moveLineA(e) {
				canvaLineB.scroll(e);
			},
			touchEndLineA(e) {
				canvaLineB.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaLineB.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
		}
	}
</script>

<style>
page{background:#F2F2F2;width: 750upx;overflow-x: hidden;}
.qiun-padding{padding:2%; width:96%;}
.qiun-wrap{display:flex; flex-wrap:wrap;}
.qiun-rows{display:flex; flex-direction:row !important;}
.qiun-columns{display:flex; flex-direction:column !important;}
.qiun-common-mt{margin-top:10upx;}
.qiun-bg-white{background:#FFFFFF;}
.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
/* 通用样式 */
.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
/* 横屏样式 */
.qiun-charts-rotate{width: 700upx; height:1100upx;background-color: #FFFFFF;padding: 25upx;}
.charts-rotate{width: 700upx; height:1100upx;background-color: #FFFFFF;}
</style>
