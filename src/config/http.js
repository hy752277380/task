import axios from 'axios';


axios.defaults.timeout = 10000;
// axios.defaults.baseURL = 'http://127.0.0.1:8809'
axios.defaults.baseURL = ''

//整理数据
axios.defaults.transformResponse = data => {
    data = JSON.parse(data);
    return data;
}

// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        return config;
    },
    error => {
        return Promise.reject(error.response);
    }
)

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.status == "200") {
            // 返回 错误代码-1 清除ticket信息并跳转到登录页面
            //  window.location.href='http://login.com'
            return response.data;
        } else {
            return response;
        }
    },
    error => {
        return Promise.reject(error.response)   // 返回接口返回的错误信息
    });

export default axios;
