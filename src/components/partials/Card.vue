<script>
export default {
    name: 'Card',
    props: {
        original_title:String,
        title:String,
        original_name:String,
        name:String,
        original_language:String,
        vote_average: String
    },
    methods: {
        getFlag(img) {
            return new URL (`../../assets/flag/${img}.png`, import.meta.url).href
        }
    }

}
</script>

<template>
    <div class="col">
        <div class="card text-center h-100">
            <h1>{{ title || name }}</h1>
            <h3>{{ original_title || original_name }}</h3>
            <img :src="getFlag(original_language)" :alt="original_language">
            <p>{{ vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss">

img{
    width: 50px;
}

</style>