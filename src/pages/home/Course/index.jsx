/**
 * 课程组件
 * @author yaobei on 2020/05/08.
 */
import Taro, {useState, useEffect} from '@tarojs/taro';
import {View, Image, ScrollView} from '@tarojs/components';
import { AtTag } from 'taro-ui'
import classNames from 'classnames'
import './index.scss';
import src from '@assets/images/course_image.jpg';

function Course(props) {
  const [data, setData] = useState([]);


  useEffect(() => {
    setData(props && props.data)

  });

  //试看点击事件
  const onToSee = (item) => {
    Taro.navigateTo({
      url: `/pages/home/courseDetails/courseDetails?data=${JSON.stringify(item) }`
    })
  }

  //购买点击事件
  const onBuy = (item) => {
    console.log(item)
  }

  return (
    <ScrollView className='course-list'>
      {
        data && data.map((item, index)=> {
          return (
            <View className='module' key={index}>
               <Image
                 className='img'
                 src={item.image ? item.image : src}
                 // mode='aspectFill'
               />
               <View className='content'>
                    <View className='module-right'>
                      <View className='right-top'>
                          <Text className='title'>{item.name}</Text>
                          <Text className='subTitle'>{item.describe}</Text>
                      </View>
                      <View className='right-bottom'>
                        <View>
                          <Text className='number'>{item.learnsNumber}人已学</Text>
                           <Text className='credit'>{item.credit}分</Text>
                        </View>
                      </View>
                    </View>
                    <View className='module-tag'>
                      <AtTag type='primary'
                              size='small'
                              circle
                              active
                              onClick={()=> {onToSee(item)}}
                        >试看</AtTag>
                      <AtTag
                        className='ml15'
                        type='primary'
                        size='small'
                        circle
                        active
                        onClick={()=> {onBuy(item)}}
                        >购买</AtTag>
                    </View>
               </View>

            </View>
          )
        })
      }
    </ScrollView>
  );

}

export default Course
