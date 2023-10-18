<script>
import { store } from '../data/store';
import Card from './partials/Card.vue';

export default {
    name: 'CardsContainer',
    props: {
        titleType: String,
        type:String
    },
    components: {
        Card
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>

    <div class="container">
        <h1>{{ titleType }}</h1>
        <div class="row row-cols-4">
        <Card
        v-for="item in store[type]"
        :key="item.id"
        :original_title="item.original_title"
        :title="item.title"
        :original_name="item.original_name"
        :name="item.name"
        :original_language="item.original_language"
        :vote_average="item.vote_average"
        :poster_path="item.poster_path"
        :overview="item.overview"
        />            
        </div>

    </div>
</template>

<style lang="scss" scoped>

h1{
    color: white;
}

</style>