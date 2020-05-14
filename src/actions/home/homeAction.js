
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
 * 请求类别
 * @param {*} data
 */
export const categoryAction = (data) => createAction({
    url: API_CONSTANT.COURSE_CATEGORY,
    type: types.home.category,
})

/**
 * 请求分类
 * @param {*} data
 */
export const typeAction = (data) => createAction({
    url: API_CONSTANT.COURSE_TYPE,
    type: types.home.type,
})

/**
 * 请求课程列表
 * @param {*} data
 */
export const courseAction = (data) => createAction({
    url: API_CONSTANT.COURSE_LIST,
    type: types.home.course,
    data
})
