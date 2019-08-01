<template>
	<view class="model-box">
		<view class="main-box">
			<view class="btn" @tap="start" hover-class="hover"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'開'
			};
		},
		onLoad() {
		},
		onHide(){
		},
		methods: {
			start(){
				this.$btnAudioContext.play();
				uni.navigateTo({
					url:'/pages/home/demo'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.model-box {
		height: 100vh;
		// background-color: rgba(70,222,222,.3);
		overflow: hidden;
		.main-box{
			height: 100%;
			background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563796612558&di=a738835ccac62300c9e1e18e63468e45&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5c121ce09454e11249e35751e933b79d3fe3475a1711b5-aNBXFX_fw658');
			background-size: cover;
			.btn{
				width:300rpx;
				height:300rpx;
				font-size: 200rpx;
				color: $cyan;
				position: absolute;
				top:50%;
				left:50%;
				text-align: center;
				line-height: 300rpx;
				margin-top:-170rpx;
				margin-left:-160rpx;
				padding:10px;
				border-radius:50%;
				background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563855295080&di=0e4cbe06d2764a0f3183241e5fd58297&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F23%2F20170723223810_n3WuN.jpeg');
				background-size: 100%;
			}
			.hover{
				background-image: url('http://img.jf258.com/i/4a1957705223x204827435b27.jpg');
				// background:$gradualPurple; 
			}
		}
	}
</style>
