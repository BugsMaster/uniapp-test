<script>
	export default {
		globalData: {  
            text: '全局变量'  
        },  
		rootData: {
			appName: 'leeing'
		},
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
			console.log(this.$options.globalData)
			console.log(this.$options.rootData)
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import 'style/main.scss';
</style>
