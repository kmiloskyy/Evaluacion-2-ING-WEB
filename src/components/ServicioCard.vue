<template>
    <div class="servicio-card">
        <h3>{{ servicio.nombre }}</h3>
        <p><strong>Categoría:</strong> {{ servicio.categoria }}</p>
        <p><strong>Descripción:</strong> {{ servicio.descripcion }}</p>
        <p><strong>Precio:</strong> ${{ servicio.precio }}</p>
        
        <p>
            <strong>Disponibilidad:</strong> 
            <span v-if="servicio.disponible">Disponible</span>
            <span v-else>No disponible</span>
        </p>
        
        <div class="acciones">
            <RouterLink :to="`/servicios/${servicio.id}`">
                <button class="btn-detalle">Ver detalle</button>
            </RouterLink>

            <button 
                @click="$emit('toggle-favorito', servicio.id)" 
                :class="esFavorito ? 'btn-quitar' : 'btn-agregar'"
            >
                {{ esFavorito ? 'Quitar de favoritos' : 'Marcar como favorito' }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    servicio: {
        type: Object,
        required: true 
    },
    esFavorito: {
        type: Boolean,
        default: false
    }
});

defineEmits(['toggle-favorito']);

</script>

<style scoped>
.servicio-card {
  background-color: #242424;
  color: #f1f1f1; 
  border: 1px solid #444;
  padding: 20px;
  margin: 10px;
  border-radius: 12px; 
  width: 280px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.servicio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
  border-color: #64b5f6;
}

h3 {
  margin-top: 0;
  color: #64b5f6;
  border-bottom: 1px solid #444;
  padding-bottom: 10px;
  font-size: 1.3rem;
}

p {
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 8px 0;
}

strong {
  color: #a0a0a0;
}

.acciones {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}

.btn-detalle {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
  width: 100%;
}
.btn-detalle:hover {
  background-color: #0056b3;
}

.btn-agregar {
  background-color: transparent;
  color: #f1f1f1;
  border: 1px solid #888;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}
.btn-agregar:hover {
  background-color: #444;
}

.btn-quitar {
  background-color: #ffc107;
  color: #222;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}
.btn-quitar:hover {
  background-color: #e0a800;
}
</style>