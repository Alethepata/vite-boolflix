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
    getApi() {
      axios.get(store.apiUrl, {
        params: {
          query:store.movieToSearch
        }
      })
        .then(res => {
        store.moviesList = res.data.results
      })
    }
  },
  mounted() {
    this.getApi()
  }

}
</script>

<template>
  <SearchBar @startSearch="getApi"/>
  <CardsContainer/>
</template>

<style lang="scss">

@use './scss/main.scss'

</style>
