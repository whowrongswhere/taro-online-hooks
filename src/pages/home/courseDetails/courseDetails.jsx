/**
 * 课程详情组件
 * @author yaobei on 2020/05/08.
 */
import {useState, useEffect} from '@tarojs/taro';
import {View, Image, ScrollView, Video} from '@tarojs/components';
import { AtIcon } from 'taro-ui'
import classNames from 'classnames'
import './index.scss';

function CourseDetails(props) {
  CourseDetails.config = {
     navigationBarTitleText: '课程详情'
  }

  const [video, setVideo] = useState();

  useEffect(() => {
    console.log(JSON.parse(this.$router.params && this.$router.params.data))
    let data = JSON.parse(this.$router.params && this.$router.params.data)

    setVideo(data && data.video)

    //设置导航栏标题
    Taro.setNavigationBarTitle({title: data && data.name})
  });

  return (
    <View className='course-details'>
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
    </View>
  );

}

export default CourseDetails
