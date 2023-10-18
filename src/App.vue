<script>

import { store } from './data/store';
import axios from 'axios';

import Header from './components/Header.vue';
import CardsContainer from './components/CardsContainer.vue';
import Jumbotron from './components/Jumbotron.vue';
import Main from './components/Main.vue';



export default {
  name: 'App',
  components: {
    Header,
    CardsContainer,
    Jumbotron,
    Main
    
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
          query: store.movieToSearch,
          language: 'it-IT'
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
      store.visible = false
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
    },
    getHome(type) {
      axios.get(store.apiUrl + `trending/${type}/day`, {
        params: {
          api_key: 'b01a5b39baec6aab0a375381ad7bd179',
        }
      })
        .then(res => {
          if (type == 'movie') store.movieHome = res.data.results
          else store.tvHome = res.data.results
          

      })
    }
  },
  mounted() {
    this.getPopular(),
    this.getHome('movie')
    this.getHome('tv')
  }

}
</script>

<template>
  <Header @startSearch="types"/>
  <Jumbotron v-if="store.visible == true || store.visible == true "/>
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
  <Main/>
</template>

<style lang="scss">

@use './scss/main.scss'

</style>
