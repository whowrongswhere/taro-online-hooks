/**
 * 直播
 * @author yaobei on 2020/03/03.
 */
import Taro, { useState, useEffect } from '@tarojs/taro'
import {useDispatch, useSelector} from '@tarojs/redux'
import { View, Text, Image} from '@tarojs/components'
import {typeAction, liveAction} from '@actions/live/liveAction'
import * as types from '@constants/actionTypes'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss'
import LiveCourse from './LiveCourse'

function Live(props) {
  Live.config = {
     navigationBarTitleText: '直播'
  }

  //初始化状态
  const [tabsCurrent, setTabsCurrent] = useState(0)

  const dispatch = useDispatch()
  //使用 useSelector Hooks 获取 Redux Store 数据
  const typeList = useSelector(state => state.live.typeList)
  const courseList = useSelector(state => state.live.courseList)

  useEffect(()=>{
    function getData() {
      try {
        //请求类型
        typeAction().then(res => {
          // 更新 Redux Store 数据
         dispatch({type: types.live.type, data: {typeList: res}})
        })

        //请求课程列表
        getCourse(null)

      } catch (err) {
      }
    }

    //获取数据
    getData()

  },[dispatch])

  //标签页点击事件
  const onTabs = (index) => {
    setTabsCurrent(index)
    
    let params = {
      typeId: index === 0 ? null : typeList && typeList[index] && typeList[index].id
    }

    //更新课程列表
    getCourse(params)
  }

  //获取课程列表
  const getCourse = (params) => {
    //请求课程列表
    liveAction(params).then(res => {
      // 更新 Redux Store 数据
     dispatch({type: types.live.course, data: {courseList: res}})
    })
  }

  return (
    <View className='greyContainer'>
      <View className='view-tabs'>
        <AtTabs
          current={tabsCurrent}
          tabList={typeList}
          onClick={(index)=> {onTabs(index)}}
        >
        </AtTabs>
      </View>

      <View className='view-course'>
        <LiveCourse data={courseList} />
      </View>
    </View>
  )
}

export default Live
