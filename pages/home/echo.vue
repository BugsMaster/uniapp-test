<template>
	<view class="model-box">
		<scroll-view scroll-y class="main-box">
			<view class="voice-content">语音识别内容：<text class="text holy-font">{{currentText}}</text></view>
			<text class="ming holy-font">To be or not to be, that is the question.</text>
			<view class="content">
				<button class="echo-btn cuIcon-voice" :class="isSpeaking?'orange':'green'" @touchstart="streamRecord" @touchend="streamRecordEnd"></button>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import api from '../../common/api';
	const voicPlugin = requirePlugin("WechatSI");
	const voicManager = voicPlugin.getRecordRecognitionManager();
	export default {
		data() {
			return {
				currentText: '',
				translateText: '',
				isSpeaking: false,
			};
		},

		onLoad() {
			console.log(getApp(), '+++')
			this.initRecord();
		},
		onShow() {},
		methods: {
			streamRecord: function() {
				voicManager.start({
					lang: 'zh_CN',
				})
				uni.vibrateShort();
				this.isSpeaking = true;
			},
			streamRecordEnd: function() {
				voicManager.stop();
				uni.vibrateShort();
				this.isSpeaking = false;
			},
			initRecord: function() { //有新的识别内容返回，则会调用此事件
				// voicManager.onRecognize = (res) => {
				// 	let text = res.result
				// 	this.currentText=text;
				// } 
				// 识别结束事件
				voicManager.onStop = (res) => {
					console.log(res)
					let text = res.result
					if (text == '') { // 用户没有说话，可以做一下提示处理...
						return
					}
					this.currentText = text;
					// 得到完整识别内容就可以去翻译了
					let orderList = [
						'密云',
						'金坛',
						'可视化',
						'设备列表',
						'历史数据',
						'任务中心',
						'日报报表',
						'知识库',
						'首页',
						'后退'
					]
					let isOrderValible = false;
					for (let i = 0; i < orderList.length; i++) {
						if (text.indexOf(orderList[i]) > -1) {
							api.remoteCtrl({
								content: i + 1
							}).then(res => {
								uni.showToast({
									title: '远程命令已发出',
									duration: 2000
								});
							})
							isOrderValible = true;
						}
					}
					if (!isOrderValible) {
						api.remoteCtrl({
							content: text
						}).then(res => {
							uni.showToast({
								title: '远程命令已发出',
								duration: 2000
							});
						})
					}
				}
			}
			// translateTextAction: function() {
			// 	let lfrom = 'zh_CN';
			// 	let lto = 'en_US';
			// 	voicPlugin.translate({
			// 		lfrom: lfrom,
			// 		lto: lto,
			// 		content: this.data.currentText,
			// 		tts: true, // 需要合成语音
			// 		success: (resTrans) => { // 翻译可以得到 翻译文本，翻译文本的合成语音，合成语音的过期时间
			// 			let text = resTrans.result;
			// 			this.translateText=text;
			// 			// this.setData({
			// 			// 	translateText: text,
			// 			// }); // 得到合成语音让它自动播放出来
			// 			// wx.playBackgroundAudio({
			// 			// 	dataUrl: resTrans.filename,
			// 			// 	title: '',
			// 			// });
			// 		}
			// 	})
			// },
		},
	}
</script>

<style scoped lang="scss">
	.model-box {
		height: 100vh;
		background-color: rgba(70, 222, 222, .3);
		overflow: hidden;

		.main-box {
			width: 100%;
			height: 100%;
			background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563958232712&di=2f84dd73c4251e2766d930ffec024f6d&imgtype=0&src=http%3A%2F%2Fimg.90sjimg.com%2Finspiration%2F03%2F91%2F82%2F03%2F35%2Fs_236_Efy4gftVTWb8NSkXXFPR.jpg');
			background-size: 100%;
			padding-top: 200rpx;

			.voice-content {
				color: #fff;
				padding: 20px;

				.text {
					color: $orange;
				}
			}

			.ming {
				padding: 20px;
				color: $orange;
				font-size: 20px;
			}

			.content {
				display: flex;
				flex-wrap: wrap;

				.echo-btn {
					margin: 0 auto;
					margin-top: 300rpx;
					font-size: 20px;

					&.orange {
						background: $gradualOrange;
						color: $white;
					}

					&.green {
						background: $gradualGreen;
						color: $white;
					}
				}
			}

		}
	}
</style>
