/*
 * @Author: zhongxd 
 * @Date: 2018-09-12 22:54:12 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-12 23:04:48
 */

 export default {
	 formateDate(time){
		 if(!time)return '';
		 let date = new Date(time);
		 return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getHours() + ":" + date.getMinutes()+":" + date.getSeconds();
	 }
 }