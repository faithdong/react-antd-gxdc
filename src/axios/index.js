/*
 * @Author: zhongxd 
 * @Date: 2018-09-13 14:52:12 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-13 15:17:07
 */

import JsonP from 'jsonp';
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function (error, result) {
        console.log(result);
        console.log(error);
        if(result.status === "success"){
          return resolve(result);
        }else{
          return reject(result.message);
        }
      })
    })
  }
}