import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/',
    popularUrl: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    movie: [],
    tv: [],
    popular:[],
    movieToSearch: '',
    counter:0
})