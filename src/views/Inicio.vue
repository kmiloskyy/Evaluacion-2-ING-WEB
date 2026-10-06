<template>
  <div class="inicio-container">
    <header class="hero-section">
      <h1>Servicios Profesionales de Ñuble</h1>
      <p class="subtitulo">
        Encuentra a los mejores profesionales de la región en un solo lugar.
      </p>
      
      <RouterLink to="/servicios" class="btn-explorar">
        Explorar Catálogo de Servicios
      </RouterLink>
    </header>

    <section class="info-section">
      <div class="info-card">
        <h3>¿Qué es esta plataforma?</h3>
        <p>
          Hemos centralizado la información de los distintos servicios profesionales 
          disponibles en la Región de Ñuble. Aquí podrás buscar, filtrar por categorías, 
          revisar detalles y guardar tus opciones favoritas para contactarlos fácilmente.
        </p>
      </div>

      <div class="info-card">
        <h3>Nuestras Categorías</h3>
        <ul class="categorias-lista">
          <li>🔧 Reparaciones y Mantención</li>
          <li>💼 Asesoría Profesional</li>
          <li>💻 Servicios Tecnológicos</li>
          <li>📚 Apoyo Educativo</li>
        </ul>
      </div>
    </section>
    <footer class="footer-proyecto">
      <p>Desarrollado para la Evaluación N.º 2 de Ingeniería Web - 2026</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.inicio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f1f1f1;
}

.hero-section {
  text-align: center;
  padding: 60px 20px;
  background-color: #1e1e1e;
  border-radius: 12px;
  border: 1px solid #333;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 40px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.hero-section h1 {
  font-size: 2.8rem;
  color: #64b5f6;
  margin-bottom: 15px;
  margin-top: 0;
}

.subtitulo {
  font-size: 1.3rem;
  color: #a0a0a0;
  margin-bottom: 35px;
}

.btn-explorar {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-explorar:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}

.info-section {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  margin-bottom: 50px;
}

.info-card {
  background-color: #242424;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #444;
  flex: 1;
  min-width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.info-card h3 {
  color: #64b5f6;
  border-bottom: 1px solid #444;
  padding-bottom: 10px;
  margin-top: 0;
  font-size: 1.4rem;
}

.info-card p {
  line-height: 1.6;
  font-size: 1.05rem;
  color: #dcdcdc;
}

.categorias-lista {
  list-style: none;
  padding: 0;
  margin: 0;
}

.categorias-lista li {
  padding: 10px 0;
  font-size: 1.1rem;
  color: #dcdcdc;
  border-bottom: 1px solid #333;
}

.categorias-lista li:last-child {
  border-bottom: none;
}

.footer-proyecto {
  margin-top: auto;
  padding: 20px;
  color: #777;
  text-align: center;
  font-size: 0.9rem;
}
</style>