<script>
import { store } from '../data/store'

export default {
    name: 'Jumbotron',
    data() {
        return {
            store
        }
    },
    methods: {
        getUrlImg(img) {
             return `https://image.tmdb.org/t/p/w1280${img}`
  
        }       
    }

}
</script>

<template>

    <div class="container size_container pt-3">
        <div class="slider position-relative d-flex ">
            <div v-for="(item,index) in store.popular" :key="index" class="items-wrapper position-relative ">
                <img class="w-100" v-if="store.counter==index" :src="getUrlImg(item.backdrop_path)">
                <h5 class="w-25" v-if="store.counter==index">{{ item.title }}</h5>

            </div>

            <div 
            v-if="store.counter > 0" 
            class="arrow left  rounded-circle" 
            @click="store.counter--"
            >
                <i class="fa-solid fa-chevron-left rounded-circle fs-5"></i>

            </div>

            <div 
            v-if="store.counter < store.popular.length - 1" 
            class="arrow right " 
            @click="store.counter++"
            >

                <i class="fa-solid fa-chevron-right rounded-circle fs-5"></i>

            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>
.size_container{
    height: calc(100% - 100px);
    width: 40%;
}
h5{
    position: absolute;
    top:0;
    background-color: rgba(255, 255, 255, 0.5);
    text-align: center;
}
.arrow{
    position: absolute;
    bottom: 50%;
    transform: translate(-50%);
    i{
        background-color: rgba(255, 255, 255, 0.5);
        width: 40px;
        height: 40px;  
        text-align: center;
        line-height: 40px;
    }

}
.arrow.left{
    left: 40px;
}
.arrow.right{
    right: 20px;
}

</style>