<template>
  <div class="films">
    <div class="nav">
      <p> {{city}} <i class="iconfont icon-jiantou9"></i></p>
      <h3 :style="{ opacity: opacity }">电影</h3>
    </div>
    <router-link to="/city" class="position">
      <p>
        {{city}}<i class="iconfont icon-jiantou9"></i>
      </p>
    </router-link>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
   <div class="link">
        <div :class="opacity==1?'active':''">
        <router-link to="/films/nowPlaying">正在热映</router-link>
        <router-link to="/films/comingSoon">即将上映</router-link>
      </div>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Films",
  data() {
    return {
      images: [
        require("@/assets/images/01.jpg"),
        require("@/assets/images/02.jpg"),
        require("@/assets/images/03.jpg"),
        require("@/assets/images/04.jpg")
      ],
      opacity: 0.2
    };
  },
   computed:{
      city(){
          return this.$store.state.city;
      }
  },
  mounted() {
    window.addEventListener("scroll", this.handle);
    console.log(this.$store.state.city)
  },
  methods: {
    handle() {
      var height = document.documentElement.scrollTop;
      /* 达到300完全显示 */
      var opacity = height / 300;
      if (opacity > 1) {
        opacity = 1;
      }
      this.opacity = opacity;
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handle);
  }
};
</script>
<style lang="less" scoped>
.iconfont{
  font-size: 18px;
}
.link {
   margin-bottom: 20px;
   height:25px;
   line-height: 48px;
}
.link a {
  color: black;
  text-decoration: none;
  padding-bottom: 10px;
  margin-right: 40px;
  margin-left: 40px;
  &.router-link-exact-active {
    color: #ff5f16;
    border-bottom: 2px solid #ff5f16;
  }
}
.van-swipe-item img {
  width: 100%;
  height: 200px;
}
.position {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 101;
  padding:5px 20px 5px 5px;
  background: rgb(156, 155, 155);
  opacity: 0.8;
  border-radius: 30px;
  color: #fff;
  text-align: left;
}
.position img {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 7px;
  left: 40px;
}
.position p {
  margin: 0 0 0 10px;
  font-size: 13px;
}
.nav img {
  width: 30px;
  height: 30px;
  color: black;
  margin-top: 5px;
}
.nav {
  width: 100%;
  height: 40px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  border-bottom: 2px solid rgb(224, 224, 224);
  line-height: 40px;
}
p,h3 {
  margin: 0 0 0 30px;
}

.nav h3 {
  margin-left:90px;
  font-size: 20px;
}
.active{
  width: 100%;
  position: fixed;
  top:41px;
  left: 0;
  background: #fff;
  display: flex;
  padding-left: 60px;
}
</style>
