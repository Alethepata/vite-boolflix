<script>
import { store } from '../data/store'


export default {
    name: 'Main',

    data() {
        return {
            store
        }
    },
    methods: {
        getUrlImg(img) {
             return `https://image.tmdb.org/t/p/w342${img}`
  
        }
    
    }
}
</script>

<template>
        <div class="custom_container">        
            <h1 class=" text-light">Film</h1>
            <div class="d-flex">
                <div v-for="item in store.movieHome" :key="item.id" class="image">
                    <img class="object-fit-cover" :src="getUrlImg(item.poster_path)">
                </div>
            </div>
        </div>
        <div class="custom_container">        
            <h1 class=" text-light">Serie tv</h1>
            <div class="d-flex">
                <div v-for="item in store.tvHome" :key="item.id" class="image">
                    <img class="object-fit-cover" :src="getUrlImg(item.poster_path)">
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.custom_container{
    margin: 25px auto;
    width: 95%; 
    overflow-x: auto; 
}
img{
    width:200px;
    height: 300;
    margin-right: 10px;
}

</style>