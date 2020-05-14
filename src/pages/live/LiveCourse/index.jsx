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

function LiveCourse(props) {
  const [data, setData] = useState([]);


  useEffect(() => {
    setData(props && props.data)

  });

  //点击事件
  const onToSee = (item) => {
    Taro.navigateTo({
      url: `/pages/live/liveCourseDetails/liveCourseDetails?data=${JSON.stringify(item) }`
    })
  }

  return (
    <ScrollView className='livecourse-list'>
      {
        data && data.map((item, index)=> {
          return (
            <View className='module' key={index} onClick={()=> {onToSee(item)}}>
               <Image
                 className='img'
                 src={item.image ? item.image : src}
                 mode='scaleToFill'
               />
               <View className='content'>
                    <View className='module-right'>
                      <View className='right-top'>
                          <Text className='title'>{item.name}</Text>
                          <Text className='teacherName'>{item.teacherName}</Text>
                      </View>
                      <View className='right-bottom'>
                        <View>
                           <Text className='credit'> {item.isFree === '0' ? '免费': '收费'}</Text>
                           <Text className='number'>{item.learnsNumber}人在学</Text>
                        </View>
                      </View>
                    </View>
               </View>

               {
                 item && item.typeId === 7 ? (
                   <View className='status'>
                      <View className='at-icon at-icon-clock icons'></View>
                      <Text className='text'>已结束</Text>
                   </View>
                 ) : (
                  item && item.typeId === 5 ? (
                    <View className='status-live'>
                       <View className='at-icon at-icon-play icons'></View>
                       <Text className='text'>直播中</Text>
                    </View>
                  ) : (null)
                 )
               }

            </View>
          )
        })
      }
    </ScrollView>
  );

}

export default LiveCourse
