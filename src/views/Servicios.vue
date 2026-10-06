<template>
  <div class="servicios-vista">
    <h2>Catálogo de Servicios</h2>
    <div v-if="cargando" class="estado-mensaje info">
      <p> Cargando servicios...</p>
    </div>
    <div v-else-if="error" class="estado-mensaje peligro">
      <p>{{ error }}</p>
    </div>

    <div v-else>
      <div class="filtros">
        <input type="text" v-model="busqueda" placeholder="Buscar por nombre..." />
        <select v-model="categoriaSeleccionada">
          <option value="">Todas las categorías</option>
          <option value="Reparaciones">Reparaciones</option>
          <option value="Profesional">Profesional</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Educación">Educación</option>
        </select>
      </div>

      <div v-if="serviciosFiltrados.length > 0" class="catalogo-container">
        <ServicioCard
          v-for="servicio in serviciosFiltrados"
          :key="servicio.id"
          :servicio="servicio"
          :esFavorito="favoritos.includes(servicio.id)"
          @toggle-favorito="manejarFavorito"
        />
      </div>
   
      <div v-else class="estado-mensaje advertencia">
        <p>No se encontraron servicios para los criterios seleccionados.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import ServicioCard from '../components/ServicioCard.vue';

const busqueda = ref('');
const categoriaSeleccionada = ref('');
const favoritos = ref([]);

const servicios = ref([]);
const cargando = ref(true);
const error = ref(null);

onMounted(async () => {

  const favoritosGuardados = localStorage.getItem('mis-favoritos');
  if (favoritosGuardados) {
    favoritos.value = JSON.parse(favoritosGuardados);
  }

  await cargarDatos();
});

watch(favoritos, (nuevoValor) => {
  localStorage.setItem('mis-favoritos', JSON.stringify(nuevoValor));
}, { deep: true });

const cargarDatos = async () => {
  try {
    cargando.value = true;
    error.value = null;
  
    await new Promise(resolve => setTimeout(resolve, 1000));

    const respuesta = await fetch('/servicios.json');
    
    if (!respuesta.ok) {
      throw new Error('No se pudo conectar con el servidor.');
    }
    
    const datos = await respuesta.json();
    servicios.value = datos;

  } catch (err) {
    error.value = 'Ocurrió un error al cargar el catálogo de servicios. Intente más tarde.';
    console.error(err);
  } finally {
    cargando.value = false;
  }
};

const serviciosFiltrados = computed(() => {
  return servicios.value.filter(servicio => {
    const coincideNombre = servicio.nombre.toLowerCase().includes(busqueda.value.toLowerCase());
    const coincideCategoria = categoriaSeleccionada.value === '' || servicio.categoria === categoriaSeleccionada.value;
    return coincideNombre && coincideCategoria;
  });
});

const manejarFavorito = (idServicio) => {
  if (favoritos.value.includes(idServicio)) {
    favoritos.value = favoritos.value.filter(id => id !== idServicio);
  } else {
    favoritos.value.push(idServicio);
  }
};
</script>

<style scoped>
input, select { padding: 8px; font-size: 1rem; }
.filtros { margin-bottom: 20px; display: flex; gap: 15px; }
.catalogo-container { display: flex; flex-wrap: wrap; gap: 15px; }

.estado-mensaje {
  padding: 20px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
}
.info { background-color: #d1ecf1; color: #0c5460; }
.peligro { background-color: #f8d7da; color: #721c24; }
.advertencia { background-color: #fff3cd; color: #856404; }
</style>