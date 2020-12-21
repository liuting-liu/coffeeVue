<template>
  <div>
	<!-- <img src="http://www.timemore.com/wp-content/uploads/2020/10/%E7%BB%84-566_%E5%89%AF%E6%9C%AC.png" alt="4" />
	<img src="http://www.timemore.com/wp-content/uploads/2020/04/slim_px.png" alt="1" />
	<img src="http://www.timemore.com/wp-content/uploads/2020/04/slim_px.png" alt="2" />
	<img src="http://www.timemore.com/wp-content/uploads/2020/07/19d212835ebf3a93eb40338e37026b8.png" alt="3" />
 -->
  <!-- <iframe src="header.html" frameborder="0" class="my_header"></iframe> -->
	<div class="bigdiv">
		<!-- 上部轮播图图片 -->
		<div class="d1">
			<img
				src="http://www.timemore.com/wp-content/uploads/2020/07/19d212835ebf3a93eb40338e37026b8.png" alt="3" />
		</div>
		<!-- 泰摩咖啡萃取体系 -->
		<div class="d2" >
			<h1>泰摩手冲咖啡萃取体系四大核心</h1>
			<ul class="u1">
				<li>
					<!-- <router-link to="./Modouji.vue"><p class="mo"></p></router-link> -->
					<p class="mo">
					<div>{{list.name}}</div>
				</li>
				<li>
					<!-- <router-link to="/Shouchonghu.vue"><p class="hu"></p></router-link> -->
					<p class="hu"></p>
					<div >{{list.name}}</div>
				</li>
				<li>
					<p class="cheng"></p>
					<div>{{list.name}}</div>
				</li>
				<li>
					<p class="bei"></p>
					<div>{{list.name}}</div>
				</li>
			</ul>

		</div>
		<!-- 下部图片 -->
		<div class="d3"><img src="https://www.timemore.com/wp-content/uploads/2020/02/ww.jpg" alt=""></div>
		<!-- 下部文本 -->
		<div class="d4">
			<p class="p1">MORE TIME FOR COFFEE LIFE</p>
			<p class="p2">
				泰摩咖啡是专注于咖啡器具的原创设计品牌<br>
				以“专业+美学”的设计理念<br>
				打造有价值的咖啡器具产品<br>
				旨在让人们享受自己制作的慢生活时光
			</p>
			<button class="btn1">关于泰摩</button>
		</div>
		<!-- 下部图片   美学3中心 -->
		<div class="d5">
			<img src="https://www.timemore.com/wp-content/uploads/2020/04/组-543-2.png" alt="">
			<span>美学中心</span>
		</div>
		<div class="d6"><img src="https://www.timemore.com/wp-content/uploads/2019/12/timemore-4.jpg" alt=""></div>
		<!-- 视频中心 -->
		<div class="d7">
			<a class="a1" href="/fuwuzhongxin/chanpinjiaocheng/"></a>
			<span>视频中心</span>
		</div>
		<!-- 视频中心下部图片 -->
		<div class="d8">
			<!-- <a href="https://www.timemore.com/wp-content/uploads/2019/12/timemore.mp4"> -->
				<img src="https://www.timemore.com/wp-content/uploads/2019/12/timemore-10-1000x498.jpg" alt="">
		</div>
		<!-- 下载中心 -->
		<div class="d9">
			<div class="span1">↓</div>
			<span class="span2">下载中心</span>
		</div>
		<!-- 下载中心下部图片 -->
		<div class="d10">
			<img src="https://www.timemore.com/wp-content/uploads/2019/12/蒙版组-2@2x.jpg" alt="">
		</div>
		<!-- 泰磨动态 -->
		<div class="d11">
			<div class="span1">→</div>
			<span class="span2">泰磨动态</span>
		</div>
		<!-- 近期文章 -->
		<div class="d12">
			<h3 class="h3">近期文章</h3>
			<ul>
				<li><a href="#">泰摩咖啡2020年中新品发布会</a></li>
				<li><a href="#">2018年12月Hotelex广州展-全明星签名款手冲壶get</a></li>
				<li><a href="#">2018年12月8日 Peets咖啡分享会</a></li>
			</ul>
		</div>
		<!-- 近期文章下部图片 -->
		<div class="d13">
			<img src="https://www.timemore.com/wp-content/uploads/2020/02/201904@2x.jpg" alt="">
		</div>
		<table></table>
		<!-- 泰摩全球手冲咖啡方案服务网点 -->
		<div class="row no-gutters">
			<div class="col-10">
				<p>泰摩咖啡在全球为您提供手冲咖啡整体解决方案</p>
			</div>
			<div class="col-2">
				<button>网点/体检点</button>
			</div>
			<div>
				<p>公司总部：中国-上海</p>
				<p>中国网点：湖北武汉（加油）、北京、 福建、广东、新疆、云南、香港、台湾地区</p>
				<p>全球网点：泰国、日本、菲律宾、韩国、新加坡、老挝、印尼、马来西亚、越南、科威特、阿联酋、卡塔尔、沙特、 荷兰、乌克兰、俄罗斯、西班牙、捷克、法国
					、北欧五国、南非、美国、加拿大、澳大利亚、新西兰、南美（排名不分先后）</p>
			</div>
		</div>
		<div class="d15">
			<img src="https://www.timemore.com/wp-content/uploads/2020/02/%E4%BA%A7%E5%93%81%E5%A4%96%E5%BD%A2-03.png"
				alt="">
			<img class="my_img2" src="https://www.timemore.com/wp-content/uploads/2020/02/%E7%BB%84-466.png" alt="">
		</div>
	</div>
	<my-footer></my-footer>
  </div>
