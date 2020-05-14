/**
 * 首页
 * @author yaobei on 2020/05/08.
 */
import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Image} from '@tarojs/components'
import {useDispatch, useSelector} from '@tarojs/redux'
import {categoryAction, typeAction, courseAction} from '@actions/home/homeAction'
import * as types from '@constants/actionTypes';
import { AtTabs, AtTabsPane, AtSegmentedControl } from 'taro-ui'
import './index.scss'

import Course from './Course';


function Home(props) {
  //初始化状态
  const [tabsCurrent, setTabsCurrent] = useState(0)
  const [segCurrent, setSegCurrent] = useState(0)


  const dispatch = useDispatch()
  //使用 useSelector Hooks 获取 Redux Store 数据
  const categoryList = useSelector(state => state.home.categoryList)
  const typeList = useSelector(state => state.home.typeList)
  const typeArray = useSelector(state => state.home.typeArray)
  const courseList = useSelector(state => state.home.courseList)

  useEffect(()=>{
    function getData() {
      try {
        //请求课程类别
        categoryAction().then(res => {
          // 更新 Redux Store 数据
         dispatch({type: types.home.category, data: {categoryList: res}})
        })

        //请求课程类型
        typeAction().then(res => {
          // 更新 Redux Store 数据
         dispatch({type: types.home.type, data: {typeList: res}})
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

    let categoryId = index === 0 ? null : categoryList && categoryList[index] && categoryList[index].id
    let typeId = segCurrent === 0 ? null : typeList && typeList[segCurrent] && typeList[segCurrent].id

    let params = {
      categoryId: categoryId,
      typeId: typeId
    }

    //更新课程列表
    getCourse(params)
  }

  //分段器点击事件
  const onSegment = (index) => {
    setSegCurrent(index)

    let categoryId = tabsCurrent === 0 ? null : categoryList && categoryList[tabsCurrent] && categoryList[tabsCurrent].id
    let typeId = index === 0 ? null : typeList && typeList[index] && typeList[index].id

    let params = {
      categoryId: categoryId,
      typeId: typeId
    }

    //更新课程列表
    getCourse(params)
  }

  //获取课程列表
  const getCourse = (params) => {
    //请求课程列表
    courseAction(params).then(res => {
      // 更新 Redux Store 数据
     dispatch({type: types.home.course, data: {courseList: res}})
    })
  }
  

  return (
    <View className='greyContainer'>
      <View className='view-tabs'>
        <AtTabs
          current={tabsCurrent}
          scroll
          tabList={categoryList}
          onClick={(index)=> {onTabs(index)}}
        >
        </AtTabs>
      </View>

      <View className='segment'>
        <AtSegmentedControl
          current={segCurrent}
          values={typeArray}
          onClick={(index)=> {onSegment(index)}}
        >
        </AtSegmentedControl>
      </View>

      <View className='view-course'>
        <Course data={courseList} />
      </View>




    </View>
  )
}

export default Home
