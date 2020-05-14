/**
 * 直播相关reducer
 * @author yaobei on 2020/05/13.
 */
import * as types from '@constants/actionTypes';

const INITIAL_STATE = {
    typeList: [],           //类型
    courseList: [],           //直播课程
}

export default function liveReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.live.type: {
      //添加title属性
      let arr = action.data && action.data.typeList && action.data.typeList.list
      let newArr = arr.map(v=>{
          return {...v, title: v.name}
      })
      return {
          ...state,
          typeList: newArr,
        }
    }
    case types.live.course: {
      return {
          ...state,
          courseList: action.data && action.data.courseList && action.data.courseList.list
        }
    }
    default:
      return state
  }
}
