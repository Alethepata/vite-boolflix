<script>
import { store } from '../data/store';
import Card from './partials/Card.vue';

export default {
    name: 'CardsContainer',
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
    <div class="container d-flex flex-wrap">
        <Card
        v-for="movie in store.moviesList"
        :key="movie.id"
        :original_title="movie.original_title"
        :title="movie.title"
        :original_language="movie.original_language"
        :vote_average="movie.vote_average"
        />
    </div>
</template>

<style>

</style>