</template>
<script>
import MyFooter from '../components/MyFooter.vue'
export default {
  components: { MyFooter },
	data(){
		return{
			list:[{
				index:1,name:"磨豆机",
			},{
				index:2,name:"手冲壶",
			},{
				index:3,name:'黑镜电子秤',
			},{
				index:4,name:"冰瞳滤杯",
			}]
		}
	},
	methods:{
		leaver(index){
		},
		enters(index){
		}
	}
}
</script>
<style scoped>
/* .my_header{width: 100%;} */

.bigdiv{
	background-color: #fff;
}
/* 轮播图 */
.d1>img{
	width: 100%;
	height: 619px;
}
/* 泰摩咖啡萃取体系 */
.d2{
	width: 100%;height: 565px;
	background-color: #202020;
	padding: 50px 10px 40px;
}
.d2>h1{
  margin-top: 60px;
  margin-left: 75px;
  color: #fff;
}
.d2>ul{
	list-style: none;
	display: flex;justify-content: center;
	color: #fff;
	margin-top: 120px;
}
.d2>ul>li{position: relative;}
.d2>ul>li>img{
	width: 315px;height: 206px;
	margin-top: 150px;
	border: 0;
	display: block;
	margin: 0 10px;
}
/* 鼠标移入图片显示文本 */
.d2>ul>li>div{
	width: 70px;
	height: 20px;
	line-height: 20px;
	border: 1px solid #ddd;
	color: #999;
	background: #fff;
	position: absolute;
	top:0;
	left: 0;
	z-index: 666;
	display: none;
	font-size: 12px;
}
.d2>ul>li>p{
	width: 315px;height: 206px; margin-top: 150px; margin: 0 10px;
}
.mo{
	background-image: url(https://www.timemore.com/wp-content/uploads/2020/02/icon-16.png);
	/* height: 100%; */
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.hu{
	background-image: url(https://www.timemore.com/wp-content/uploads/2020/02/icon-13.png);
	background-repeat: no-repeat;
    background-size: 100% 100%;
}
.cheng{
	background-image: url(https://www.timemore.com/wp-content/uploads/2020/02/icon-11.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.bei{
	background-image: url(https://www.timemore.com/wp-content/uploads/2020/02/icon-11.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
/* 鼠标移入事件 */
 .mo:hover{
	border: 0;
	/* 图片1 */
	background-image: url(https://www.timemore.com/wp-content/uploads/2020/04/磨-小图-1.jpg) !important;
}
.hu:hover{
	border: 0;
	/* 图片2 */
	background-image: url(https://www.timemore.com/wp-content/uploads/2020/02/tu-6.jpg); 
}
.cheng:hover{
	border: 0;
	/* 图片3 */
	background-image: url(https://www.timemore.com/wp-content/uploads/2020/02/tu-4.jpg);
}
.bei:hover{
	border: 0;
	/* 图片3 */
    background-image: url(https://www.timemore.com/wp-content/uploads/2020/02/tu-2.jpg);
}


/* 下部图片 */
.d3{
	display: flex;
	align-items: center;
	justify-content: center;
}
/* 图片下部文本 */
.d4{
	width: 100%;
	height: 337px;
	background-color: #f2f2f2;
}
.d4>.p1{
	font-size: 20px; color: #5e5e5e;
	text-align: center;
	padding-top: 50px;
}
.d4>.p2{
	color: #5e5e5e;
	margin-left: 30px;
    line-height: 30px;
}
.d4>.btn1{
	display: block;
	margin: 50px auto;
}
/* 美学中心 */
.d5{
	width: 85%;height: 100px;
	background-color: #202020;
	margin: 0px auto;
	text-align: center;
	line-height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
}
.d5>img{width: 40px;height: 40px;display: inline-block;padding-left: 50px;}
.d5>span{padding-right: 80px;}
.d6>img{
	width: 85%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px auto;	
}
/* 视频中心 */
.d7{
	width: 85%;height: 120px;
	background-color: #202020;
	margin: 0px auto;
	text-align: center;
	line-height: 120px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	margin-top: 20px;
}
.d7>.a1{
	width: 25px;height: 25px;background-color: #efefef;
	border-radius: 3px;
	margin-left: 100px;
}
.d7>span{padding-right: 100px;}
/* 视频中心下部视频图片 */
.d8{
	display: flex;
	justify-content: center;
	align-items: center;
}
/* 下载中心    泰磨动态*/
.d9,.d11{
		width: 85%;height: 130px;
		background-color: #202020;
		margin: 0px auto;
		text-align: center;
		line-height: 130px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		margin-top: 20px;
}
.d9>.span1,.d11>.span1{padding-left: 100px;}
.d9>.span2,.d11>.span2{padding-right: 100px;}
/* 下载中心下部图片 */
.d10>img{
	width: 85%;margin: 0px 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px auto;
}
.d11{
	margin-bottom: -19px;
}
/* 近期文章 */
.d12{
	width: 85%;height: 200px;
	background-color: #202020;
	margin: 0px 30px;
	color: #fff;
	margin: 0px auto;
}
.h3{
    font: normal 20px / 30px "Arial", Helvetica, Arial, Verdana, sans-serif;
    text-transform: none;
	color: #5e5e5e;
	padding-left: 30px;
	padding-top: 5px;
	text-decoration: none;
}
.d12>ul{list-style: none;margin-top: -25px;}
.d12>ul>li{padding-top: 15px;}
.d12>ul>li>a{
	color: #fff;
	text-decoration: none;
	color: #ffffff!important;
    border-bottom: 1px solid white;
	padding-right: 20px;
}
/* 近期文章下部图片 */
.d13{
	display: flex;
	justify-content: center;
	align-items: center;
}
/* 地址图片位置 */
.d15{
	margin-top: 50px;
}
/* 泰摩全球手冲咖啡方案服务网点 */
.row{
	width: 100%;height: 230px;
	margin-top: 50px;
	margin-left: 20px; 
	color: #5E5E5E;
}

.col-10 p{
	font-size: 32px;
	color: #5E5E5E;
	padding-bottom: 10px;
}
/* 关于泰磨 button */
.col-2 button,.btn1{
	width: 148px;height: 48px;
	background: rgb(242, 242, 242);
	border-radius: 50px;
  border-width: 1px;
  border-color: #c7b083;
  border-style: solid;
  background: #c7b083;
  color: #ffffff;
  border: 0;outline: 0;
	transition: 1s;
}
.col-2 button:hover,.btn1:hover{
	outline: 0;
	border: 0;
	background: rgb(240, 240, 240);
	transform: scale(1);
}

</style>