import axios from 'axios';
import Vue from 'vue';
let http = axios.create({
    timeout: 20000,
    // 携带cookie
    withCredentials: true
});
http.interceptors.request.use((config) => config, (error) => {
    Vue.prototype.$message({
        message: '请求错误',
        type: 'error'
    });
    return Promise.reject(error);
});
http.interceptors.response.use((res) => {
    const {status, code, message, msg} = res.data;
    const {url} = res.config;
    if (status === undefined) {
        Vue.prototype.$message({
            message: '接口格式异常，请您稍后重试',
            type: 'error'
        });
    }
    return res;
}, (error) => {
    const {status, statusText} = error.response;
    console.log(status, statusText)
    throw error;
});
export default http;
