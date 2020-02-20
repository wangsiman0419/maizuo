<template>
  <div class="container">
    <div class="top">
      <div class="navs" :style="{ opacity: opacity }">
          <img @click="toggle" class="return" src="../assets/images/return.png"/>
          <h3 >{{ data.title }}</h3>
      </div>
      <img class="pic" :src="data.images.small" alt="" />
      <img @click="toggle" class="return" src="../assets/images/return.png"/>
    </div>
    <div class="content">
      <p class="title">{{ data.title }}<span class="type">2D</span></p>
      <p>{{ data.genres[0] }} | {{ data.genres[1] }}</p>
      <p>{{ data.pubdate }}上映</p>
      <p>美国 | {{ data.durations[0] }}</p>
      <p class="summary">{{ data.summary }}</p>
    </div>
    <div class="content">
      <p class="title">演职人员</p>
      <div class="picWall">
        <div class="wall-box" v-for="items of data.writers" :key="items.id">
          <img :src="items.avatars.small" alt="" />
          <p>{{ items.name }}</p>
          <p>导演</p>
        </div>
        <div class="wall-box" v-for="item of data.casts" :key="item.id">
          <img :src="item.avatars.small" alt="" />
          <p>{{ item.name }}</p>
          <p>{{ item.name_en }}</p>
        </div>
      </div>
    </div>
    <div class="content">
      <p class="title">剧照</p>
      <div class="picWalls">
        <div v-for="datas of data.clips" :key="datas.id">
          <img  :src="datas.small" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Film",
  data() {
    return {
      data: {},
      opacity: 0.5
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handle);
    var id = this.id;
    var url = "https://douban-api.uieee.com/v2/movie/subject/" + id;
    this.axios.get(url).then(res => {
      this.data = res.data;
    });
  },
  methods: {
    toggle() {
      this.$router.back();
    },
    handle() {
      var height = document.documentElement.scrollTop;
      /* 达到300完全显示 */
      var opacity = height / 300;
      if (opacity > 1) {
        opacity = 1;
      }
      this.opacity = opacity;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handle);
  }
};
</script>

<style scoped>
.picWalls{
  overflow-x: auto;
  overflow-y: hidden;
  display: grid;
  grid-template-columns: repeat(5, 150px);
  gap: 20px;
}
.picWalls .still-box img{
  width: 150px;
  height: 80px;
}
p,h3 {
  margin: 0 0 0 30px;
}
.navs h3 {
  margin-left: 150px;
  font-size: 22px;
}
.container{
  background: rgb(231, 230, 230);
}
.top {
  position: relative;
}
.return {
  height: 40px;
  width: 40px;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgb(228, 226, 226);
  opacity: 0.8;
  border-radius: 50%;
}
.return img{
  width: 40px;height: 40px;
}
.top .pic {
  width: 100%;
  height: 300px;
}
.type {
  display: inline-block;
  width: 20px;
  height: 15px;
  background: #d2d6dc;
  font-size: 10px;
  color: #fff;
  text-align: center;
  margin-left: 5px;
}
.content {
  padding-left: 15px;
  padding-right: 15px;
  text-align: left;
  color: #888;
  margin-bottom: 10px;
  background: #fff;
}
.title {
  color: black;
  font-size: 20px;
  padding-top: 30px;
  margin-top: 0;
}
p {
  margin: 10px 0;
}
.summary {
  margin-top: 15px;
  font-size: 13px;
  padding-bottom: 30px;
}
.navs {
  width: 100%;
  height: 50px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgb(224, 223, 223);
  line-height: 50px;
  display: flex;
}
h3 {
  margin: 0;
}
.picWall{
  overflow-x: auto;
  overflow-y: hidden;
  display: grid;
  grid-template-columns: repeat(8, 100px);
  gap: 10px;
  padding-bottom: 20px;
}
.wall-box img {
  width: 100px;
  height: 100px;
}
.wall-box p{
  font-size: 10px;
  margin: 0;
}
</style>
