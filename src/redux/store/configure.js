/*
 * @Author: zhongxd 
 * @Date: 2018-09-27 14:40:17 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-27 16:57:57
 * 引入 createStore  
 */

 import  { createStore } from 'redux';
 import reducer from './../reducer';
 //import { composeWithDevTools } from 'redux-devtools-extension';

 export default ()=> createStore(reducer);
