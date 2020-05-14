/*
 * @Description: 
 * @Author: yaobei
 * @Date: 2020-05-08 13:33:42
 * @LastEditors: yaobei
 * @LastEditTime: 2020-05-08 14:33:07
 */
import { combineReducers } from 'redux'
import home from './home/homeReducer';
import live from './live/liveReducer';

export default combineReducers({
  home,
  live
})
