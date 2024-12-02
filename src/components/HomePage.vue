<template>
    <div>
      <h1>Welcome to Vue Cinema</h1>
      <div class="row">
        <MovieList :movies="movies" />
      </div>
    </div>
  </template>
  
  <script>
  import movies from "../data/movies";
  import MovieList from "./MovieList.vue";

  export default {
    components: {
      MovieList
    },
    data() {
      return {
       movies
      };
    }
  };
  </script>
  
    <style scoped>  

    .row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    height: 200px;
    align-items: baseline;
    }
    </style>