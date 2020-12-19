<template>
<div>
	<div class="d1">
		<!-- 左侧图片  -->
		<div><img class="my_img" src="https://www.timemore.com/wp-content/uploads/2019/12/timemore-43.png" alt=""></div>
		<!-- 右侧ul文本 -->
		<div class="col_div">
			<ul class="con_ul">
				<li class="l1"><a href="#">泰摩产品</a>
					<div class="div">
						<h6>泰摩咖啡萃取体系</h6>
						<ul class="u1">
							<li>
								<p class="mo"></p>
							</li>
							<li>
								<p class="hu"></p>
							</li>
							<li>
								<p class="cheng"></p>
							</li>
							<li>
								<p class="bei"></p>
							</li>
						</ul>

						<h6>其他器具产品</h6>
						<br>
						<br>
						<hr>
						<ul class="u2">
							<li>锤目杯壶</li>
							<li>小U法压壶</li>
							<li>小i冰滴壶</li>
							<li>冰锤冷泡壶</li>
						</ul>
						<ul class="u3">
							<li>迷你咖啡便携包</li>
							<li>手冲咖啡礼盒</li>
							<li>杀手箱</li>
							<li>天目手冲套装</li>
						</ul>


					</div>

				</li>
				<li class="l2">
					<a href="#">了解泰摩</a>
					<ul class="drop">
						<li><a href="#">泰磨简介</a></li>
						<li><a href="#">泰磨动态</a></li>
						<li><a href="#">泰磨美学生活</a></li>
					</ul>
				</li>
				<li class="l2">
					<a href="#">服务中心</a>
					<ul class="drop">
						<li><a href="#">全球经销网点</a></li>
						<li><a href="#">视频教程</a></li>
					</ul>
				</li>
				<li class="l2">
					<a href="#">下载中心</a>
					<ul class="drop">
						<li><a href="#">APP下载</a></li>
						<li><a href="#">说明书下载</a></li>
						<li><a href="#">经销资料下载</a></li>
					</ul>
				</li>
				<li class="l2">
					<a href="#">联合合作</a>
					<ul class="drop">
						<li><a href="#">海外代理</a></li>
						<li><a href="#">国内经销</a></li>
						<li><a href="#">礼品定制</a></li>
						<li><a href="#">咖啡馆协同成长</a></li>
						<li><a href="#">研发/媒体合作</a></li>
					</ul>
				</li>
				<li><a href="#"><img src="shop_car.png" alt=""><span>商场</span></a></li>
				<li><a href="#"><img
							src="https://www.timemore.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
							alt=""><span>English</span></a></li>
				<table style="clear: both;"></table>
			</ul>
			<table style="clear: both;"></table>
		</div>
		</div>
	</div>
</template>
<style scoped>
*{
	list-style: none;
	padding: 0;
	margin: 0;
}
.d1{
	width: 100%;height: 80px;
	background-color: #202020;
	padding: 0px 20px; 
	display: flex;
	justify-content: space-between;
	text-align: center;align-items: center;
}
.d1>div:first-child{margin-left: 70px;}

li {padding: 0px 20px;text-decoration: none}
.d1>div:nth-child(2) a{color: white;text-decoration: none} 
.d1>div:nth-child(2) a:hover{
	color: #c7b083;
	text-decoration: none;
	display: block;
	
} 
/* 泰磨产品下拉菜单 */
.div{
	display: flex;
    align-items: center;
    flex-direction: column;
	margin: 0 auto;
	display: none;
}
.div>h6{
    margin-top: 50px;color: #fff;
}
.div>ul{
	list-style: none;
    display: flex;justify-content: space-around;
    color: #fff;
    margin-top: 40px;
}

.div>ul>li>p{
	width: 250px;height: 156px; 
}
.mo{
	background-image: url(https://www.timemore.com/wp-content/uploads/2020/02/icon-16.png);
    background-repeat: no-repeat;
     background-size: 95% 95%;
}
.hu{
	background-image: url(https://www.timemore.com/wp-content/uploads/2020/02/icon-13.png);
	background-repeat: no-repeat;
    background-size: 95% 95%;
}
.cheng{
	background-image: url(https://www.timemore.com/wp-content/uploads/2020/02/icon-11.png);
	background-repeat: no-repeat;
	background-size: 95% 95%;
}
.bei{
	background-image: url(https://www.timemore.com/wp-content/uploads/2020/02/icon-11.png);
	background-repeat: no-repeat;
	background-size: 95% 95%;
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
hr{
    width: 90%;display: block;margin: 0 auto;
}

.con_ul>.l1:hover .div{
    width: 1200px;
	height: 550px;
    background-color: #282828;
    border-color: #2a2a2a;
	 display: block;
	 position: absolute;
	margin: 80px -400px;
}
.u2,.u3{
	font-size: 16px;
}

















/* 产品下拉菜单 */
.col_div{
	width: 70%;
	margin-right: -110px;
}
.con_ul>li{
	float: left;
	height: 80px;
	line-height: 80px;
	position: relative;
}
.drop{
	display: none;
	width: 200px;
} 
.drop>li{
	height: 60px;
	line-height: 60px;
	background: #202020;
}
.con_ul>.l2:hover .drop{
	display: block;
	position: absolute;
	top: 80px;
	left: 0; 
}
</style>