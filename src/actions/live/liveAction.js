/*
 * @Description:
 * @Author: yaobei
 * @Date: 2020-05-08 14:18:44
 * @LastEditors: yaobei
 * @LastEditTime: 2020-05-08 14:20:07
 */
/**
 * 首页相关action
 * @author yaobei on 2020/03/10.
 */
import * as types from '@constants/actionTypes';
import { API_CONSTANT } from '@constants/api';
import { createAction } from '@utils/redux';

/**
 * 请求分类
 * @param {*} data
 */
export const typeAction = (data) => createAction({
    url: API_CONSTANT.LIVE_TYPE,
    type: types.live.type,
})

/**
 * 请求课程列表
 * @param {*} data
 */
export const liveAction = (data) => createAction({
    url: API_CONSTANT.LIVE_LIST,
    type: types.live.course,
    data
})
