<template>
    <div class="box" @click="handleClick(data.id)">
        <img class="pic" :src="data.images.small" alt="" />
        <div class="present">
          <p class="title">{{ data.title }}<span class="type">3D</span></p>
          <div class="content">
            <p>
              主演:<span v-for="item of data.casts" :key="item.name">
                {{ item.name }}
              </span>
            </p>
            <p>美国|{{ data.durations[0] }}</p>
          </div>
        </div>
        <div class="tickets">
          <slot name="ticket"></slot>
        </div>
      </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods:{
    handleClick(id){
      this.$router.push(`/film?id=${id}`)
    }
  }
  
};
</script>

<style scoped>
.pic {
  width: 80px;
  height: 100px;
  padding-left: 10px;
}
.box {
  display: flex;
  border-top: 1px solid rgb(233, 230, 230);
  padding: 10px 0;
}
p {
  margin: 0;
}
.content {
  color: #919294;
  margin-top: 20px;
  font-size: 13px;
}
.title {
  margin-top: 10px;
  color: black;
}
.present {
  width: 250px;
  padding-left: 10px;
  text-align: left;
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
.tickets {
  height: 50px;
  width: 50px;
  margin-top: 30px;
}
.tickets button {
  background: #fff;
  color: #ff5f16;
  border: 1px solid #ff5f16;
  font-size: 15px;
  margin-left: 5px;
}
</style>
