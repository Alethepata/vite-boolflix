<script>
export default {
    name: 'Card',
    props: {
        original_title:String,
        title:String,
        original_language:String,
        vote_average:String,
    }

}
</script>

<template>
<div class="card w-25 text-center">
    <h1>{{ title }}</h1>
    <h3>{{ original_title }}</h3>
    <p>{{ original_language }}</p>
    <p>{{ vote_average }}</p>
</div>
</template>

<style>

</style>