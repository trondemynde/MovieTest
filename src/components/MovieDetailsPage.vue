<template>
  <div v-if="movie">
    <h1>{{ movie.title }}</h1>
    <p>Rating: {{ movie.vote_average }}</p>
    <p>Genre: <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }} </span></p>
    <p>{{ movie.overview }}</p>
  </div>
  <div v-else>
    <p>Movie not found. <router-link to="/">Go back to Home</router-link></p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ["id"],
  data() {
    return {
      movie: null,
      apiKey: '42faa6b077f3a3a3e8aa667eadcc8ee1'
    };
  },
  created() {
    this.fetchMovieDetails();
  },
  methods: {
    fetchMovieDetails() {
      const movieId = this.id;
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=en-US`;

      axios.get(url)
        .then(response => {
          this.movie = response.data;
        })
        .catch(error => {
          console.error('Error fetching movie details:', error);
        });
    }
  }
};
</script>

<style scoped>
h1 {
  color: darkblue;
}
</style>