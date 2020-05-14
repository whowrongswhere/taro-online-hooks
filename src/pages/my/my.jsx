/**
 * 我的
 * @author yaobei on 2020/05/14.
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtList, AtListItem, AtIcon, AtGrid } from "taro-ui"
import './index.scss'
import userHeader from "@assets/images/mine/userHeader.jpg";
import icon1 from "@assets/images/mine/icon1.png";
import icon2 from "@assets/images/mine/icon2.png";
import icon3 from "@assets/images/mine/icon3.png";
import icon4 from "@assets/images/mine/icon4.png";

const icon_color = '#75a342'
const icon_size = 24

const data_grid = [
  {
    image: icon1,
    value: '我的课程'
  },
  {
    image: icon2,
    value: '课后作业'
  },
  {
    image: icon3,
    value: '我的考试'
  },
  {
    image: icon4,
    value: '考试报名'
  }
]

const application_data = [
  {
    icon: {size: icon_size,color: icon_color, value: 'user'},
    title: '实名认证',
    routeName: 'UserInfo'
  },
  {
    icon: {size: icon_size,color: icon_color, value: 'menu'},
    title: '会员中心',
    routeName: 'UserInfo'
  },
  {
    icon: {size: icon_size,color: icon_color, value: 'money'},
    title: '我的成绩',
    routeName: 'UserInfo'
  }
]

const application_data2 = [
  {
    icon: {size: icon_size,color: icon_color, value: 'tag'},
    title: '我的积分',
    extraText: '详情',
    routeName: 'UserInfo'
  },
  {
    icon: {size: icon_size,color: icon_color, value: 'bookmark'},
    title: '我的学分',
    extraText: '详情',
    routeName: 'UserInfo'
  }
]

const application_data3 = [
  {
    icon: {size: icon_size,color: icon_color, value: 'eye'},
    title: '我的评价',
    extraText: '详情',
    routeName: 'UserInfo'
  },
  {
    icon: {size: icon_size,color: icon_color, value: 'shopping-cart'},
    title: '我的收藏',
    extraText: '详情',
    routeName: 'UserInfo'
  }
]

const application_data4 = [
  {
    icon: {size: icon_size,color: icon_color, value: 'phone'},
    title: '联系客服',
    routeName: 'UserInfo'
  },
  {
    icon: {size: icon_size,color: icon_color, value: 'mail'},
    title: '投诉建议',
    routeName: 'UserInfo'
  }
]

const application_data5 = [
  {
    icon: {size: icon_size,color: icon_color, value: 'message'},
    title: '关于我们',
    routeName: 'UserInfo'
  },
  {
    icon: {size: icon_size,color: icon_color, value: 'lock'},
    title: '退出登录',
    routeName: 'UserInfo'
  }
]



function My(params) {
  My.config = {
     navigationBarTitleText: '我的'
  }

  const onListItem = (item) => {
    console.log(item && item.title)
  }

// <View className='mine-useinfo'>
//         <Image className='useinfo-img' src={userHeader} />
//         <Text className='useinfo-text'>立即登录</Text>
//       </View>

  return (
    <View className='greyContainer'>
      <View className='view-mine'>
        <View className='mine-useinfo'>
          <Image className='useinfo-img' src={userHeader} />
          <View className='user'>
            <View>
              <Text className='name'>张三</Text>
            </View>
            <View>
              <Text className='card'>学号:134556678788</Text>
              <Text className='depart'>学院:xxx学院</Text>
            </View>
          </View>
        </View>

        <View className='rowBetween details'>
          <View className='columnCenter'>
              <Text className='score'>30</Text>
              <Text className='title'>已获学分</Text>
          </View>
          <View className='columnCenter'>
              <Text className='score'>12</Text>
              <Text className='title'>我的积分</Text>
          </View>
          <View className='columnCenter'>
              <Text className='score'>88<Text className='label'>分钟</Text></Text>
              <Text className='title'>学习时长</Text>
          </View>
        </View>
      </View>

      <AtGrid
          className='mine-grid'
          hasBorder={false}
          columnNum={4}
          data={data_grid}
      />

      <View className='line' />

      <AtList>
        {
          application_data.map((item, index)=> {
              return (
                <AtListItem
                  key={index}
                  title={item.title}
                  arrow='right'
                  iconInfo={item.icon}
                  onClick={()=> {onListItem(item)}}
                />
              )
          })
        }
      </AtList>

      <View className='line' />

      <AtList className='mine-atList'>
        {
          application_data2.map((item, index)=> {
              return (
                <AtListItem
                  key={index}
                  title={item.title}
                  arrow='right'
                  iconInfo={item.icon}
                  extraText={item.extraText}
                  onClick={()=> {onListItem(item)}}
                />
              )
          })
        }
      </AtList>

      <View className='line' />

      <AtList className='mine-atList'>
        {
          application_data3.map((item, index)=> {
              return (
                <AtListItem
                  key={index}
                  title={item.title}
                  arrow='right'
                  iconInfo={item.icon}
                  extraText={item.extraText}
                  onClick={()=> {onListItem(item)}}
                />
              )
          })
        }
      </AtList>

      <View className='line' />

      <AtList>
        {
          application_data4.map((item, index)=> {
              return (
                <AtListItem
                  key={index}
                  title={item.title}
                  arrow='right'
                  iconInfo={item.icon}
                  onClick={()=> {onListItem(item)}}
                />
              )
          })
        }
      </AtList>

      <View className='line' />

      <AtList>
        {
          application_data4.map((item, index)=> {
              return (
                <AtListItem
                  key={index}
                  title={item.title}
                  arrow='right'
                  iconInfo={item.icon}
                  onClick={()=> {onListItem(item)}}
                />
              )
          })
        }
      </AtList>


    </View>
  )
}


export default My
