<template>
  <div class="favoritos-vista">
    <h2>Mis Servicios Favoritos</h2>

    <div v-if="serviciosFavoritos.length > 0" class="catalogo-container">
      <ServicioCard
        v-for="servicio in serviciosFavoritos"
        :key="servicio.id"
        :servicio="servicio"
        :esFavorito="true" 
        @toggle-favorito="quitarFavorito"
      />
    </div>
    <div v-else class="mensaje-vacio">
      <p>Aún no tienes servicios guardados en tus favoritos.</p>
      <RouterLink to="/servicios">Explorar catálogo</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ServicioCard from '../components/ServicioCard.vue';

const todosLosServicios = [
  { id: 1, nombre: 'Gasfitería a domicilio', categoria: 'Reparaciones', descripcion: 'Reparación de cañerías y filtraciones.', precio: 25990, disponible: true },
  { id: 2, nombre: 'Asesoría Contable', categoria: 'Profesional', descripcion: 'Declaración de impuestos mensual.', precio: 49990, disponible: true },
  { id: 3, nombre: 'Electricista Certificado', categoria: 'Reparaciones', descripcion: 'Instalaciones eléctricas y armado de tableros.', precio: 29990, disponible: false },
  { id: 4, nombre: 'Desarrollo Web', categoria: 'Tecnología', descripcion: 'Creación de sitios web corporativos.', precio: 149990, disponible: true },
  { id: 5, nombre: 'Diseño Gráfico', categoria: 'Tecnología', descripcion: 'Creación de logotipos e identidad visual.', precio: 79990, disponible: true },
  { id: 6, nombre: 'Clases de Matemáticas', categoria: 'Educación', descripcion: 'Clases particulares para estudiantes de enseñanza media.', precio: 14990, disponible: false }
];

const favoritosIds = ref([]);
const serviciosFavoritos = ref([]);

onMounted(() => {
  const guardados = localStorage.getItem('mis-favoritos');
  if (guardados) {
    favoritosIds.value = JSON.parse(guardados);
    actualizarListaVisual();
  }
});

const actualizarListaVisual = () => {
  serviciosFavoritos.value = todosLosServicios.filter(servicio => 
    favoritosIds.value.includes(servicio.id)
  );
};

const quitarFavorito = (idServicio) => {
  favoritosIds.value = favoritosIds.value.filter(id => id !== idServicio);
  localStorage.setItem('mis-favoritos', JSON.stringify(favoritosIds.value));
  
  actualizarListaVisual();
};
</script>

<style scoped>
.catalogo-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.mensaje-vacio {
  padding: 20px;
  background-color: #e2e3e5;
  color: #383d41;
  border-radius: 5px;
  text-align: center;
}
</style>