<template>
  <div id="app-container">
    <nav class="menu">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/servicios">Servicios</RouterLink>
      <RouterLink to="/favoritos">Favoritos</RouterLink>
      <RouterLink to="/contacto">Contacto</RouterLink>
    </nav>

    <main class="contenido">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
#app-container {
  font-family: Arial, sans-serif;
  color: #333;
}
.menu {
  background-color: #f8f9fa;
  padding: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  gap: 15px;
  justify-content: center;
}
.menu a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}
.menu a.router-link-active {
  color: #ff9800; 
}
.contenido {
  padding: 0 20px;
}
</style>