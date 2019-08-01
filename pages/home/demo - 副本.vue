<template>
	<view class="model-box">
		<view class="main-box">
			<canvas canvas-id="canvas" class="canvas" disable-scroll 
			@error="canvasIdErrorCallback"
			@touchstart="start"
		    @touchmove="move"
			@touchend="end"
			></canvas>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				x: 0,
				y: 0,
				hidden: true,
				initWidth:0,
				initHeight:0,
			};
		},
		onLoad() {},
		mounted(){
			// let cavasDom =uni.createSelectorQuery().select('#canvas').boundingClientRect();
			// console.log(cavasDom);
			let that=this;
			uni.createSelectorQuery().select('.canvas').boundingClientRect(function(e){
				that.initWidth=e.width;
				that.initHeight=e.height;
            }).exec();
			this.canvasInit();
		},
		methods: {
			start(e){
				this.hidden = false
				this.x = e.touches[0].x
				this.y = e.touches[0].y
				uni.setNavigationBarTitle({
					title: `坐标X：${this.x},坐标Y：${this.y}`
				});
			},
			move(e){
				this.x = e.touches[0].x
				this.y = e.touches[0].y
				uni.setNavigationBarTitle({
					title: `坐标X：${this.x},坐标Y：${this.y}`
				});
			},
			end(){
				this.hidden = true
				uni.setNavigationBarTitle({
					title: `坐标X：${this.x},坐标Y：${this.y}`
				});
			},
			canvasInit(){
				let that=this;
				// let ctx = uni.createCanvasContext('canvas')
				// let num=0;
				// function drawBox(index){
				// 	num++;
				// 	ctx.save();
				// 	ctx.beginPath()
				// 	ctx.translate(60*index, Math.abs(10*num));
				// 	ctx.setStrokeStyle("#00ff00")
				// 	ctx.setLineWidth(5)
				// 	ctx.rect(0, 0, 50, 50)
				// 	ctx.stroke()
				// 	ctx.setStrokeStyle("#ff0000")
				// 	ctx.setLineWidth(2)
				// 	ctx.moveTo(40, 25)
				// 	ctx.arc(25, 25, 15, 0, 2 * Math.PI, true)
				// 	ctx.moveTo(35, 25)
				// 	ctx.arc(25, 25, 10, 0, Math.PI, false)
				// 	ctx.moveTo(22, 20)
				// 	ctx.arc(20, 20, 1, 0, 2 * Math.PI, true)
				// 	ctx.moveTo(31, 20)
				// 	ctx.arc(30, 20, 1, 0, 2 * Math.PI, true)
				// 	ctx.stroke()
				// 	ctx.restore();
				// 	ctx.draw()
				// 	if(5*num>that.initHeight){
				// 		num=0;
				// 	}
				// }
				// let count=0;
				// let isBack=false;
				// let derction=true;
				// function animate() {
				// 	// isBack=?true:false;
				// 	if(derction){
				// 		count++;
				// 			drawBox(count*0.01)
				// 		if(count>300){
				// 			derction=false;
				// 		}
				// 	}else{
				// 		count--;
				// 			drawBox(-count*0.01)
				// 		if(count<0){
				// 			derction=true;
				// 		}
				// 	}
				// 	console.log(count);
				// 	// ctx.save();
				// 	ctx.clearRect(0,0,that.initWidth,that.initHeight);
				// 	
				// 	// ctx.restore();
				// 	requestAnimationFrame(animate);
				// }
				// requestAnimationFrame(animate);
				//  const snows = [];
 
  // 下落的加速度
  const G = 0.01;
 
  const fps = 60;
 
  // 速度上限，避免速度过快
  const SPEED_LIMIT_X = 1;
  const SPEED_LIMIT_Y = 1;
 
  const W = this.initWidth;
  const H = this.initHeight;
 
  let tickCount = 150;
  let ticker = 0;
  let lastTime = Date.now();
  let deltaTime = 0;
 
  let canvas = null;
  let ctx = null;
 
  let snowImage = null;
 
  init();
 
  function init() {
    createCanvas();
    snowImage = new Image();
    snowImage.src = 'https://www.deanhan.cn/wp-content/uploads/2017/12/snow.png';
 
    loop();
  }
 
  function loop() {
    requestAnimationFrame(loop);
 
    ctx.clearRect(0, 0, W, H);
 
    const now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    ticker += deltaTime;
 
    if (ticker > tickCount) {
      snows.push(
        new Snow(Math.random() * W, 0, Math.random() * 5 + 5)
      );
      ticker %= tickCount;
    }
 
    const length = snows.length;
    snows.map(function(s, i) {
      s.update();
      s.draw();
      if (s.y >= H) {
        snows.splice(i, 1);
      }
    });
  }
 
  function Snow(x, y, radius) {
    this.x = x;
    this.y = y;
    this.sx = 0;
    this.sy = 0;
    this.deg = 0;
    this.radius = radius;
    this.ax = Math.random() < 0.5 ? 0.005 : -0.005;
  }
 
  Snow.prototype.update = function() {
    const deltaDeg = Math.random() * 0.6 + 0.2;
 
    this.sx += this.ax;
    if (this.sx >= SPEED_LIMIT_X || this.sx <= -SPEED_LIMIT_X) {
      this.ax *= -1;
    }
 
    if (this.sy < SPEED_LIMIT_Y) {
      this.sy += G;
    }
 
    this.deg += deltaDeg;
    this.x += this.sx;
    this.y += this.sy;
  }
 
  Snow.prototype.draw = function() {
    const radius = this.radius;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.deg * Math.PI / 180);
    ctx.drawImage(snowImage, -radius, -radius, radius * 2, radius * 2);
    ctx.restore();
  }
 
  function createCanvas() {
	ctx = uni.createCanvasContext('canvas')
  }
				
			},
			canvasIdErrorCallback: function (e) {
				console.error(e.detail.errMsg)
			}
		}
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
			background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563871203705&di=ebf5090ac453f45a88856ea523b24287&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw15%2F5%2Fd%2F103.jpg');
			background-size: 100%;
			// https://www.cnblogs.com/lianghong/p/8320324.html
		}
		.canvas{
			height: 100%;
			width: 100%;
		}
	}
</style>
