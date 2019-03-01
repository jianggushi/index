//判断访问终端
var browser = {
  versions: function () {
    var u = navigator.userAgent, app = navigator.appVersion;
    return {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
      qq: u.match(/\sQQ/i) == " qq" //是否QQ
    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
var isMobile = browser.versions.mobile,
    isIos = browser.versions.ios,
    isAndroid = browser.versions.android,
    isWebKit = browser.versions.webKit
// app打开
  //  var  createIframe=(function(){
  //     var iframe;
  //     return function(){
  //       if(iframe){
  //         return iframe;
  //       }else{
  //         iframe = document.createElement('iframe');
  //         iframe.style.display = 'none';
  //         document.body.appendChild(iframe);
  //         return iframe;      
  //       }
  //     }
  //   })()
// var baseScheme = "app://com.fanhantech.fanhandata"
// var createScheme=function(options){
//   // var urlScheme=baseScheme;
//   // for(var item in options){
//   //     urlScheme=urlScheme+item + '=' + encodeURIComponent(options[item]) + "&";
//   // }
//   // urlScheme = urlScheme.substring(0, urlScheme.length - 1);
//   // return encodeURIComponent(urlScheme);
//   return baseScheme
// }
// var openApp = function(param, callback) {
//   var localUrl = "app://com.fanhantech.fanhandata"+ param;
//   var openIframe=createIframe();
//   if(isIos){
//     iosFn(localUrl)
//   }else if(isAndroid){
//     androidFn(localUrl, openIframe)
//     if (callback) {
//       callback(localUrl, openIframe)
//     }
//   }else{
//     winphoneFn(localUrl, openIframe)
//   }
// }
// var iosFn = function (localUrl) {
//   window.location.href = localUrl;
//   var loadDateTime = Date.now();
//   setTimeout(function () {
//       var timeOutDateTime = Date.now();
//       if (timeOutDateTime - loadDateTime < 1000) {
//         window.location.href = "http://app.mi.com/details?id=com.fanhantech.fanhandata";
//       }
//   }, 25);
// }
// var androidFn = function (localUrl, openIframe) {
//   if (isWebKit) {
//     //chrome浏览器用iframe打不开得直接去打开，算一个坑
//     window.location.href = localUrl;
//   } else {
//     //抛出你的scheme
//     openIframe.src = localUrl;
//   }
//   var loadDateTime = Date.now();
//   setTimeout(function () {
//     var timeOutDateTime = Date.now();
//     if (timeOutDateTime - loadDateTime < 1000) {
//       window.location.href = "http://app.mi.com/details?id=com.fanhantech.fanhandata";
//     }
//   }, 500);
// }
// var winphoneFn = function (localUrl, openIframe) {
//   //主要是给winphone的用户准备的,实际都没测过，现在winphone不好找啊
//   openIframe.src = localUrl;
//   setTimeout(function () {
//     window.location.href = "http://app.mi.com/details?id=com.fanhantech.fanhandata";
//   }, 500);
// }