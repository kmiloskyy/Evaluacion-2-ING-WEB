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
                {{ esFavorito ? 'Quitar de favoritos ⭐' : 'Marcar como favorito ☆' }}
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
    border: 1px solid #ccc;
    padding: 16px;
    margin: 10px;
    border-radius: 8px;
    width: 250px;
}

.acciones {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
}

.btn-detalle { background-color: #007bff; color: white; padding: 8px; border: none; cursor: pointer; border-radius: 4px; }
.btn-agregar { background-color: #f8f9fa; border: 1px solid #ccc; padding: 8px; cursor: pointer; border-radius: 4px; }
.btn-quitar { background-color: #ffc107; border: 1px solid #e0a800; padding: 8px; cursor: pointer; border-radius: 4px; }
</style>