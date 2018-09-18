/*
 * @Author: zhongxd 
 * @Date: 2018-09-13 14:52:12 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-18 17:45:02
 */

import JsonP from 'jsonp';
import axios from 'axios';
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function (error, result) {
        if(result.status === "success"){
          return resolve(result);
        }else{
          return reject(result.message);
        }
      })
    })
  }

  static ajax(options){
    let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
    return  new Promise((resolve,reject)=>{
      axios({
        url:options.url,
        method:'get',
        baseUrl:baseApi,
        timeout:5000,
        params:(options.data && options.data.params) || ''
      }).then((response)=>{
        if(response.status == '200'){
          let res = response.data;
          if(res.code == '0'){
            resolve(res.data);
          }
        }else{
          reject(response.data);
        }
      })
    });
  }

}