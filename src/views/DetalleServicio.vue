<template>
  <div class="detalle-servicio-container">
    <div v-if="servicio">
      <h2>Detalle del Servicio</h2>
      <div class="info-servicio">
        <h3>{{ servicio.nombre }}</h3>
        <p><strong>Categoría:</strong> {{ servicio.categoria }}</p>
        <p><strong>Descripción completa:</strong> {{ servicio.descripcion }}</p>
        <p><strong>Precio:</strong> ${{ servicio.precio }}</p>
        <p>
          <strong>Disponibilidad:</strong> 
          <span v-if="servicio.disponible" class="disponible">Disponible</span>
          <span v-else class="no-disponible">No disponible</span>
        </p>
      </div>
      
      <RouterLink to="/servicios">
        <button class="btn-volver">Volver al catálogo</button>
      </RouterLink>
    </div>

    <div v-else class="error-servicio">
      <h2>Error 404</h2>
      <p>El servicio que estás buscando no existe o no es válido.</p>
      <RouterLink to="/servicios">
        <button class="btn-volver">Volver al catálogo</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const servicio = ref(null);

const servicios = [
  { id: 1, nombre: 'Gasfitería a domicilio', categoria: 'Reparaciones', descripcion: 'Reparación de cañerías y filtraciones.', precio: 25000, disponible: true },
  { id: 2, nombre: 'Asesoría Contable', categoria: 'Profesional', descripcion: 'Declaración de impuestos mensual.', precio: 50000, disponible: true },
  { id: 3, nombre: 'Electricista Certificado', categoria: 'Reparaciones', descripcion: 'Instalaciones eléctricas y armado de tableros.', precio: 30000, disponible: false },
  { id: 4, nombre: 'Desarrollo Web', categoria: 'Tecnología', descripcion: 'Creación de sitios web corporativos.', precio: 150000, disponible: true },
  { id: 5, nombre: 'Diseño Gráfico', categoria: 'Tecnología', descripcion: 'Creación de logotipos e identidad visual.', precio: 80000, disponible: true },
  { id: 6, nombre: 'Clases de Matemáticas', categoria: 'Educación', descripcion: 'Clases particulares para estudiantes de enseñanza media.', precio: 15000, disponible: false }
];

onMounted(() => {
  const idBuscado = parseInt(route.params.id);
  servicio.value = servicios.find(s => s.id === idBuscado) || null;
});
</script>

<style scoped>
.detalle-servicio-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
.info-servicio {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.error-servicio {
  background-color: #f8d7da;
  color: #721c24;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
.btn-volver {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>