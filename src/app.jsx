import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './store'

import '@styles/theme.scss' // 全局引入一次即可

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    pages: [
      //我的
      'pages/my/my',

      //直播
      'pages/live/live',

      //首页
      'pages/home/home',


      //课程详情
      'pages/home/courseDetails/courseDetails',

      //直播详情
      'pages/live/liveCourseDetails/liveCourseDetails',
    ],
    window: {
      backgroundTextStyle: '#fff',
      navigationBarBackgroundColor: '#75a342',
      navigationBarTitleText: '在线教育',
      navigationBarTextStyle: '#fff',
      enablePullDownRefresh: false
    },
    tabBar: {
      color: "#7d7e80",
      selectedColor: "#75a342",
      backgroundColor: "#ffffff",
      borderStyle: "white",
      list: [{
        pagePath: "pages/home/home",
        text: "首页",
        iconPath: "./assets/images/tabbar/home_default.png",
        selectedIconPath: "./assets/images/tabbar/home_selected.png"
      },{
        pagePath: "pages/live/live",
        text: "直播",
        iconPath: "./assets/images/tabbar/category_default.png",
        selectedIconPath: "./assets/images/tabbar/category_selected.png"
      },{
        pagePath: "pages/my/my",
        text: "我的",
        iconPath: "./assets/images/tabbar/mine_default.png",
        selectedIconPath: "./assets/images/tabbar/mine_selected.png"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
