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
   },
   pagination(data,callback){
     let page = {
       onChange:(current)=>{
        callback(current);
       },
       current:data.result.page,
       pageSize:data.result.page_size,
       total:data.result.total_count,
       showTotal:()=>{
         return `共${data.result.total_count}条`
       },
       showQuickJumper:true
     };
     return page;
   }
 }