<template>
  <div class="box-city">
    <div class="nav-box">
      <div class="top">
        <router-link to="/films/nowPlaying">
          <img class="error" src="../assets/images/error.png" alt="" />
        </router-link>
        <p class="city">当前城市 -</p>
      </div>
      <div class="search">
        <van-search placeholder="输入城市名或拼音" v-model="value"  @click="Click" />
        <div :class="isShow?'cancel':'active'" @click="Click">
              <p v-show="isShow">取消</p>
        </div>
      </div>
    </div>
    <div class="wrap" v-show="!isShow">
        <div class="place">
      <div class="location">
        <p class="title">GPS定位你所在城市</p>
        <p class="tips tips-place">武汉</p>
      </div>
      <div class="location">
        <p class="title">热门城市</p>
        <div class="cities">
          <router-link
            :to="'/films/comingSoon'"
            class="tips"
            v-for="item of hotCities"
            :key="item.id"
            @click.native="handleClick(item.name)"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
    <van-index-bar>
      <div v-for="(data, index) of cities" :key="index">
        <van-index-anchor :index="index" />
        <router-link
          :to="'/films/comingSoon'"
          v-for="value of data"
          :key="value.id"
          @click.native="handleClick(value.name)"
        >
          <van-cell :title="value.name" />
        </router-link>
      </div>
    </van-index-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      hotCities: [],
      cities: {},
      name: "",
      value: "",
      isShow:false
    };
  },
  mounted() {
    this.axios.get("http://yapi.demo.qunar.com/mock/34774/city").then(res => {
      this.hotCities = res.data.data.hotCities;
      this.cities = res.data.data.cities;
    });
    console.log(this.$store.state.city);
    // this.axios.get("http://39.97.33.178/api/getLocation").then(res=>{
    //   this.name=res.data.nm;
    // })
  },
  computed: {
    city() {
      return this.$store.state.city;
    }
  },
  methods: {
    handleClick(city) {
      this.$store.dispatch("changeCity", city);
    },
    Click(){
      this.isShow=!this.isShow;
    }
  }
};
</script>


<style>
.wrap{
  margin-top: 100px;
}
.nav-box{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
}
p {
  margin: 0;
}
.box-city {
  background: rgb(236, 235, 235);
}
.icon {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 5px;
  left: 5px;
}
.search {
  height: 50px;
  width:100%;
  line-height: 30px;
  position: relative;
  padding: 10px 10px 0 30px;
  background: #f4f4f4;
}
.van-search {
  padding: 0;
  width: 75%;
}
.active{
   width: 60px;
  height: 34px;
  background: #fff;
  position: absolute;
  top: 10px;
  right: 52px;
}
.van-search__content {
  background: #fff;
}
.cancel {
  display: inline-block;
  width: 60px;
  height: 30px;
  position: absolute;
  top: 12px;
  right: 52px;
  font-size: 20px;
}
.error {
  width: 30px;
  height: 30px;
  padding-top: 10px;
}
.top {
  display: flex;
  width: 100%;
  height: 50px;
  background: #fff;
  line-height: 50px;
}
.city {
  font-size: 23px;
  margin-left: 100px;
}
.place {
  background: #fff;
}
.location {
  padding-left: 20px;
}
.location .title {
  color: #999;
  text-align: left;
  padding-top: 20px;
}
.cities {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.tips {
  display: inline-block;
  color: #999;
  width: 90px;
  height: 30px;
  line-height: 30px;
  margin: 15px 0;
  background: rgb(236, 235, 235);
}
.location .tips-place {
  margin-left: -276px;
}
.van-index-bar .van-index-bar__sidebar {
  position: fixed;
  top: 63%;
  right: 0;
}
.van-index-bar {
  text-align: left;
}
</style>
