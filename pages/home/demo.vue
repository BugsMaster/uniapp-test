<template>
	<view class="model-box">
		<button type="primary" class="start" @click="start">打豆豆</button>
		<!-- <button type="primary" class="startShou" @click="startShou">打豆豆</button>
		<button type="primary" class="startGong" @click="startGong">跑的快</button> -->
		<view class="main-box">
			<view class="amz-box" :class="{actionLeft:isLeft,actionRight:isRight}">
				<view v-for="(item,index) in dogData" :key="index" class="dog" :class="['action'+index,{'leave':isLeft}]" :style="[{ 'left':positionArrDog[index][0]+'px', 'bottom': positionArrDog[index][1] + 'px' }]">
					<image class="avatar" :src="item.src"></image>
					<view class="name">{{item.name}}</view>
				</view>
				<view v-for="(item,index) in catData" :key="index" class="cat" :class="['action'+index,{'leave':isRight}]" :style="[{ 'right':positionArrCat[index][0]+'px', 'bottom': positionArrCat[index][1] + 'px' }]">
					<image class="avatar" :src="item.src"></image>
					<view class="name">{{item.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let bgcAudioContext;
	let faliedAudioContext;
	export default {
		data() {
			return {
				isStartS:true,
				isStartG:true,
				dogData:[
					{
						name:'小傻',
						src:'http://img.jf258.com/i/4a1957705223x204827435b27.jpg'
					},
					{
						name:'大傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1843827,3570009889&fm=26&gp=0.jpg'
					},
					{
						name:'大傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1843827,3570009889&fm=26&gp=0.jpg'
					},
					{
						name:'二傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1688026885,2773767715&fm=26&gp=0.jpg'
					},
					{
						name:'小傻',
						src:'http://img.jf258.com/i/4a1957705223x204827435b27.jpg'
					},
					{
						name:'小傻',
						src:'http://img.jf258.com/i/4a1957705223x204827435b27.jpg'
					},
					{
						name:'二傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1688026885,2773767715&fm=26&gp=0.jpg'
					},
					{
						name:'大傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1843827,3570009889&fm=26&gp=0.jpg'
					},
					
					{
						name:'二傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1688026885,2773767715&fm=26&gp=0.jpg'
					},
					{
						name:'小傻',
						src:'http://img.jf258.com/i/4a1957705223x204827435b27.jpg'
					},
					{
						name:'大傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1843827,3570009889&fm=26&gp=0.jpg'
					},
				],
				catData:[
					{
						name:'小傻',
						src:'http://img.jf258.com/i/4a1957705223x204827435b27.jpg'
					},
					{
						name:'二傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1688026885,2773767715&fm=26&gp=0.jpg'
					},
					{
						name:'大傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1843827,3570009889&fm=26&gp=0.jpg'
					},
					{
						name:'大傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1843827,3570009889&fm=26&gp=0.jpg'
					},
					{
						name:'二傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1688026885,2773767715&fm=26&gp=0.jpg'
					},
					{
						name:'小傻',
						src:'http://img.jf258.com/i/4a1957705223x204827435b27.jpg'
					},
					{
						name:'小傻',
						src:'http://img.jf258.com/i/4a1957705223x204827435b27.jpg'
					},
					{
						name:'二傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1688026885,2773767715&fm=26&gp=0.jpg'
					},
					{
						name:'大傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1843827,3570009889&fm=26&gp=0.jpg'
					},
					{
						name:'大傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1843827,3570009889&fm=26&gp=0.jpg'
					},
					{
						name:'大傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1843827,3570009889&fm=26&gp=0.jpg'
					},
					{
						name:'二傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1688026885,2773767715&fm=26&gp=0.jpg'
					},
					{
						name:'小傻',
						src:'http://img.jf258.com/i/4a1957705223x204827435b27.jpg'
					},
					{
						name:'二傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1688026885,2773767715&fm=26&gp=0.jpg'
					},
					{
						name:'小傻',
						src:'http://img.jf258.com/i/4a1957705223x204827435b27.jpg'
					},
					{
						name:'大傻',
						src:'http://img4.imgtn.bdimg.com/it/u=1843827,3570009889&fm=26&gp=0.jpg'
					},
				],
				positionArrDog:[],
				positionArrCat:[],
				isLeft:false,
				isRight:false,
				num:1,
				current: {
					poster: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
					name: '致爱丽丝',
					author: '暂无',
					src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3',
				},
			};
		},
		onLoad() {
			for (let i = 0; i <this.dogData.length; i++) {
				this.positionArrDog.push([100,1000]);
			}
			for (let i = 0; i <this.catData.length; i++) {
				this.positionArrCat.push([100,1000]);
			}
		},
		onShow(){
			bgcAudioContext = uni.createInnerAudioContext();
			bgcAudioContext.autoplay = true;
			bgcAudioContext.loop = true;
			bgcAudioContext.src = 'http://boscdn.bpc.baidu.com/mms-res/fFhO6RhLBRhwZkZb9U0GZIC3Zk-CuQRMuChq9UBG0mjIZIZSBUsYhpRenFvkrUgquWgquQXRfFSvrUCRBm8qZWkbZWg.mp3';
			bgcAudioContext.onError((res) => {
			  console.log(res.errMsg);
			  console.log(res.errCode);
			});
			
			//================================================
			faliedAudioContext = uni.createInnerAudioContext();
			faliedAudioContext.autoplay = false;
			// faliedAudioContext.src = 'http://boscdn.bpc.baidu.com/mms-res/fFhO6RhLBRhwZkZb9U0GZIC3Zk-CuQRMuChq9UBG0mjIZIZSBUsYhpRenFvkrUgquWgquQXRfFSvrUCRBm8qZWkbZWg.mp3';
			faliedAudioContext.src = 'http://boscdn.bpc.baidu.com/mms-res/fFhO6I8YBWsa0ChS9UkLZVZ3hIkI0tRSZIgq9UjLBksS0CCaZVCaBpRenFvkrUgquWgquQXRfFSvrUCRBm8qZWkbZUh.mp3';
			faliedAudioContext.onError((res) => {
			  console.log(res.errMsg);
			  console.log(res.errCode);
			});
		},
		onUnload() {
			bgcAudioContext.pause();
		},
		methods:{
			start(){
				this.num++;
				this.startShou();
				this.startGong();
				bgcAudioContext.play();
				setTimeout(()=>{
					if(this.num%2==0){
						this.isLeft=true;
						setTimeout(()=>{
							this.positionArrDog=[];
							for (let i = 0; i <this.dogData.length; i++) {
								this.positionArrDog.push([100,1000]);
							}
							this.positionArrCat=[];
							for (let i = 0; i <this.catData.length; i++) {
								this.positionArrCat.push([100,1000]);
							}	
							this.isStartS=!this.isStartS;
							this.isStartG=!this.isStartG;
							this.isLeft=false;
						},2000)
					}else{
						this.isRight=true;
						setTimeout(()=>{
							this.positionArrDog=[];
							for (let i = 0; i <this.dogData.length; i++) {
								this.positionArrDog.push([100,1000]);
							}
							this.positionArrCat=[];
							for (let i = 0; i <this.catData.length; i++) {
								this.positionArrCat.push([100,1000]);
							}	
							this.isStartS=!this.isStartS;
							this.isStartG=!this.isStartG;
							this.isRight=false;
						},2000)
					}
					bgcAudioContext.pause();
					faliedAudioContext.play();
				},6000)
			},
			startShou(){
				if(this.isStartS){
					this.positionArrDog=[];
					for (let i = 0; i <this.dogData.length; i++) {
						this.positionArrDog.push([i%3*70,Math.floor(i/3)*90]);
					}
				}else{
					this.positionArrDog=[];
					for (let i = 0; i <this.dogData.length; i++) {
						this.positionArrDog.push([100,1000]);
					}
				}
				this.isStartS=!this.isStartS;
			},
			startGong(){
				if(this.isStartG){
					this.positionArrCat=[];
					for (let i = 0; i <this.catData.length; i++) {
						this.positionArrCat.push([i%3*70,Math.floor(i/3)*90]);
					}	
				}else{
					this.positionArrCat=[];
					for (let i = 0; i <this.catData.length; i++) {
						this.positionArrCat.push([100,1000]);
					}	
				}
				this.isStartG=!this.isStartG;
			},
		}
	}
</script>

<style scoped lang="scss">
	.music{
		position: absolute;
		top:0;
		left: 13%;
		z-index: 100;
		display: none;
	}
	.model-box {
		height: 100vh;
		background-color: rgba(70,222,222,.3);
		overflow: hidden;
		.start{
			position: absolute;
			top:0;
			left: 43%;
			z-index: 100;
		}
		.startShou{
			position: absolute;
			top:0;
			left: 15%;
			z-index: 100;
		}
		.startGong{
			position: absolute;
			top:0;
			left: 65%;
			z-index: 100;
		}
		.main-box{
			width:100%;
			height: 100%;
			background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563871203705&di=ebf5090ac453f45a88856ea523b24287&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw15%2F5%2Fd%2F103.jpg');
			background-size: 100% 100%;
			.amz-box{
				height: 100%;
				width: 100%;
				position: relative;
				&.actionLeft{
					background:url('http://am.zdmimg.com/201712/14/5a325f9e13558343.gif_e600.jpg') no-repeat; 
					background-size: 50% 100%;
				}
				&.actionRight{
					background:url('http://img1.imgtn.bdimg.com/it/u=3696484766,3839594133&fm=26&gp=0.jpg') no-repeat; 
					background-size: 50% 100%;
					background-position:right top;
				}
				@keyframes move{
					0%{}
					100%{transform: scale(0.01)}
				}
				.dog{
					position: absolute;
					.avatar{
						width:120rpx;
						height:120rpx;
						border-radius: 50%;
					}
					.name{
						color: $white;
					}
				}
				.dog.leave{
					color: aliceblue;
					animation: move 1.5s 1 forwards;
				}
				.cat.leave{
					color: aliceblue;
					animation: move 1.5s 1 forwards;
				}
				@for $i from 0 to 30 {
					.dog.action#{$i}{
						transition: all #{0.8+0.2*$i}s ease-in 0.2s;
					}
				}
				.cat{
					position: absolute;
					.avatar{
						width:120rpx;
						height:120rpx;
						border-radius: 50%;
					}
					.name{
						color: $green;
					}
				}
				@for $i from 0 to 30 {
					.cat.action#{$i}{
						transition: all #{0.8+0.2*$i}s ease-out 0.2s;
					}
				}
			}
		}
		
	}
</style>
