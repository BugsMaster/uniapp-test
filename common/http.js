let Fly = require('@/common/wx')
let fly = new Fly;

//定义公共headers
fly.config = {
	headers: {
		Authorization: "Bearer",
		"Content-Type": "application/json"
	},
	params: {
		culture: 'zh'
	}
};
// "application/x-www-form-urlencoded;charset=utf-8" :

//设置超时
fly.config.timeout = 8000;
//设置请求基地址
fly.config.baseURL = "http://10.15.123.111:82/"

//添加请求拦截器
fly.interceptors.request.use((request) => {
	//给所有请求添加自定义header 
	switch (request.contentType){
			case 'form':
				request.headers['Content-Type']='application/x-www-form-urlencoded;charset=utf-8';
				break;
			case 'file':
				request.headers['Content-Type']='multipart/form-data';
				break;
			default:
				request.headers['Content-Type']='application/json';
				break;
	}
	try {
		const cookie = uni.getStorageSync('storageData').accessToken;
		if (cookie) {
			request.headers["Authorization"] = "Bearer "+cookie;
		}
	} catch (error) {
		console.log("error: " + error);
	}
	//打印出请求体
	console.log("请求体: ",request)
	console.log("发送参数: ",request.body);
	//终止请求
	//var err=new Error("xxx")
	//err.request=request
	//return Promise.reject(new Error(""))

	//可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
	return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
	(response) => {
		//只将请求结果的data字段返回
		return response.data
	},
	(err) => {
		//发生网络错误后会走到这里
		//return Promise.resolve("ssss")
	}
)
// uni.setStorage({ key: 'storage_key',data: 'hello'});



export default {
	// 	get(url, data = {}, options = {}) {
	// 		return new Promise((resolve, reject) => {
	// 			fly.get('/user', {
	// 					id: 133
	// 				})
	// 				.then(function(response) {
	// 					console.log(response);
	// 				})
	// 				.catch(function(error) {
	// 					console.log(error);
	// 				});
	// 
	// 		});
	// 
	// 	},
	post(url, data = {},options = {}) {
		return new Promise((resolve, reject) => {
			fly.post(url,data,options)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error);
				});
		});
	},
	put(url, data = {},options = {}) {
		return new Promise((resolve, reject) => {
			fly.put(url,data,options)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error);
				});
		});
	}
}
