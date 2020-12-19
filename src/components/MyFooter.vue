<template>
  <div>
    <div class="container-fluid">
      <!-- <table></table> -->
      <!-- 图片链接 -->
      <div class="d1">
        <span class="weixin"
          ><img
            src="https://www.timemore.com/wp-content/uploads/2020/04/weixin.png"
            alt=""
        /></span>
        <span class="weibo"
          ><img
            src="https://www.timemore.com/wp-content/uploads/2020/04/weibo.png"
            alt=""
        /></span>
        <span href="#" class="douyin"
          ><img
            src="https://www.timemore.com/wp-content/uploads/2020/04/d.png"
            alt=""
        /></span>
        <span href="#" class="bili"
          ><img
            src="https://www.timemore.com/wp-content/uploads/2020/04/bili.png"
            alt=""
        /></span>
      </div>
      <!-- 下部分 -->
      <div class="d2">
        <!-- 左侧 -->
        <div>
          <p class="p1">最快获取我们的产品信息</p>
          <input type="text" class="my_btn1" placeholder="Your E-mail" /><button
            class="my_btn2"
          >
            Submit
          </button>
          <p class="p2">
            上海泰摩咖啡器具有限公司
            <br />
            联系电话：400-684-0200
            <br />
            公司地址：浦东新区东明路2200号南区301-302
          </p>
        </div>
        <!-- 右侧 -->
        <div>
          <ul>
            <li>泰摩商城</li>
            <li>服务中心</li>
            <li>寻求合作</li>
          </ul>
          <ul>
            <li>天猫泰摩咖啡器具</li>
            <li>全球经销网点</li>
            <li>海外代理</li>
          </ul>
          <ul>
            <li>京东泰摩咖啡器具</li>
            <li>下载中心</li>
            <li>国内经销</li>
          </ul>
          <ul>
            <li>天猫泰摩咖啡豆</li>
            <li>视频教程</li>
            <li>礼品定制</li>
          </ul>
          <ul>
            <li>京东泰摩咖啡豆</li>
            <li>售后政策</li>
            <li>咖啡馆协同成长</li>
          </ul>
        </div>
      </div>
      <!-- 尾部 -->
      <div class="d3">
        <div>
          <!-- <a href="#"><img src="https://www.timemore.com/wp-content/uploads/2020/01/组件-2-–-7.png" alt=""></a> -->
          <span
            >Copyright © 2012-2020 TIMEMORE COFFEE. All rights reserved.</span
          >
        </div>
        <div>
          <p>自己做咖啡 · 找泰摩</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.container-fluid {
  width: 100%;
  height: 496px;
  background: #5e5e5e none repeat center top;
  color: #fff;
  margin-top: 100px;
}
/* 图片链接 */
.d1 {
  width: 50%;
  height: 58px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 130px 300px;
}
.d1 span{
  margin-top: 50px;
}
ul {
  margin: 0px;
  display: flex;
  list-style: none;
}

a:hover {
  color: #000;
}

.d2 {
  width: 100%;
  display: flex;
  margin-top: -10px;
}
.p2 {
  margin-top: 10px;
}
.my_btn1 {
  width: 214px;
  height: 38px;
  color: #8b8d94;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  padding: 5px 15px 5px 15px;
  border-color: rgba(51, 51, 51, 0.11);
  background-color: #fdfdfd;
  border-radius: 2px;
  font-size: 18px;
  margin-top: 35px;
  margin-bottom: 25px;
}
.my_btn2 {
  width: 81px;
  height: 38px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-left-width: 0px;
  border-bottom-width: 0px;
  border-radius: 2px;
  background-color: #c7b083;
  margin-left: 1px;
  padding-top: 1px;
  font-weight: bold;
}
.my_btn2:hover {
  background-color: #000;
  color: #c7b083;
}
/* 左侧 */
.d2 > div:first-child {
  width: 625px;
  height: 220px;
  margin-left: 50px;
}

/* 右侧 */
.d2 > div:nth-child(2) > ul {
  margin-right: -370px;
}
.d2 > div:nth-child(2) > ul:first-child > li {
  font-size: 18px;
  font-weight: bold;
}
.d2 > div:nth-child(2) > ul > li {
  width: 150px;
  height: 40px;
}
ul > li > a {
  color: #fff;
  text-align: left;
}
/* 尾部 */
.d3 {
  display: flex;
  justify-content: space-around;
  margin-top: 45px;
}
.d3 > div:first-child {
  margin-right: 355px;
}

/*微信二维码*/
.weixin {
  position: relative;
}
.weixin::after {
  content: url(https://www.timemore.com/wp-content/uploads/2020/04/wechat.jpg);
  position: absolute;
  right: -35px;
  top: -160px;
  z-index: 99;
  width: 120px;
  height: 120px;
  border: 0px solid #0095ba;
  border-radius: 0px;
  transform-origin: top center;
  transform: scale(0);
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.weixin:hover::after {
  transform: scale(1);
  opacity: 1;
}
/*微博二维码*/
.weibo {
  position: relative;
}
.weibo::after {
  content: url(https://www.timemore.com/wp-content/uploads/2020/04/weibo.jpg);
  position: absolute;
  right: -35px;
  top: -160px;
  z-index: 99;
  width: 120px;
  height: 120px;
  border: 0px solid #0095ba;
  border-radius: 0px;
  transform-origin: top center;
  transform: scale(0);
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.weibo:hover::after {
  transform: scale(1);
  opacity: 1;
}
/*抖音二维码*/
.douyin {
  position: relative;
}
.douyin::after {
  content: url(https://www.timemore.com/wp-content/uploads/2020/04/douyin.jpg);
  position: absolute;
  right: -35px;
  top: -160px;
  z-index: 99;
  width: 120px;
  height: 120px;
  border: 0px solid #0095ba;
  border-radius: 0px;
  transform-origin: top center;
  transform: scale(0);
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.douyin:hover::after {
  transform: scale(1);
  opacity: 1;
} /*bili二维码*/
.bili {
  position: relative;
}
.bili::after {
  content: url(https://www.timemore.com/wp-content/uploads/2020/04/bilibli.jpg);
  position: absolute;
  right: -35px;
  top: -160px;
  z-index: 99;
  width: 120px;
  height: 120px;
  border: 0px solid #0095ba;
  border-radius: 0px;
  transform-origin: top center;
  transform: scale(0);
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.bili:hover::after {
  transform: scale(1);
  opacity: 1;
}
</style>