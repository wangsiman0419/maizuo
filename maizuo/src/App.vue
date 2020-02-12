<template>
  <div id="app">
    <transition>
       <router-view to="/"></router-view>
    </transition>
    <van-loading v-if="this.$store.state.isLoading" 
    size="24px" type="spinner" color="#1989fa">加载中...</van-loading>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 1000px;
}

#nav {
   padding:10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.v-leave-active,.v-enter-active{
    transition:opacity 1s;
    transform: translateY(20px);
}
.v-leave-to,.v-enter{
    opacity:0;
    transform: translateY(-30px);
}
</style>
