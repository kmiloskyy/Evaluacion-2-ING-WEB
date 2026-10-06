<template>
  <div>
    <div v-if="servicio" class="detalle-servicio-container">
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

    <div v-else class="error-caja-centrada">
      <div class="error-caja-rosada">
        <h2>Error 404</h2>
        <p>El servicio que estás buscando no existe o no es válido.</p>
        <RouterLink to="/servicios">
          <button class="btn-volver-chico">Volver al catálogo</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const servicio = ref(null);

const servicios = [
  { id: 1, nombre: 'Gasfitería a domicilio', categoria: 'Reparaciones', descripcion: 'Reparación de cañerías y filtraciones.', precio: 25990, disponible: true },
  { id: 2, nombre: 'Asesoría Contable', categoria: 'Profesional', descripcion: 'Declaración de impuestos mensual.', precio: 49990, disponible: true },
  { id: 3, nombre: 'Electricista Certificado', categoria: 'Reparaciones', descripcion: 'Instalaciones eléctricas y armado de tableros.', precio: 29990, disponible: false },
  { id: 4, nombre: 'Desarrollo Web', categoria: 'Tecnología', descripcion: 'Creación de sitios web corporativos.', precio: 149990, disponible: true },
  { id: 5, nombre: 'Diseño Gráfico', categoria: 'Tecnología', descripcion: 'Creación de logotipos e identidad visual.', precio: 79990, disponible: true },
  { id: 6, nombre: 'Clases de Matemáticas', categoria: 'Educación', descripcion: 'Clases particulares para estudiantes de enseñanza media.', precio: 14990, disponible: false }
];

onMounted(() => {
  const idBuscado = parseInt(route.params.id);
  servicio.value = servicios.find(s => s.id === idBuscado) || null;
});
</script>

<style scoped>
.detalle-servicio-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 35px;
  background-color: #242424; 
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  color: #f1f1f1;
}

h2 {
  text-align: center;
  color: #ffffff;
  font-size: 2.2rem;
  margin-top: 0;
  margin-bottom: 30px;
}

.info-servicio {
  background-color: #1e1e1e;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #444;
  margin-bottom: 30px;
}

.info-servicio h3 {
  color: #64b5f6;
  margin-top: 0;
  border-bottom: 1px solid #444;
  padding-bottom: 15px;
  font-size: 1.6rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 12px 0;
}

strong {
  color: #a0a0a0;
}

.disponible { color: #4caf50; font-weight: bold; }
.no-disponible { color: #f44336; font-weight: bold; }

.btn-volver {
  display: block;
  width: 100%;
  text-align: center;
  padding: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-volver:hover {
  background-color: #0056b3;
}

.error-caja-centrada {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.error-caja-rosada {
  background-color: #f8d7da;
  color: #721c24;
  padding: 50px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #f5c6cb;
  max-width: 500px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.error-caja-rosada h2 {
  color: #721c24;
  margin-top: 0;
  margin-bottom: 20px;
}

.error-caja-rosada p {
  color: #721c24;
  margin-bottom: 30px;
}

.btn-volver-chico {
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  display: inline-block;
  width: auto;
}

.btn-volver-chico:hover {
  background-color: #0056b3;
}
</style>