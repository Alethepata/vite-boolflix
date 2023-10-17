<script>
export default {
    name: 'Card',
    props: {
        original_title:String,
        title:String,
        original_language:String,
        vote_average:String,
    },
    methods: {
        getFlag(img) {
            return new URL (`../../assets/flag/${img}.png`, import.meta.url).href
        }
    }

}
</script>

<template>
<div class="card w-25 text-center">
    <h1>{{ title }}</h1>
    <h3>{{ original_title }}</h3>
    <img :src="getFlag(original_language)" :alt="original_language">
    <p>{{ vote_average }}</p>
</div>
</template>

<style lang="scss">

img{
    width: 50px;
}

</style>