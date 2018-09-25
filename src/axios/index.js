/*
 * @Author: zhongxd 
 * @Date: 2018-09-13 14:52:12 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-25 17:33:14
 */

import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';
import Utils from './../utils/utils';

export default class Axios {
  static requestList(_this ,url, params) {
    let data = {
      params: params
    };
    this.ajax({
      url: url,
      data: data
    }).then((data) => {
      if (data && data.result) {
        let list = data.result.item_list.map( (item ,index) => {
          item.key = index;
          return item;
        });
        _this.setState({
          list,
          pagination: Utils.pagination(data, (current) => {
            _this.params.page = current;
            _this.requestList();
          })
        })
      }
    });
  }

  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function (error, result) {
        if (result.status === "success") {
          return resolve(result);
        } else {
          return reject(result.message);
        }
      })
    })
  }

  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading');
      loading.style.display = 'block';
    }
    let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        //timeout:5000,
        params: (options.data && options.data.params) || ''
      }).then((response) => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading');
          loading.style.display = 'none';
        }
        if (response.status == '200') {
          let res = response.data;
          if (res.code == '0') {
            resolve(res);
          } else {
            Modal.info({
              title: "提示",
              content: res.data.msg
            });
          }
        } else {
          reject(response.data);
        }
      })
    });
  }

}