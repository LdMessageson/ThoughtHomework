import { baseUrl } from './env'

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;
	
	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})
		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}
	if (window.fetch && method == 'fetch') {
		let requestConfig = {
			credentials: 'include',
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			mode: "cors",
			cache: "force-cache"
		}
		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}
		try {
			const response = await fetch(url, requestConfig);
			console.log(response,"~");
			const responseJson = await response.json();
			console.log(responseJson,"-");
			return responseJson
		} catch (error) {
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}

//let vm = new Vue();

// 处理promise和fetch的兼容性以及引入
//require("es6-promise").polyfill();

// 处理get请求，传入参数对象拼接
// let formatUrl = obj => {
//     let params = Object.values(obj).reduce((a, b, i) => `${a}${Object.keys(obj)[i]}=${encodeURI(b)}&`, "?");
//     return params.substring(0, params.length - 1);
// };

// let Fetch = (url, option = {}) => {
//     option.headers = option.headers || {};
//     const m = (option.method || "").toLocaleLowerCase();
//     // get query format
//     if (m == "get") {
//         if (option.query) {
//             url = url + formatUrl(option.query);
//         }
//     }
//     // 对非get类请求头和请求体做处理
//     if (m === "post" || m === "put" || m === "delete") {
//         option.headers["Content-Type"] = "application/json";
//         let isFormData = option.headers["formData"];
//         if (isFormData) {
//             delete option.headers["Content-Type"];
//             delete option.headers["formData"];
//         }

//         if (isFormData) {
//             //option.body = option.body;
//         } else if (option.body instanceof Array || option.body instanceof Object) {
//             option.body = JSON.stringify(option.body);
//         } else if (new String(option.body) instanceof String) {
//             option.body;
//         } else {
//             option.body = '"' + option.body + '"';
//         }
//     }
//     return new Promise(resolve => {
//         function handleResponse(response) {
//             let contentType = response.headers.get("content-type");
//             if (contentType.includes("application/json")) {
//                 return handleJSONResponse(response);
//             } else if (contentType.includes("text/html") || contentType.includes("text/plain;charset=UTF-8")) {
//                 return handleTextResponse(response);
//             } else if (contentType.includes("application/octet-stream;")) {
//                 return handleBlobResponse(response);
//             } else {
//                 throw new Error(`Sorry, content-type ${contentType} not supported`);
//             }
//         }

//         function handleJSONResponse(response) {
//             return response.json().then(json => {
//                 if (response.ok) {
//                     if (parseInt(json.code) && (parseInt(json.code) <= 1000 || parseInt(json.code) == 1100) && parseInt(json.code) != 1) {
//                         return Promise.reject(
//                             Object.assign({}, json, {
//                                 status: parseInt(json.code),
//                                 statusText: json.message,
//                             }),
//                         );
       
//                     } else {
//                         return json;
//                     }
//                 } else {
//                     return Promise.reject(
//                         Object.assign({}, json, {
//                             status: response.status,
//                             statusText: response.statusText,
//                         }),
//                     );
//                 }
//             });
//         }
//         function handleTextResponse(response) {
//             return response.text().then(text => {
//                 if (response.ok) {
//                     return text;
//                 } else {
//                     return Promise.reject({
//                         status: response.status,
//                         statusText: response.statusText,
//                         err: text,
//                     });
//                 }
//             });
//         }
//         function handleBlobResponse(response) {
//             return response.blob().then(blob => {
//                 if (response.ok) {
//                     return blob;
//                 } else {
//                     return Promise.reject({
//                         status: response.status,
//                         statusText: response.statusText,
//                         err: blob,
//                     });
//                 }
//             });
//         }
//         fetch(url, option)
//             .then(handleResponse)
//             .then(response => {
//                 if (response.status === 500) {
//                 }
               
//                 resolve(response);
//             })
//             .catch(error => {
//                 console.log(error);
//                 if (error.status == undefined) error.status = 404;
//                 if (!error.statusText) error.statusText = error.message;
//                 if (error.status <= 1000) {
//                     error.statusText = "服务器请求错误，请稍后再试或者咨询管理员";
//                     if (error.status == 404) error.statusText = "服务器无法连接或者您请求的页面地址不对";
//                     if (error.status == 500) error.statusText = "服务器处理发生错误，请咨询管理员";
//                 }
//                 resolve({
//                     code: error.status,
//                     message: error.statusText,
//                     msg:  error.statusText,
//                 });
//             });
//     });
// };

// export default Fetch;

