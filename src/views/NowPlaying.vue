<template>
    <div>
       <Movie :data="item" v-for="item of subjects" :key="item.id">
           <button slot="ticket">购票</button>
       </Movie>
    </div>
</template>

<script>
    export default {
        name:"NowPlaying",
        data(){
            return{
                subjects:[]
            }
        },
        mounted(){
            var url="https://douban-api.now.sh/v2/movie/in_theaters";
            this.axios.get(url).then(res=>{
               this.subjects=res.data.subjects;
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>