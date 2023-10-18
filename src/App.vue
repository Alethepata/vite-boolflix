<script>

import { store } from './data/store';
import axios from 'axios';

import Header from './components/Header.vue';
import CardsContainer from './components/CardsContainer.vue';
import Jumbotron from './components/Jumbotron.vue';


export default {
  name: 'App',
  components: {
    Header,
    CardsContainer,
    Jumbotron
    
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
          if (type == 'search/movie') store.movie = res.data.results
          else store.tv = res.data.results

      })
    },
    types() {
      this.getApi('search/movie'),
      this.getApi('search/tv')
    },
    getPopular() {
      axios.get(store.apiUrl + 'movie/popular', {
        params: {
          api_key: 'b01a5b39baec6aab0a375381ad7bd179',
          language: 'en-US',
          page:1
        }
      })
        .then(res => {
        store.popular = res.data.results
      })
    }
  },
  mounted() {
    this.getPopular()
  }

}
</script>

<template>
  <Header @startSearch="types"/>
  <Jumbotron v-if="store.movie.length == 0 || store.tv.length == 0 "/>
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
