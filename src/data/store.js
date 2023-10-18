import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    movie: [],
    tv: [],
    popular: [],
    movieHome:[],
    tvHome:[],
    movieToSearch: '',
    counter: 0,
    visible:true
})