import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Scroll from "../Scroll/index";
import style from "../../assets/global-style";
import { PropTypes } from "prop-types";

function Horizen(props) {
  const category = useRef(null);
  useEffect(() => {
    let categoryDOM = category.current;
    let tagElems = categoryDOM.querySelectorAll("span");
    let totalWidth = 0;
    Array.from(tagElems).forEach((ele) => [(totalWidth += ele.offsetWidth)]);
    categoryDOM.style.width = `${totalWidth}px`;
  });
  const { list, oldVal, title, handleClick } = props;
  return (
    <Scroll direction={"horizental"}>
      {/* 固定长度 */}
      <div ref={category}>
        <List>
          <span>{title}</span>
          {list.map((item) => {
            return (
              <ListItem
                key={item.key}
                className={`${oldVal === item.key ? "selected" : ""}`}
                onClick={() => handleClick(item.key)}
              >
                {item.name}
              </ListItem>
            );
          })}
        </List>
      </div>
    </Scroll>
  );
}

//list元素
const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${style["font-size-m"]};
    vertical-align: middle;
  }
`;
//Listitem元素
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style["font-size-m"]};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`;

//确定传入的参数
Horizen.defalutProps = {
  list: [], //接受的列表数据
  oldVal: "", //当前的item值
  title: "", //列表左边的标题
  handleClick: null,
};
//propType是小写的p
Horizen.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func,
};

export default React.memo(Horizen);
