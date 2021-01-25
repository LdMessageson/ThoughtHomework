/** 
 * 配置线上环境和编译环境的切换
 * 
 * baseUrl: '域名地址'
 * rouderMode: '路由模式'
 * imgBaseUrl: '图片所在域名地址'
 * 
*/
let baseUrl = ''; 
let routerMode = 'hash';
let imgBaseUrl = '';
let mock = false;
if (process.env.NODE_ENV == 'development') {
    imgBaseUrl = '/img/';
    mock = true;

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = '';
    imgBaseUrl = '';
    mock = false;
}
export {
    baseUrl,
    routerMode,
    imgBaseUrl,
    mock
}