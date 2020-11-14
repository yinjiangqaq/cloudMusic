import React, { useEffect } from "react";
import Slider from "../../components/slider";
import RecommendList from "../../components/list";
import Scroll from "../../baseUI/Scroll";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators";
import { Content } from "./style";
import { forceCheck } from "react-lazyload"; //懒加载
import Loading from "../../baseUI/loading";

function Recommend(props) {
  const { bannerList, recommendList, enterLoading } = props;

  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

  useEffect(() => {
    //这是防止，切换回来之后，又进行多余的请求。因为前面的bannerlist等数据都有缓存，所以不需要重复请求，浪费性能
    if (!bannerList.size) getBannerDataDispatch();
    if (!recommendList.size) getRecommendListDataDispatch(); //首次渲染执行，拿到轮播图数据和推荐歌单数据
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];
  console.log(recommendListJS);
  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
      {enterLoading ? <Loading></Loading> : null}
    </Content>
  );
}

//映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
  //不要在这里讲数据toJS
  //不然每次diff比对props的时候，都是不一样的引用，还是导致不必要的重渲染，属于滥用immutable
  bannerList: state.getIn(["recommend", "bannerList"]),
  recommendList: state.getIn(["recommend", "recommendList"]),
  enterLoading: state.getIn(["recommend", "enterLoading"]),
});
//映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  };
};
// 将 ui 组件包装成容器组件
// 包装成的props，连接起来
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend));
