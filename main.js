import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

let btnAudioContext;
	btnAudioContext = uni.createInnerAudioContext();
	btnAudioContext.autoplay = false;
	btnAudioContext.src = 'https://img.tukuppt.com/newpreview_music/09/00/63/5c893cf044bde33914.mp3';
	btnAudioContext.onError((res) => {
	  console.log(res.errMsg);
	  console.log(res.errCode);
	});
Vue.prototype.$btnAudioContext = btnAudioContext;  

// wx7a1c704a3ea396e1