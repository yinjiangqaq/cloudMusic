import { fromJS } from "immutable";
import * as actionTypes from "./constants";

//初始化state，相当于singer界面，初始化拿到的data值
const defaultState = fromJS({
  singerList: [],
  enterLoading: true, //控制进场Loading
  pullUpLoading: false, //控制下拉加载动画
  pullDownLoding: false, //控制下拉加载动画
  pageCount: 0,
});

//定义reducer函数，接受state和action，返回新的state
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set("singerList", action.data); //都是设置key值，然后新的value
    case actionTypes.CHANGE_PAGE_COUNT:
      return state.set("pageCount", action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set("enterLoading", action.data);
    case actionTypes.CHANGE_PULLUP_LOADING:
      return state.set("pullUpLoading", action.data);
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      return state.set("pullDownLoding", action.data);
    default:
      return state;
  }
};
