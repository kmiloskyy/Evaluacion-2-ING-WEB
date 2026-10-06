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
    <button @click="verDetalle">Ver Detalle</button>
    </div>
</template>

<script setup>
const props = defineProps({
    servicio: {
        type: Object,
        required: true 
    }
})

const verDetalle = () => {
    console.log('Navegando al detalle del servicio ID:', props.servicio.id);
}
</script>
<style scoped>
.servicio-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 10px;
    border-radius: 8px;
    width: 250px;
}
</style>

