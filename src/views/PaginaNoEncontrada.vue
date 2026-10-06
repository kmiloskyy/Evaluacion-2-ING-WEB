<template>
  <div class="pagina-404-container">
    <div class="error-caja">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la ruta a la que intentas acceder no existe en nuestra plataforma.</p>
      
      <RouterLink to="/">
        <button class="btn-volver">Ir a la página de Inicio</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.pagina-404-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.error-caja {
  background-color: #f8d7da; 
  color: #721c24; 
  padding: 50px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #f5c6cb;
  max-width: 500px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.error-caja h1 {
  font-size: 5rem;
  margin: 0 0 10px 0;
  color: #721c24;
}

.error-caja h2 {
  color: #721c24;
  margin-top: 0;
}

.btn-volver {
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
}

.btn-volver:hover {
  background-color: #0056b3;
}
</style>