<script>
import { store } from '../data/store';
export default {
    name: 'Header',
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <header>
        <div class="container text-end pt-5 d-flex justify-content-between ">
            <div class="logo">
                <img src="/logo/logo-boolflix.png" alt="">
            </div>
            <div class="search ">
                    <input 
                    class="align-middle" 
                    v-model="store.movieToSearch" 
                    @keyup.enter="$emit('startSearch')" 
                    type="text" 
                    placeholder="Cerca"
                    >

                    <button 
                    @click="$emit('startSearch')" 
                    class="btn btn-danger"
                    > 
                    Search
                    </button>            
            </div>
        </div>
    </header>
</template>

<style lang="scss">

header{
    height: 100px;
    .logo{
        img{
            width: 150px;
        }
    }
}

</style>