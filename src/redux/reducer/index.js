/*
 * @Author: zhongxd 
 * @Date: 2018-09-27 13:54:22 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-27 17:06:55
 *  数据处理
 */

import { type } from './../action';

 const initialState = {
  menuName:'首页'
 }

 export default (state=initialState, action) => {
  switch(action){
    case type.SWITCH_MENU:
      return [
        ...state,
        {
        
          menuName:action.menuName
        }
      ]
    default:
      break;
  }
 }
