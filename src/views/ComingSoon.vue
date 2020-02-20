<template>
    <div>
       <Movie :data="item" v-for="item of subjects" :key="item.id"></Movie>
    </div>
</template>

<script>
    export default {
        name:"ComingSoon",
        data(){
            return{
                subjects:[]
            }
        },
        mounted(){
            var url="https://douban-api.now.sh/v2/movie/coming_soon";
            this.axios.get(url).then(res=>{
               this.subjects=res.data.subjects;
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>