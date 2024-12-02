<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

router-link {
  text-decoration: none;
  color: blue;
}
</style>
