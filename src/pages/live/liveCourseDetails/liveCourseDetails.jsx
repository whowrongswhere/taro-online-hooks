/**
 * 直播详情组件
 * @author yaobei on 2020/05/13.
 */
import {useState, useEffect} from '@tarojs/taro';
import {View, Image, ScrollView, Video} from '@tarojs/components';
import { AtIcon, AtButton } from 'taro-ui'
import classNames from 'classnames'
import { getWindowHeight } from '@utils/style';
import './index.scss';

function LiveCourseDetails(props) {
  LiveCourseDetails.config = {
     navigationBarTitleText: '直播详情'
  }

  const [video, setVideo] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    if(this && this.$router && this.$router.params && this.$router.params.data) {
      let data = JSON.parse(this && this.$router && this.$router.params && this.$router.params.data)
      
      setVideo(data && data.video)
      setData(data)
      
      //设置导航栏标题
      Taro.setNavigationBarTitle({title: data && data.name})
    }
  });

  return (
    <View className='greyContainer live-course-details'>
       <Video
          className='video'
          src={video}
          controls={true}
          autoplay={false}
          // poster='http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
          initialTime='0'
          id='video'
          loop={false}
          muted={false}
        />

        <View className='content'>
            <View className='top'>
              <View className='row'>
                <View className='at-icon at-icon-home'></View>
                <Text className='text'>{data.teacherName}</Text>
              </View>
              <View className='row'>
                <View className='at-icon at-icon-clock'></View>
                <Text className='text'>{data.liveTime}</Text>
              </View>
            </View>
            <View className='middle' style={{height: (getWindowHeight() - 290) + 'Px'}}>
              <View className='title'>
                  <Text className='text'>直播简介</Text>
              </View>
              <View className='details'>
                  <Text className='text'>{data.details}</Text>
              </View>
            </View>
        </View>

        <View className='footer'>
          <AtButton className='button' type='primary' size='normal'>进入直播</AtButton>
        </View>
    </View>
  );

}

export default LiveCourseDetails
