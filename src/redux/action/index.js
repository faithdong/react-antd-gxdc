/*
 * @Author: zhongxd 
 * @Date: 2018-09-27 13:53:27 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-27 16:51:47
 * Action 类型
 */


export const type = {
  SWITCH_MENU:'SWITCH_MENU'
}

export function switchMenu(menuName){
  return {
    type:type.SWITCH_MENU,
    menuName:menuName
  }
}