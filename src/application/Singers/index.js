import React, { useState } from "react";
import Horizen from "../../baseUI/horizen-item";
import { categoryTypes, alphaTypes } from "../../api/config";
import styled from "styled-components";

//外层容器固定宽度，内层超越外层的宽度，然后外层overflowLhidden，这样才能移动
const NavContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
`;
function Singers(props) {
  let [category, setCategory] = useState("");
  let [alpha, setAlpha] = useState("");

  let handleUpdateAlpha = (val) => {
    setAlpha(val); //选中之后改变旧值
    console.log(val);
  };
  let handleUpdateCategory = (val) => {
    setCategory(val);
  };
  return (
    <NavContainer>
      <Horizen
        list={categoryTypes}
        title={"分类 (默认热门)："}
        handleClick={handleUpdateCategory}
        oldVal={category}
      ></Horizen>
      <Horizen
        list={alphaTypes}
        title={"首字母："}
        handleClick={handleUpdateAlpha}
        oldVal={alpha}
      ></Horizen>
    </NavContainer>
  );
}

export default React.memo(Singers);
