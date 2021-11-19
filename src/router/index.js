import Home from '../views/Home.vue'
import UploadImage from '../views/UploadImage.vue'
import Changed from '../views/Changed.vue'
import VueRouter from 'vue-router'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/upload',
            component: UploadImage,
        },
        {
            path: '/changed',
            component: Changed,
        }
    ]
})

export default router