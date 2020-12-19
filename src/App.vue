<template>
  <div id="app">
    <my-header></my-header>
    <!-- <my-footer></my-footer> -->
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<style>
/*整个页面的背景色*/
body{
  background-color: #f5f5f5;
  min-width:1000px;
}
/*一级容器定宽居中*/
body>.container{
  width:1000px;
  min-width:1000px;
  margin:0 auto;
}
</style>
