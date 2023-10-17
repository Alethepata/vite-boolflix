<script>
export default {
    name: 'Card',
    props: {
        original_title:String,
        title:String,
        original_name:String,
        name:String,
        original_language:String,
        vote_average: String,
        backdrop_path:String
    },
    methods: {
        getFlag(img) {
            return new URL (`../../assets/flag/${img}.png`, import.meta.url).href
        },
        getUrlImg(img) {
             return `https://image.tmdb.org/t/p/w1280${img}`
  
        }       

    }

}
</script>

<template>
    <div class="col my-3">
        <div class="card text-center h-100 ">
            <h1>{{ title || name }}</h1>
            <h3>{{ original_title || original_name }}</h3>
            <img class="flag" :src="getFlag(original_language)" :alt="original_language">
            <p v-if="vote_average.toFixed(0) < 5">{{ vote_average.toFixed(0) }}</p>
            <p v-else>5</p>
            <img :src="getUrlImg(backdrop_path)" :alt="title || name">
        </div>
    </div>
</template>

<style lang="scss">

.flag{
    width: 50px;
}



</style>