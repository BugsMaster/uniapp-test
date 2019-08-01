<template>
	<view class="login">
		<view class="cu-bar">
			<view class="content">智能诊断平台</view>
		</view>
		<view class="main-box">
			<!-- <image class="logo" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563795963627&di=519aa687ecb4e2e5f03e86d20d1d6c91&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170928%2Fd87cec5b303648a38566f27a076198bc.gif"></image> -->
			<view class="logo">
				<open-data type="userAvatarUrl"></open-data>
			</view>
			<open-data class="user-name" type="userNickName"></open-data>
			<view class="form-box">
				<view class="form-group">
					<view class="cuIcon-homefill icon"></view>
					<input class="input" placeholder="账号" :value='account'></input>
				</view>
				<view class="form-group">
					<view class="cuIcon-my icon"></view>
					<input class="input" placeholder="密码" :value='password' password></input>
				</view>
                <button @tap="login" class="login-btn round">开启智能时代</button>
			</view>
		</view>
		<!-- <video id="myVideo" class="bg_video" src="https:////cloud.video.taobao.com//play/u/2242996455/p/1/e/6/t/1/50056976524.mp4"
			 @error="videoErrorCallback" :controls="false" autoplay loop></video> -->
	</view>
</template>

<script>
	import api from '../../common/api';
	export default {
		data() {
			return {
				account:'lxt',
				password:'123456'
			};
		},
		onLoad() {
			// uni.switchTab({
			// 	url: '/pages/home/my'
			// });
			// uni.navigateTo({
			// 	url:'/pages/home/echo'
			// })
		},
		onShow(){
		},
		mounted(){
			
		},
		methods: {
			login(){
				this.$btnAudioContext.play();
				let params={
					username:this.account,
					password:this.password
				}
				api.login(params).then(res => {
					uni.showToast({
						title: '登录成功',
						duration: 2000
					});
					uni.setStorage({
						key: 'storageData',
						data: res,
						success: function (res) {
							uni.switchTab({
								url: '/pages/home/my'
							});
						}
					});
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	//-------color-ui-----------------------------
	.cu-bar {
		display: flex;
		position: relative;
		align-items: center;
		min-height: 120rpx;
		justify-content: space-between;
		.content {
			position: absolute;
			text-align: center;
			width: calc(100% - 340rpx);
			left: 0;
			right: 0;
			bottom: 0;
			top: 20px;
			margin: auto;
			height: 60rpx;
			font-size: 32rpx;
			line-height: 60rpx;
			cursor: none;
			pointer-events: none;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
	}
	//--------------------------------------------
	
	.login {
		height: 100vh;
		background-color: rgba(70,222,222,.3);
		overflow: hidden;
		.cu-bar {
			color: $white;
			overflow: hidden;
			background: $gradualOrange;
			// background: $gradualBlue;
		}
		.main-box{
			height: 100%;
		    background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563787142008&di=2f5a765ba84ac300a19ead4c50ac19db&imgtype=0&src=http%3A%2F%2Fwsing.bssdl.kugou.com%2F905cff8954f8b9083a48297e6b2a2809.gif_640x640.gif');
			background-size: cover;
			display:flex;
			flex-flow:column nowrap;
			justify-content: center;
			align-items: center;
			.logo{
				width: 280rpx;
				height: 280rpx;
				border-radius: 50%;
				margin-top:-300rpx;
				margin-bottom:20rpx;
				border-bottom:2px solid $brownLight;
				overflow: hidden;
			}
			.user-name{
				color: #fff;
				margin-bottom:50rpx;
			}
			.form-box{
				width: 70%;
				padding:40rpx;
				.form-group{
					display: flex;
					margin-bottom:30rpx;
					.icon{
						color: $orange;
						padding: 5rpx 10px;
						font-size: 36rpx;
					}
					.input{
						flex: 1;
						color: $white;
						border-bottom:1px solid $mauve;
						padding-left:20rpx;
					}
				}
				.login-btn{
					margin: 0 auto;
					margin-top:200rpx;
					width: 300rpx;
					background: $black;
					color: $orange;
					text-align: center;
				}
			}
		}
	}
</style>
