<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
/* 样式重置 */
body, div, ul, li, ol, h1, h2, h3, h4, h5, h6, input, textarea, select, p, dl, dt, dd, a, img, button, form, table, th, tr, td, tbody, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
margin: 0;
padding: 0;
}
body{
    background: #fff;
}
ul,li{
list-style-type: none;
}
.clearfix:after {
    content: "";
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
    }
a {
    text-decoration: none;
    font-family: "Microsoft YaHei", Tahoma, Arial, sans-serif;
    }
a:link,a:active,a:visited,a:hover {
background: none;
-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-tap-highlight-color: transparent;
}
html {
-webkit-text-size-adjust:100%;
-ms-text-size-adjust: 100%;
-webkit-overflow-scrolling : touch;
}
/* 禁止缩放表单 */
input[type="submit"], input[type="reset"], input[type="button"],input {
resize: none;
border: none;
outline: none
    }
/* 取消链接高亮 */
body, div, ul, li, ol, h1, h2, h3, h4, h5, h6, input, textarea, select, p, dl, dt, dd, a, img, button, form, table, th, tr, td, tbody, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
/* 设置HTML5元素为块 */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
display: block;
}
</style>
