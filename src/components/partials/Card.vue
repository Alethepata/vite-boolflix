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
        poster_path: String,
        overview: String
    },
    methods: {
        getFlag(img) {
            return new URL (`../../assets/flag/${img}.png`, import.meta.url).href
        },
        getUrlImg(img) {
             return `https://image.tmdb.org/t/p/w342${img}`
  
        }
    
    },
    computed: {
        getVote() {
            return Math.ceil(this.vote_average / 2)
        }  
    }

}
</script>

<template>
    <div class="col my-3">

        <div class="card">        
            <div class="card-img w-100 h-100">            
                <img v-if="poster_path" class="w-100 h-100 object-fit-cover" :src="getUrlImg(poster_path)" :alt="title || name">
                <img v-else class="w-100 h-100 object-fit-cover" src="https://www.wpoven.com/blog/wp-content/uploads/2022/09/error-404.png" :alt="title || name">
            </div>
            <div class="card-text text-light">
                <h3 class="text-center">{{ title || name }}</h3>
                <h5 class="text-center my-2">{{ original_title || original_name }}</h5>

                <img class="flag" :src="getFlag(original_language)" :alt="original_language">


                <div class="stars my-2">
                    <i 
                    v-for="i in 5" 
                    :key="i" 
                    class="fa-star" 
                    :class="[{'fa-solid' : i <= getVote}, {'fa-regular' : i > getVote}]">
                     </i>
                </div>
                
                <div class="description">
                    <p>{{ overview }}</p>
                </div>



            </div>

        </div>
    </div>                

</template>

<style lang="scss">

.col{

    .card{    
        height: 100%;
        position: relative;
        border-color: black;

        &:hover .card-text{
            display: block;
        }
        &:hover .card-img img{
            filter: brightness(0.3);
        }
        .card-text{
            display: none;
            position: absolute;
            height:100% ;
            padding: 20px;
            overflow-y: auto;
        }
        .flag{
        width: 50px;
        }
    }
}

</style>