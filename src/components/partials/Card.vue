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
        poster_path:String
    },
    methods: {
        getFlag(img) {
            return new URL (`../../assets/flag/${img}.png`, import.meta.url).href
        },
        getUrlImg(img) {
             return `https://image.tmdb.org/t/p/w342${img}`
  
        }       

    }

}
</script>

<template>
    <div class="col my-3">

        <div class="card">        
            <div class="card-img w-100 h-100">            
                <img class="w-100 h-100 object-fit-cover" :src="getUrlImg(poster_path)" :alt="title || name">
            </div>
            <div class="card-text text-center text-light p-3">
                <h3>{{ title || name }}</h3>
                <h5 class="my-5">{{ original_title || original_name }}</h5>
                <img class="flag mt-4" :src="getFlag(original_language)" :alt="original_language">
                <p v-if="vote_average.toFixed(0) < 5">{{ vote_average.toFixed(0) }}</p>
                <p v-else>5</p>
            </div>

        </div>
    </div>
</template>

<style lang="scss">

.col{

    .card{    
        height: 500px;
        position: relative;

        &:hover .card-text{
            display: block;
        }
        &:hover .card-img img{
            filter: brightness(0.3);
        }
        .card-text{
            display: none;
            position: absolute;
            left:50%;
            transform: translate(-50%)
        }
        .flag{
        width: 50px;
        }
    }
}

</style>