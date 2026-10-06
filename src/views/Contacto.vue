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
  max-width: 550px;
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
}

p {
  text-align: center;
  color: #a0a0a0;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: bold;
  color: #64b5f6; 
  font-size: 0.95rem;
}

input, select, textarea {
  padding: 14px;
  border: 1px solid #444;
  border-radius: 8px;
  background-color: #333;
  color: white;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus, select:focus, textarea:focus {
  border-color: #64b5f6;
  box-shadow: 0 0 5px rgba(100, 181, 246, 0.3);
}

.btn-enviar {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 10px;
}

.btn-enviar:hover {
  background-color: #388e3c;
}

.alerta {
  padding: 16px;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 25px;
  text-align: center;
}

.error {
  background-color: #3b1c1e;
  color: #ff8a80;
  border: 1px solid #f44336;
}

.exito {
  background-color: #1b3320;
  color: #81c784;
  border: 1px solid #4caf50;
}
</style>