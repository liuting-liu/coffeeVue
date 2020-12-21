<template>
  <section class="body">
    >
    <section class="wrap">
      <swiper
        :options="swiperOption"
        class="swiper-wrap"
        ref="mySwiper"
        v-if="banner.length != 0"
      >
        <swiper-slide v-for="(item, index) in banner" :key="index">
          <!-- //点击图片跳到哪里,这里跳到home页面 item举例：{img:http://www.***.com/home/images/index_img02.png,url:/home} -->
          <img :src="item.img" alt="" @click="skip_out_page(item.url)" />
        </swiper-slide>
        <!-- 常见的小圆点 -->
        <div
          class="swiper-pagination"
          v-for="(item, index) in banner"
          :key="index"
          slot="pagination"
        ></div>
      </swiper>
    </section>
  </section>
</template>
 <script>
export default {
  data() {
    const that = this;
    return {
      imgIndex: 1,
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环,而不是每次都突然回到第一个
        loop: true,
        //设定初始化时slide的索引，加载页面时显示的第几个，从0开始
        initialSlide: 0,
        //自动播放
        autoplay: {
          /*切换轮播图片的时间，即上次切换成功后到再次需要切换的时间*/
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 false触摸后不再点击继续轮播，true触摸后不再点击不轮播，停在最后一次页面*/
          disableOnInteraction: false,
        },
        //滑动速度，时间单位，越小越快，与上面 delay 区别，speed是完成切换所需时间，delay是切换成功后停留多长时间再切换
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function () {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex = this.realIndex - 1;
          },
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        },
      },
      banner: [],
    };
  },
  methods: {
    skip_out_page(v) {
      window.location.href = v;
    },
    get_data() {
      this.$http.get("test").then((res) => {
        if (res.data.code == "0000") {
          this.banner = res.data.img_info;
        }
      });
    },
  },
  mounted() {
    this.get_data();
  },
};
</script>
<style lang="scss">
 .swiper-wrap{
     width: 100%;
     height: 210px;
     background-color: #fff;
 }
 .swiper-pagination{
     background: #fff;
 }
 .swiper-pagination-bullet{
     background: #ccc;
     width: 10px;
     height: 10px;
     opacity: 1;
 }
 .swiper-pagination-bullet-active{
     background: #00C293;
 }
</style>