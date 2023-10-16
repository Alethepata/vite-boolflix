import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=b01a5b39baec6aab0a375381ad7bd179',
    moviesList: [],
    movieToSearch:''
})