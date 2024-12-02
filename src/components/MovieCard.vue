<template>

  <div :class="['movie-card', { expanded: showDetails }]">
      <h3>{{ movie.title }}</h3>
        <p>Rating: {{ movie.rating }}</p>
        <p>Genre: {{ movie.genre }}</p>
        <router-link :to="`/movie/${movie.id}`">View Details</router-link>
        <button @click="toggleDetails">
          {{ showDetails ? "Hide" : "Show" }} Details
        </button>
      <p v-if="showDetails">{{ movie.synopsis }}</p>
  </div>
</template>
  
  <script>
  export default {
    props: ["movie"],
    data() {
      return {
        showDetails: false
      };
    },
    methods: {
      toggleDetails() {
        this.showDetails = !this.showDetails;
      }
    }
  };
  </script>
  
<style scoped>

    .movie-card {
    border: 1px solid #1f1717;
    padding: 10px;
    width: 300px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #847d8a;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    transition: width 0.3s ease;
    }
    .movie-card.expanded {
    width: 300px;
    } 
  
    button {
    padding: 10px 17px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #04AA6D;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
    }

    button:hover {background-color: #3e8e41}

    button:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
    }
</style>
  