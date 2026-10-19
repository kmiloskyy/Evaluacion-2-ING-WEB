# Actividad 14: Mejoras CRUD - Gestión de Servicios Tecnológicos

**Estudiante:** Camilo Felipe Rodriguez Saldana

## Propósito del Proyecto
Panel de administración de servicios tecnológicos mejorado que incluye búsqueda dinámica, filtros por categoría, ordenamiento por precio o nombre, paginación de registros y validación de formularios tanto para creación como para edición.

## Tecnologías Utilizadas
* **Vue 3 (Composition API):** Framework para construir la interfaz de usuario.
* **Vue Router:** Manejo de rutas y navegación entre el listado y los formularios.
* **Fetch API:** Consumo nativo de datos y comunicación HTTP con el servidor.
* **JSON Server:** API REST local simulada para gestionar la base de datos (`db.json`).

## Instalación
Preparar el entorno e instaladar depencencias
    npm install
    npm install -D json-server.

## Ejecutar ambas terminales
Para que la aplicacion funcione debemos levantar tanto el servidor de base de datos como el servidor de desarrollo frontend.

- Terminal 1: Servidor de datos
Abre una terminal en la raíz del proyecto y ejecuta:
    **npx json-server db.json --port 3001**

- Terminal 2: Servidor Frontend:
Abre una segunda terminal en la raíz del proyecto y ejecuta:
    **npm run dev**
Abre el enlace local que te entregue la consola, generalmente http://localhost:5173.

## Descripción de los Archivos Modificados
- **src/views/ServiciosView.vue**: Se rediseño la vista del listado. Se agrego la logica para filtros, el calculo del precio total, el boton para limpiar filtros y la paginación.
- **src/views/ServicioFormView.vue**: Se incorporaron validaciones logicas antes de enviar los datos (minimo de caracteres, seleccion de categoria y validacion numerica de precio).
- **src/services/serviciosService.js**: Se centralizo la logica HTTP en una unica funcion <solicitud()>, controlando respuestas, errores de red y parseo de datos JSON.
- **src/router/index.js**: Se actualizaron las importaciones y las rutas con los nuevos nombres de las vistas.
- **src/App.vue**: Se simplifico eliminando el header antiguo, dejando unicamente el componente <RouterView />.
- **src/style.css**: Se reestructuraron las reglas CSS agregando flexbox, diseño responsivo.

## Explicaciones computed, watch, fetch y validaciones
* **computed:** Se usa para variables que se calculan solas basandose en otras, la lista de servicios en pantalla y el "Total" se actualizan al instante cuando escribimos en el buscador o cambiamos una categoría.
* **watch:** Lo usamos para estar atentos al buscador y a los filtros. Si detecta que el usuario cambió la búsqueda, el filtro o el orden, nos devuelve automáticamente a la **Página 1**. Así evitamos quedar atrapados en una página vacía.
* **fetch:** Es la herramienta que usamos para enviar y recibir datos desde nuestro servidor. Lo configuramos para que, si el servidor se cae o está apagado, la página no se "rompa", sino que atrape el error y muestre un mensaje en la pantalla.
* **Validaciones:** Son reglas de seguridad en el formulario. Si el usuario se equivoca o deja un espacio en blanco, las validaciones bloquean el botón de guardar y muestran un texto rojo de ayuda debajo del campo correspondiente.

## Tabla de pruebas
| Prueba | Acción del estudiante | Resultado obtenido | Estado |
|---|---|---|---|
| P1 | Buscar "red" | Aparecen los servicios que coinciden en nombre o descripción. | Éxito |
| P2 | Filtrar por Soporte | Solo aparecen servicios de esa categoría. | Éxito |
| P3 | Ordenar precio descendente | Los precios se muestran de mayor a menor. | Éxito |
| P4 | Mantener 6 registros y paginar | Se muestran 5 en la página 1 y el restante en la página 2. | Éxito |
| P5 | Crear servicio con nombre de dos letras | Se impide guardar y aparece el mensaje de validación. | Éxito |
| P6 | Ingresar precio 0 | Se impide guardar. | Éxito |
| P7 | Crear un servicio válido | El registro aparece en el listado y en db.json. | Éxito |
| P8 | Editar el precio de un servicio | El valor modificado permanece tras recargar | Éxito |
| P9 | Cancelar una eliminación | El servicio permanece. | Éxito |
| P10 | Apagar JSON Server y recarga | Se muestra un mensaje de error, sin bloquear la interfaz. | Éxito |

## Desafios de aplicacion personal 
1. Se incorporo una nueva categoria "Hardware" en el formulario y se agrego un servicio "Ensamblaje de PC Custom" ademas de otro servicio "Recuperación de Datos en Discos" 
2. Se coloco un boton "Limpiar filtros" que restablece la busqueda y los selectores a sus valores por defecto.
3. Se integro la propiedad <computed> que calcula y muestra en tiempo real el Precio Total de los servicios filtrados.
4. La tabla de datos se hizo reponsiva (overflow-x: auto), permitiendo su visualización en dispositivos moviles sin desbordar la interfaz.

## Capturas de Pantalla 
**1. Vistas principales y paginación:**
![Listado Principal](capturas/listado.png)
![Listado Página 2](capturas/Listado2.png)

**2. Desafío: Nueva categoría (Hardware) y servicios nuevos:**
![Nueva Categoría](capturas/categorianueva.png)

**3. Aplicación de filtros (Búsqueda, Categoría y Orden):**
![Filtros aplicados](capturas/filtros.png)
![Filtros con total](capturas/filtros2.png)

**4. Validaciones de formulario (Campos obligatorios y formato):**
![Errores de Validación](capturas/validaciones.png)

**5. Ejecución de Pruebas:**
* **Prueba 1 (Buscar "red"):** 
  ![Prueba 1](capturas/prueba1.png)
* **Prueba 8 (Editar precio):** 
  ![Prueba 8 antes](capturas/prueba8-1.png)
  ![Prueba 8 después](capturas/prueba8-2.png)
* **Prueba 10 (Servidor apagado - Error de red):** 
  ![Prueba 10](capturas/prueba10.png)