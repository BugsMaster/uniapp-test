(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/ucharts-demo/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/IMDS-smart/pages/ucharts-demo/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


































































































































































var _uCharts = _interopRequireDefault(__webpack_require__(/*! ../../components/u-charts/u-charts.js */ "E:\\IMDS-smart\\components\\u-charts\\u-charts.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
var _self;
var canvaColumn = null;
var canvaLineA = null;
var canvaLineB = null;
var canvaArea = null;
var canvaGauge = null;
var canvaCandle = null;
var canvaMix = null;
var canvaColumnMeter = null;
/*下面是服务器返回的数据格式，现已改成从服务器获取数据，以供有些朋友不知道怎么从后台获取数据后调用
                             var Data={
                             	Column:{categories:['2012', '2013', '2014', '2015', '2016', '2017'],series:[{name: '成交量1',data:[15, {value:20,color:'#f04864'},45, 37, 43, 34]},{name: '成交量2',data:[30, {value:40,color:'#facc14'}, 25, 14, 34, 18]}]},
                             	ColumnB:{categories:['2013', '2014', '2015', '2016', '2017', '2018'],series:[{name: '新成交量3',data:[35, 36, 31, 33, 13, 34]},{name: '新成交量4',data:[18, 27, 21, 34, 14, 38]}]},
                             	Mix:{categories:['2012', '2013', '2014', '2015', '2016', '2017'],series:[{name: '柱',data:[35, 20, 25, 37, 4, 20],type:'column'},{name: '线',data:[70, 40, 65, 100, 44, 68],type:'line'},{name: '点',data:[100, 80, 95, 150, 112, 132],type:'point'}]},
                             	LineA:{categories:['2012', '2013', '2014', '2015', '2016', '2017'],series:[{name: '成交量A',data:[35, 20, 25, 37, 4, 20],color:'#000000'},{name: '成交量B',data:[70, 40, 65, 100, 44, 68]},{name: '成交量C',data:[100, 80, 95, 150, 112, 132]}]},
                             	LineB:{categories:['2012', '2013', '2014', '2015', '2016', '2017'],series:[{name: '成交量A',data:[35, 20, 25, 37, 4, 20]},{name: '成交量B',data:[70, 40, 65, 100, 44, 68]},{name: '成交量C',data:[100, 80, 95, 150, 112, 132]}]},
                             	Area:{categories:['2012', '2013', '2014', '2015', '2016', '2017'],series:[{name: '成交量A',data:[100, 80, 95, 150, 112, 132],color:'#facc14'},{name: '成交量B',data:[70, 40, 65, 100, 44, 68],color:'#2fc25b'},{name: '成交量C',data:[35, 20, 25, 37, 4, 20],color:'#1890ff'}]},
                             	Pie:{series:[{ name: '一班', data: 50 }, { name: '二班', data: 30 }, { name: '三班', data: 20 }, { name: '四班', data: 18 }, { name: '五班', data: 8 }]},
                             	Ring:{series:[{ name: '一班', data: 50 ,format:()=> {return '一班:50人'}}, { name: '二班', data: 30 ,format:()=> {return '二班:30人'}}, { name: '三班', data: 20 ,format:()=> {return '三班:20人'}}, { name: '四班', data: 18 ,format:()=> {return '四班:18人'}}, { name: '五班', data: 8 ,format:()=> {return '五班:8人'}}]},
                             	Radar:{categories: ['维度1', '维度2', '维度3', '维度4', '维度5', '维度6'],series:[{name: '成交量1',data: [90, 110, 165, 195, 187, 172]}, {name: '成交量2',data: [190, 210, 105, 35, 27, 102]}]},
                             	Arcbar1:{series:[{ name: '正确率', data: 0.29 , color:'#2fc25b'}]},
                             	Arcbar2:{series:[{ name: '错误率', data: 0.65 , color:'#f04864'}]},
                             	Arcbar3:{series:[{ name: '完成率', data: 0.85 , color:'#1890ff'}]},
                             	Gauge:{categories:[{value:0.2,color:'#2fc25b'},{value:0.8,color:'#f04864'}，{value:1,color:'#1890ff'}],series:[{ name: '完成率', data: 0.85 }]},
                             	Candle:{categories:['2019/5/5', '2019/5/6', '2019/5/6', '2019/5/8', '2019/5/9', '2019/5/10'],series:[{name: '上证指数',data:[
                             	  [2320.26, 2302.6, 2287.3, 2362.94],
                                      [2300, 2291.3, 2288.26, 2308.38],
                                      [2295.35, 2346.5, 2295.35, 2346.92],
                                      [2347.22, 2358.98, 2337.35, 2363.8],
                                      [2360.75, 2382.48, 2347.89, 2383.76],
                                      [2383.43, 2385.42, 2371.23, 2391.82],
                                      [2377.41, 2419.02, 2369.57, 2421.15]
                             	  ]}]},
                             	* K线图data[n]传入顺序：开盘，收盘，最低，最高
                             	}
                             */var _default =

{
  data: function data() {
    return {
      cWidth: '',
      cHeight: '',
      cWidth2: '', //横屏图表
      cHeight2: '', //横屏图表
      cWidth3: '', //圆弧进度图
      cHeight3: '', //圆弧进度图
      arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
      gaugeWidth: '', //仪表盘宽度,此设置可使各端宽度一致
      tips: 'Hello Word!',
      pixelRatio: 1,
      serverData: '',
      itemCount: 20, //x轴单屏数据密度
      sliderMax: 50 };

  },
  onLoad: function onLoad() {
    _self = this;











    this.cWidth = uni.upx2px(750);
    this.cHeight = uni.upx2px(500);
    this.cWidth2 = uni.upx2px(700);
    this.cHeight2 = uni.upx2px(1100);
    this.cWidth3 = uni.upx2px(250);
    this.cHeight3 = uni.upx2px(250);
    this.arcbarWidth = uni.upx2px(24);
    this.gaugeWidth = uni.upx2px(30);
    this.getServerData();
  },
  onReady: function onReady() {
  },
  methods: {
    getServerData: function getServerData() {
      uni.request({
        url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata3',
        data: {},

        success: function success(res) {
          console.log(res.data.data);
          //下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
          _self.serverData = res.data.data;
          _self.sliderMax = res.data.data.Candle.categories.length;
          var Column = { categories: [], series: [] };
          var ColumnMeter = { categories: [], series: [] };
          var LineA = { categories: [], series: [] };
          var LineB = { categories: [], series: [] };
          var Area = { categories: [], series: [] };
          var Pie = { series: [] };
          var Ring = { series: [] };
          var Radar = { categories: [], series: [] };
          var Arcbar1 = { series: [] };
          var Arcbar2 = { series: [] };
          var Arcbar3 = { series: [] };
          var Gauge = { categories: [], series: [] };
          var Candle = { categories: [], series: [] };
          var Mix = { categories: [], series: [] };
          //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
          Column.categories = res.data.data.Column.categories;
          //这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
          Column.series = res.data.data.Column.series;
          ColumnMeter.categories = res.data.data.ColumnMeter.categories;
          //这里的series数据,如果为Meter，series[0]定义为外层数据，series[1]定义为内层数据
          ColumnMeter.series = res.data.data.ColumnMeter.series;
          LineA.categories = res.data.data.LineA.categories;
          LineA.series = res.data.data.LineA.series;
          LineB.categories = res.data.data.LineB.categories;
          LineB.series = res.data.data.LineB.series;
          Area.categories = res.data.data.Area.categories;
          Area.series = res.data.data.Area.series;
          Pie.series = res.data.data.Pie.series;
          Ring.series = res.data.data.Ring.series;
          //自定义文案示例，需设置format字段
          var _loop = function _loop(i) {
            Ring.series[i].format = function () {return Ring.series[i].name + Ring.series[i].data;};};for (var i = 0; i < Ring.series.length; i++) {_loop(i);
          }
          Radar.categories = res.data.data.Radar.categories;
          Radar.series = res.data.data.Radar.series;
          Arcbar1.series = res.data.data.Arcbar1.series;
          Arcbar2.series = res.data.data.Arcbar2.series;
          Arcbar3.series = res.data.data.Arcbar3.series;
          Gauge.categories = res.data.data.Gauge.categories;
          Gauge.series = res.data.data.Gauge.series;
          Candle.categories = res.data.data.Candle.categories;
          Candle.series = res.data.data.Candle.series;
          Mix.categories = res.data.data.Mix.categories;
          Mix.series = res.data.data.Mix.series;
          _self.showColumn("canvasColumn", Column);
          _self.showColumnMeter("canvasColumnMeter", ColumnMeter);
          _self.showLineA("canvasLineA", LineA);
          _self.showLineB("canvasLineB", LineB);
          _self.showArea("canvasArea", Area);
          _self.showPie("canvasPie", Pie);
          _self.showRing("canvasRing", Ring);
          _self.showRadar("canvasRadar", Radar);
          _self.showArcbar("canvasArcbar1", Arcbar1);
          _self.showArcbar2("canvasArcbar2", Arcbar2);
          _self.showArcbar3("canvasArcbar3", Arcbar3);
          _self.showGauge("canvasGauge", Gauge);
          _self.showCandle("canvasCandle", Candle);
          _self.showMix("canvasMix", Mix);
        },
        fail: function fail() {
          _self.tips = "网络错误，小程序端请检查合法域名";
        } });

    },
    showColumn: function showColumn(canvasId, chartData) {
      canvaColumn = new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'column',
        legend: true,
        fontSize: 11,
        background: '#E5FDC3',
        pixelRatio: _self.pixelRatio,
        animation: true,
        categories: chartData.categories,
        series: chartData.series,
        xAxis: {
          disableGrid: true },

        yAxis: {
          //disabled:true
        },
        dataLabel: true,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        extra: {
          column: {
            width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length } } });




    },
    showColumnMeter: function showColumnMeter(canvasId, chartData) {
      canvaColumnMeter = new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'column',
        legend: true,
        fontSize: 11,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        animation: true,
        categories: chartData.categories,
        series: chartData.series,
        xAxis: {
          disableGrid: true },

        yAxis: {
          //disabled:true
        },
        dataLabel: true,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        extra: {
          column: {
            type: 'meter',
            width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length,
            meter: {
              border: 4,
              fillColor: '#E5FDC3' } } } });





    },
    showLineA: function showLineA(canvasId, chartData) {var _ref;
      canvaLineA = new _uCharts.default((_ref = {
        $this: _self,
        canvasId: canvasId,
        type: 'line',
        fontSize: 11,
        legend: true,
        dataLabel: false,
        dataPointShape: false,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        categories: chartData.categories,
        series: chartData.series,
        animation: false,
        enableScroll: true, //开启图表拖拽功能
        xAxis: {
          disableGrid: false,
          type: 'grid',
          gridType: 'dash',
          itemCount: 4, //可不填写，配合enableScroll图表拖拽功能使用，x轴单屏显示数据的数量，默认为5个
          scrollShow: true, //新增是否显示滚动条，默认false
          scrollAlign: 'left'
          //scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
          //scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
        },
        yAxis: {
          //disabled:true
          gridType: 'dash',
          splitNumber: 8,
          min: 10,
          max: 180,
          format: function format(val) {return val.toFixed(0) + '元';} //如不写此方法，Y轴刻度默认保留两位小数
        },
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio }, _defineProperty(_ref, "dataLabel",
      true), _defineProperty(_ref, "dataPointShape",
      true), _defineProperty(_ref, "extra",
      {
        lineStyle: 'straight' }), _ref));



    },
    showLineB: function showLineB(canvasId, chartData) {
      canvaLineB = new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'line',
        fontSize: 11,
        legend: true,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        rotate: true, //开启图表横屏



        categories: chartData.categories,
        animation: false,
        series: chartData.series,
        xAxis: {
          disableGrid: true },

        yAxis: {
          //disabled:true
        },
        width: _self.cWidth2 * _self.pixelRatio,
        height: _self.cHeight2 * _self.pixelRatio,
        dataLabel: true,
        dataPointShape: true,
        extra: {
          lineStyle: 'curve' } });


    },
    showArea: function showArea(canvasId, chartData) {
      canvaArea = new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'area',
        fontSize: 11,
        legend: true,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        categories: chartData.categories,
        animation: false,
        series: chartData.series,
        xAxis: {
          disableGrid: true },

        yAxis: {
          //disabled:true
        },
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: true,
        dataPointShape: true,
        extra: {
          lineStyle: 'curve' } });


    },
    showPie: function showPie(canvasId, chartData) {
      new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'pie',
        fontSize: 11,
        legend: true,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: false,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: true,
        extra: {
          pie: {
            lableWidth: 15 } } });



    },
    showRing: function showRing(canvasId, chartData) {
      new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'ring',
        fontSize: 11,
        legend: true,
        title: {
          name: '70%',
          color: '#7cb5ec',
          fontSize: 25 * _self.pixelRatio,
          offsetY: -20 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        },
        subtitle: {
          name: '收益率',
          color: '#666666',
          fontSize: 15 * _self.pixelRatio,
          offsetY: 30 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        },
        extra: {
          pie: {
            lableWidth: 15,
            ringWidth: 40 * _self.pixelRatio, //圆环的宽度
            offsetAngle: -45 //圆环的角度
          } },

        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: false,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        disablePieStroke: true,
        dataLabel: true });


    },
    showRadar: function showRadar(canvasId, chartData) {
      new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'radar',
        fontSize: 11,
        legend: true,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        animation: false,
        dataLabel: true,
        categories: chartData.categories,
        series: chartData.series,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        extra: {
          radar: {
            max: 200 //雷达数值的最大值
          } } });


    },
    showArcbar: function showArcbar(canvasId, chartData) {
      new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'arcbar',
        fontSize: 11,
        legend: false,
        title: {
          name: Math.round(chartData.series[0].data * 100) + '%',
          color: chartData.series[0].color,
          fontSize: 25 * _self.pixelRatio },

        subtitle: {
          name: chartData.series[0].name,
          color: '#666666',
          fontSize: 15 * _self.pixelRatio },

        extra: {
          arcbar: {
            type: 'default',
            width: _self.arcbarWidth * _self.pixelRatio //圆弧的宽度
          } },

        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: true,
        width: _self.cWidth3 * _self.pixelRatio,
        height: _self.cHeight3 * _self.pixelRatio,
        dataLabel: true });


    },
    showArcbar2: function showArcbar2(canvasId, chartData) {
      new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'arcbar',
        fontSize: 11,
        legend: false,
        title: {
          name: Math.round(chartData.series[0].data * 100) + '%',
          color: chartData.series[0].color,
          fontSize: 25 * _self.pixelRatio },

        subtitle: {
          name: chartData.series[0].name,
          color: '#666666',
          fontSize: 15 * _self.pixelRatio },

        extra: {
          arcbar: {
            type: 'default',
            width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
            backgroundColor: '#ffe3e8',
            startAngle: 1.25,
            endAngle: 0.75 } },


        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: true,
        width: _self.cWidth3 * _self.pixelRatio,
        height: _self.cHeight3 * _self.pixelRatio,
        dataLabel: true });


    },
    showArcbar3: function showArcbar3(canvasId, chartData) {
      new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'arcbar',
        fontSize: 11,
        legend: false,
        title: {
          name: Math.round(chartData.series[0].data * 100) + '%',
          color: chartData.series[0].color,
          fontSize: 25 * _self.pixelRatio },

        subtitle: {
          name: chartData.series[0].name,
          color: '#666666',
          fontSize: 15 * _self.pixelRatio },

        extra: {
          arcbar: {
            type: 'circle', //整圆类型进度条图
            width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
            startAngle: 0.5 //整圆类型只需配置起始角度即可
          } },

        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: true,
        width: _self.cWidth3 * _self.pixelRatio,
        height: _self.cHeight3 * _self.pixelRatio,
        dataLabel: true });


    },
    showGauge: function showGauge(canvasId, chartData) {
      canvaGauge = new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'gauge',
        fontSize: 11,
        legend: false,
        title: {
          name: Math.round(chartData.series[0].data * 100) + '%',
          color: chartData.categories[1].color,
          fontSize: 25 * _self.pixelRatio,
          offsetY: 50 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        },
        subtitle: {
          name: chartData.series[0].name,
          color: '#666666',
          fontSize: 15 * _self.pixelRatio,
          offsetY: -50 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        },
        extra: {
          gauge: {
            type: 'default',
            width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
            startAngle: 0.75,
            endAngle: 0.25,
            startNumber: 0,
            endNumber: 100,
            splitLine: {
              fixRadius: 0,
              splitNumber: 10,
              width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
              color: '#FFFFFF',
              childNumber: 5,
              childWidth: _self.gaugeWidth * 0.4 * _self.pixelRatio //仪表盘背景的宽度
            },
            pointer: {
              width: _self.gaugeWidth * 0.8 * _self.pixelRatio, //指针宽度
              color: 'auto' } } },



        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        categories: chartData.categories,
        series: chartData.series,
        animation: true,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: true });

    },
    changeGaugeData: function changeGaugeData() {
      var series = [{ name: "完成率", data: Math.random() }]; //这里是随机数据，生产环境请从服务器获取，注意series数据类型为数组
      //这里我借用之前的categories数据，判断一下新数据的title.color，没有写死在程序里，以便于自定义
      var newTitleColor;
      for (var i = 0; i < _self.serverData.Gauge.categories.length; i++) {
        if (series[0].data <= _self.serverData.Gauge.categories[i].value) {
          newTitleColor = _self.serverData.Gauge.categories[i].color;
          break;
        }
      }

      canvaGauge.updateData({
        series: series, //这里给了新数值
        categories: _self.serverData.Gauge.categories,
        title: {
          name: Math.round(series[0].data * 100) + '%',
          color: newTitleColor,
          fontSize: 25 * _self.pixelRatio,
          offsetY: 50 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        },
        subtitle: {
          name: '更新数据',
          color: '#666666',
          fontSize: 15 * _self.pixelRatio,
          offsetY: -50 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        } });

    },
    showCandle: function showCandle(canvasId, chartData) {
      canvaCandle = new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'candle',
        fontSize: 11,
        legend: true,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        categories: chartData.categories,
        series: chartData.series,
        animation: true,
        enableScroll: true, //开启图表拖拽功能
        xAxis: {
          disableGrid: true, //不绘制X轴网格线
          //type:'grid',
          //gridType:'dash',
          itemCount: _self.itemCount, //可不填写，配合enableScroll图表拖拽功能使用，x轴单屏显示数据的数量，默认为5个
          scrollShow: true, //新增是否显示滚动条，默认false
          scrollAlign: 'right'
          //scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
          //scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
        },
        yAxis: {
          //disabled:true
          gridType: 'dash',
          splitNumber: 5 },

        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: false,
        dataPointShape: true,
        extra: {
          candle: {
            color: {
              upLine: '#f04864',
              upFill: '#f04864',
              downLine: '#2fc25b',
              downFill: '#2fc25b' },

            average: {
              show: true,
              name: ['MA5', 'MA10', 'MA30'],
              day: [5, 10, 30],
              color: ['#1890ff', '#2fc25b', '#facc14'] } } } });





    },
    touchCandle: function touchCandle(e) {
      canvaCandle.scrollStart(e);
    },
    moveCandle: function moveCandle(e) {
      canvaCandle.scroll(e);
    },
    touchEndCandle: function touchEndCandle(e) {
      canvaCandle.scrollEnd(e);
      //下面是toolTip事件，如果滚动后不需要显示，可不填写
      canvaCandle.showToolTip(e, {
        format: function format(item, category) {
          return category + ' ' + item.name + ':' + item.data;
        } });

    },
    tapButton: function tapButton(type) {
      uni.showToast({
        title: '完善中' });

      var step = 5;
      if (type == 'in') {
        _self.itemCount -= step;
        if (_self.itemCount <= 5) {
          _self.itemCount = 5;
        }
      } else {
        _self.itemCount += step;
        if (_self.itemCount > _self.serverData.Candle.categories.length) {
          _self.itemCount = _self.serverData.Candle.categories.length;
        }
      }
      return;
      _self.zoomCandle(_self.itemCount);
    },
    sliderMove: function sliderMove(e) {
      _self.itemCount = e.detail.value;
      uni.showToast({
        title: '完善中' });

      return;
      _self.zoomCandle(e.detail.value);
    },
    zoomCandle: function zoomCandle(val) {
      canvaCandle.zoom({
        itemCount: val });

    },
    changeData: function changeData() {
      canvaColumn.updateData({
        series: _self.serverData.ColumnB.series,
        categories: _self.serverData.ColumnB.categories });

    },
    touchLineA: function touchLineA(e) {
      canvaLineA.scrollStart(e);
    },
    moveLineA: function moveLineA(e) {
      canvaLineA.scroll(e);
    },
    touchEndLineA: function touchEndLineA(e) {
      canvaLineA.scrollEnd(e);
      //下面是toolTip事件，如果滚动后不需要显示，可不填写
      canvaLineA.showToolTip(e, {
        format: function format(item, category) {
          return category + ' ' + item.name + ':' + item.data;
        } });

    },
    showMix: function showMix(canvasId, chartData) {
      canvaMix = new _uCharts.default({
        $this: _self,
        canvasId: canvasId,
        type: 'mix',
        fontSize: 11,
        legend: true,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        categories: chartData.categories,
        series: chartData.series,
        animation: true,
        enableScroll: true, //开启图表拖拽功能
        xAxis: {
          disableGrid: false,
          type: 'grid',
          gridType: 'dash',
          itemCount: 4,
          scrollShow: true,
          scrollAlign: 'left' },

        yAxis: {
          gridType: 'dash',
          splitNumber: 5,
          min: 10,
          max: 180 },

        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: true,
        dataPointShape: true,
        extra: {
          lineStyle: 'straight' } });


    },
    touchMix: function touchMix(e) {
      canvaMix.scrollStart(e);
    },
    moveMix: function moveMix(e) {
      canvaMix.scroll(e);
    },
    touchEndMix: function touchEndMix(e) {
      canvaMix.scrollEnd(e);
      //下面是toolTip事件，如果滚动后不需要显示，可不填写
      canvaMix.showToolTip(e, {
        format: function format(item, category) {
          return category + ' ' + item.name + ':' + item.data;
        } });

    },
    touchLineB: function touchLineB(e) {
      canvaLineB.showToolTip(e, {
        format: function format(item, category) {
          return category + ' ' + item.name + ':' + item.data;
        } });

    },
    touchColumnMeter: function touchColumnMeter(e) {
      canvaColumnMeter.showToolTip(e, {
        format: function format(item, category) {
          return category + ' ' + item.name + ':' + item.data;
        } });

    },
    touchArea: function touchArea(e) {
      canvaArea.showToolTip(e, {
        format: function format(item, category) {
          return category + ' ' + item.name + ':' + item.data;
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/IMDS-smart/pages/ucharts-demo/index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue?vue&type=template&id=1cfd61e8&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/IMDS-smart/pages/ucharts-demo/index.vue?vue&type=template&id=1cfd61e8& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue":
/*!**************************************************!*\
  !*** E:/IMDS-smart/pages/ucharts-demo/index.vue ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1cfd61e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1cfd61e8& */ "E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue?vue&type=template&id=1cfd61e8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1cfd61e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1cfd61e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/IMDS-smart/pages/ucharts-demo/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** E:/IMDS-smart/pages/ucharts-demo/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue?vue&type=script&lang=js&");
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** E:/IMDS-smart/pages/ucharts-demo/index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue?vue&type=template&id=1cfd61e8&":
/*!*********************************************************************************!*\
  !*** E:/IMDS-smart/pages/ucharts-demo/index.vue?vue&type=template&id=1cfd61e8& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_1cfd61e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=1cfd61e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:\\IMDS-smart\\pages\\ucharts-demo\\index.vue?vue&type=template&id=1cfd61e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_1cfd61e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_1cfd61e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["E:\\IMDS-smart\\main.js?{\"page\":\"pages%2Fucharts-demo%2Findex\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/ucharts-demo/index.js.map