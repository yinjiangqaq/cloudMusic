import {createGlobalStyle} from'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* project id 1797783 */
  src: url('//at.alicdn.com/t/font_1797783_hfjs3r6l5yw.eot');
  src: url('//at.alicdn.com/t/font_1797783_hfjs3r6l5yw.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1797783_hfjs3r6l5yw.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1797783_hfjs3r6l5yw.woff') format('woff'),
  url('//at.alicdn.com/t/font_1797783_hfjs3r6l5yw.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1797783_hfjs3r6l5yw.svg#iconfont') format('svg');
}
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-listen:before {
  content: "\e707";
}

.icon-menu:before {
  content: "\e8bd";
}

.icon-search:before {
  content: "\e60c";
}
`