<template>
	<view class="model-box">
		<scroll-view scroll-y class="main-box">
			<view class="content">
				<view class="order-btn" v-for="(item,index) in orderData" :key="index">
					<button type="primary" @tap="order(index)">{{item}}</button>
				</view>
				<button class="back-btn cuIcon-search" type="default" @tap="mainOrder"></button>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import api from '../../common/api';
	export default {
		data() {
			return {
				orderData:[
					'密云',
					'金坛',
					'3D可视化',
					'设备列表',
					'历史数据', 
					'任务中心',
					'日报报表',
					'知识库',
					'首页',
					'后退',
				],
			};
		},
		onLoad() {
			console.log(getApp(), '+++')
		},
		onShow(){
		},
		methods: {
			order(index){
				this.$btnAudioContext.play();
				uni.getStorage({
					key: 'storageData',
					success: function (res) {
						console.log(res.data);
					}
				});
				api.remoteCtrl({content:index+1}).then(res => {
					uni.showToast({
						title: '远程命令已发出',
						duration: 2000
					});
				})
			},
			mainOrder(){
				uni.vibrateLong();
				uni.navigateTo({
					url:'/pages/home/echo'
				})
			}
		},
	}
</script>

<style scoped lang="scss">
	.model-box {
		height: 100vh;
		background-color: rgba(70,222,222,.3);
		overflow: hidden;
		.main-box{
			width:100%;
			height: 100%;
			background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563958232712&di=2f84dd73c4251e2766d930ffec024f6d&imgtype=0&src=http%3A%2F%2Fimg.90sjimg.com%2Finspiration%2F03%2F91%2F82%2F03%2F35%2Fs_236_Efy4gftVTWb8NSkXXFPR.jpg');
			background-size: 100%;
			.content{
				display: flex;
				flex-wrap: wrap;
				.order-btn{
					box-sizing: border-box;
					width:50%;
					padding:40rpx;
				}
				.back-btn{
					margin:0 auto;
					font-size:20px;
					background:$gradualOrange;
					color: $white;
				}
			}
			
		}
	}
</style>
