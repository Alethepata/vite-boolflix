<script>
import { store } from '../data/store';
export default {
    name: 'SearchBar',
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <div class="container text-end my-5">
        <input v-model="store.movieToSearch" @keyup.enter="$emit('startSearch')" type="text" placeholder="Cerca">
        <button @click="$emit('startSearch')" class="btn btn-info ms-3"> Search</button>
    </div>
</template>

<style>

</style>