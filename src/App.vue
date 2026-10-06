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

<style>
body {
  background-color: #121212; 
  color: #f1f1f1;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.menu {
  background-color: #1e1e1e;
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  box-sizing: border-box;
}

.menu a {
  text-decoration: none;
  color: #a0a0a0;
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.3s, border-bottom 0.3s;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
}

.menu a:hover {
  color: #64b5f6;
}

.menu a.router-link-active {
  color: #64b5f6;
  border-bottom: 2px solid #64b5f6;
}

.contenido {
  flex: 1;
  padding: 40px 20px;
  width: 100%;
  max-width: 1400px; 
  margin: 0 auto;
  box-sizing: border-box;
}
</style>