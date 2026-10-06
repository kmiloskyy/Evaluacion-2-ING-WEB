<template>
  <div class="servicios-vista">
    <h2>Catálogo de Servicios</h2>

    <div class="filtros">
      <input 
        type="text" 
        v-model="busqueda" 
        placeholder="Buscar por nombre..." 
      />

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
      />
    </div>
 
    <div v-else class="mensaje-vacio">
      <p>No se encontraron servicios para los criterios seleccionados.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ServicioCard from '../components/ServicioCard.vue';

const busqueda = ref('');
const categoriaSeleccionada = ref('');

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

const serviciosFiltrados = computed(() => {
  return servicios.value.filter(servicio => {

    const coincideNombre = servicio.nombre.toLowerCase().includes(busqueda.value.toLowerCase());
    
    const coincideCategoria = categoriaSeleccionada.value === '' || servicio.categoria === categoriaSeleccionada.value;
    
    return coincideNombre && coincideCategoria;
  });
});

</script>

<style scoped>
input, select {
  padding: 8px;
  font-size: 1rem;
}
.filtros {
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
}
.catalogo-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.mensaje-vacio {
  padding: 20px;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 5px;
}
</style>