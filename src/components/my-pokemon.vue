<template>
    <div>
        <h1>Pokemons</h1>
        <button @click="getPokemon">Get Pokemon</button>
        <div v-for="(poke, idx) in pokemons">
            <h4 :key="idx"> {{ poke.name as  String}}</h4>
        </div>
    </div>
</template>

<script setup lang="ts">
    import axios from "axios";
    import {ref} from "vue";
    const pokemons = ref([]);
    async function getPokemon () {
       const res =  await axios.get("https://pokeapi.co/api/v2/pokemon");
       const data = res.data;
       console.log(data);
       pokemons.value = data.results;
    };

</script>

<style scoped>

</style>