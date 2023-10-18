import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    movie: [],
    tv: [],
    popular:[],
    movieToSearch: '',
    counter: 0,
    visible:true
})