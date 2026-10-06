import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Servicios from '../views/Servicios.vue'
import DetalleServicio from '../views/DetalleServicio.vue'
import Favoritos from '../views/Favoritos.vue'
import Contacto from '../views/Contacto.vue'
import PaginaNoEncontrada from '../views/PaginaNoEncontrada.vue'

const routes = [
    { path: '/', name: 'Inicio', component: Inicio},
    { path: '/servicios', name: 'Catalogo de servicios', component: Servicios},
    { path: '/servicio/:id', name: 'Detalle de un servicio', component: DetalleServicio},
    { path: '/favoritos', name: 'Servicios favoritos', component: Favoritos},
    { path: '/contacto', name: 'Formulario de contacto', component: Contacto},
    { path: '/:pathMatch(.*)*', name: 'Pagina 404', component: PaginaNoEncontrada}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router