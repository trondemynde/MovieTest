import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import MovieDetailsPage from "./components/MovieDetailsPage.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/movie/:id", name: "MovieDetails", component: MovieDetailsPage, props: true },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;