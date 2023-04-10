
import myAxios from "axios"
//创建axios实例，设置公共配置
const _myAxios = myAxios.create({
    baseURL: "http://localhost:8000/wellheadunique", //请求url前缀
    withCredentials: true   //跨域请求时携带cookie

});
//请求拦截器
_myAxios.interceptors.request.use(config =>{
    //在发生请求之前做的事情
    config.headers={
        Authorization: "aaa.bbb.ccc"
    }
    return config;
}, error => {
    //请求发生错误时做的事情，这里直接把错误抛出去
    return Promise.reject(error);
});

//响应拦截器
_myAxios.interceptors.response.use(resp => {
    //接收响应之前做处理
    console.log("接收的响应状态码是：",resp.status);
    return resp;
}, error => {
    //响应发生错误时的处理
    return Promise.reject(error);
});
export default _myAxios 