<template>
  <div>
    <h2>Catálogo de Servicios</h2>
    <div class="catalogo-container">
      <ServicioCard
        v-for="servicio in servicios"
        :key="servicio.id"
        :servicio="servicio"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ServicioCard from '../components/ServicioCard.vue';

const servicios = ref([
  { id: 1, nombre: 'Gasfitería a domicilio', 
        categoria: 'Reparaciones', 
        descripcion: 'Reparación de cañerías y filtraciones.', 
        precio: 25990, 
        disponible: true },

  { id: 2, nombre: 'Asesoría Contable', 
        categoria: 'Profesional', 
        descripcion: 'Declaración de impuestos mensual.', 
        precio: 49990, 
        disponible: true },

  { id: 3, nombre: 'Electricista Certificado', 
        categoria: 'Reparaciones', 
        descripcion: 'Instalaciones eléctricas y armado de tableros.', 
        precio: 29990, 
        disponible: false },

  { id: 4, nombre: 'Desarrollo Web', 
        categoria: 'Tecnología', 
        descripcion: 'Creación de sitios web corporativos.', 
        precio: 149990, 
        disponible: true },

  { id: 5, nombre: 'Diseño Gráfico', 
        categoria: 'Tecnología', 
        descripcion: 'Creación de logotipos e identidad visual.', 
        precio: 79990, 
        disponible: true },

  { id: 6, nombre: 'Clases de Matemáticas', 
        categoria: 'Educación', 
        descripcion: 'Clases particulares para estudiantes de enseñanza media.', 
        precio: 14990, 
        disponible: false }
]);
</script>

<style scoped>
.catalogo-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>