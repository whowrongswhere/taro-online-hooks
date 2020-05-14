/**
 * 首页相关reducer
 * @author yaobei on 2020/03/10.
 */
import * as types from '@constants/actionTypes';

const INITIAL_STATE = {
    categoryList: [],      //类别
    typeList: [],           //类型
}

export default function homeReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.home.category: {
      //添加title属性
      let arr = action.data && action.data.categoryList && action.data.categoryList.list
      let newArr = arr.map(v=>{
          return {...v, title: v.name}
      })
      return {
          ...state,
          categoryList: newArr,
        }
    }
    case types.home.type: {
      let arr = action.data && action.data.typeList && action.data.typeList.list
      let newArr = []
      arr.map(v=>{
        newArr.push(v.name)
      })
      
      
      return {
          ...state,
          typeList: action.data && action.data.typeList && action.data.typeList.list,
          typeArray: newArr
        }
    }
    case types.home.course: {
      return {
          ...state,
          courseList: action.data && action.data.courseList && action.data.courseList.list
        }
    }
    default:
      return state
  }
}
