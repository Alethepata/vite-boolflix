<script>

import { store } from './data/store';
import axios from 'axios';

import SearchBar from './components/SearchBar.vue';
import CardsContainer from './components/CardsContainer.vue';

export default {
  name: 'App',
  components: {

    SearchBar,
    CardsContainer
    
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApi(type) {
      axios.get(store.apiUrl+ type, {
        params: {
          api_key: 'b01a5b39baec6aab0a375381ad7bd179',
          query:store.movieToSearch
        }
      })
        .then(res => {
          if (type == 'movie') store.movie = res.data.results
          else store.tv = res.data.results

      })
    },
    types() {
      this.getApi('movie'),
      this.getApi('tv')
    }
  }

}
</script>

<template>
  <SearchBar @startSearch="types"/>
  <CardsContainer
  v-if="store.movie.length > 0"
  titleType="Film" 
  type="movie"
  />
  <CardsContainer 
  v-if="store.tv.length > 0"
  titleType="Serie tv" 
  type="tv"
  />
</template>

<style lang="scss">

@use './scss/main.scss'

</style>
