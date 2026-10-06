<template>
  <div class="contacto-container">
    <h2>Contacto</h2>
    <p>Complete el siguiente formulario para consultar sobre nuestros servicios.</p>

    <div v-if="mensajeExito" class="alerta exito">
     ¡Mensaje enviado con éxito! Nos pondremos en contacto con usted a la brevedad.
    </div>

    <form v-else @submit.prevent="validarFormulario" class="formulario">
      
      <div v-if="mensajeError" class="alerta error">
         {{ mensajeError }}
      </div>

      <div class="campo">
        <label for="nombre">Nombre completo:</label>
        <input 
          type="text" 
          id="nombre" 
          v-model="formulario.nombre" 
          placeholder="Ej: Luciano Raimilla"
        />
      </div>

      <div class="campo">
        <label for="correo">Correo electrónico:</label>
        <input 
          type="email" 
          id="correo" 
          v-model="formulario.correo" 
          placeholder="Ej: luciano@gmail.com"
        />
      </div>

      <div class="campo">
        <label for="servicio">Servicio de interés:</label>
        <select id="servicio" v-model="formulario.servicio">
          <option value="">-- Seleccione un servicio --</option>
          <option value="Reparaciones">Reparaciones y Mantención</option>
          <option value="Profesional">Asesoría Profesional</option>
          <option value="Tecnologia">Servicios Tecnológicos</option>
          <option value="Educacion">Servicios de Educación</option>
          <option value="Otro">Otro servicio</option>
        </select>
      </div>

      <div class="campo">
        <label for="mensaje">Mensaje:</label>
        <textarea 
          id="mensaje" 
          v-model="formulario.mensaje" 
          rows="4" 
          placeholder="Escriba su consulta aquí..."
        ></textarea>
      </div>

      <button type="submit" class="btn-enviar">Enviar mensaje</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formulario = ref({
  nombre: '',
  correo: '',
  servicio: '',
  mensaje: ''
});

const mensajeError = ref('');
const mensajeExito = ref(false);

const validarFormulario = () => {
  
  mensajeError.value = '';

  if (!formulario.value.nombre || !formulario.value.correo || !formulario.value.servicio || !formulario.value.mensaje) {
    mensajeError.value = 'Por favor, complete todos los campos obligatorios antes de enviar.';
    return;
  }

  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegex.test(formulario.value.correo)) {
    mensajeError.value = 'Por favor, ingrese un correo electrónico válido.';
    return;
  }

  mensajeExito.value = true;
};
</script>

<style scoped>
.contacto-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  font-weight: bold;
  color: #333;
}

input, select, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.btn-enviar {
  background-color: #28a745;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
}

.btn-enviar:hover {
  background-color: #218838;
}

.alerta {
  padding: 15px;
  border-radius: 4px;
  font-weight: bold;
  margin-bottom: 15px;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.exito {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  text-align: center;
}
</style>