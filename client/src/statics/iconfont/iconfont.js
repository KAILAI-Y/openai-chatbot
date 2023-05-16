import { createGlobalStyle } from 'styled-components';

export const GlobalFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* Project id 4065290 */
    src: url('//at.alicdn.com/t/c/font_4065290_wa6ho5343ab.woff2?t=1684198301970') format('woff2'),
         url('//at.alicdn.com/t/c/font_4065290_wa6ho5343ab.woff?t=1684198301970') format('woff'),
         url('//at.alicdn.com/t/c/font_4065290_wa6ho5343ab.ttf?t=1684198301970') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-send:before {
    content: "\e661";
  }

  .icon-user:before {
    content: "\e7ae";
  }

  .icon-robot:before {
    content: "\e644";
  }


`;

