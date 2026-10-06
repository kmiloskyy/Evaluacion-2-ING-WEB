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
h2 {
  color: #ffffff;
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 30px;
}

.filtros {
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}

input, select {
  padding: 12px 16px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #555;
  background-color: #333; 
  color: white;
  outline: none;
  min-width: 250px;
  transition: border-color 0.2s;
}

input:focus, select:focus {
  border-color: #64b5f6; 
}

.catalogo-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.estado-mensaje {
  padding: 20px;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
}
.info { background-color: #17a2b8; color: white; border: none; }
.peligro { background-color: #dc3545; color: white; border: none; }
.advertencia { background-color: #ffc107; color: #212529; border: none; }
</style>