// 存放initialState和reducer函数
import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    bannerList: [],
    recommendList: [],
    enterLoading: true
});

//reducer就是一个纯函数，接受旧的state和action，返回新的state

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            return state.set('bannerList', action.data);
        case actionTypes.CHANGE_RECOMMEND_LIST:
            return state.set('recommendList', action.data);//immutable对象使用set,get方法
        case actionTypes.CHANGE_ENTER_LOADING:
            return state.set('enterLoading', action.data);
        default:
            return state;
    }
}