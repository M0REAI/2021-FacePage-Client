import Home from '../views/Home.vue'
import UploadImage from '../views/UploadImage.vue'
import Changed from '../views/Changed.vue'
import Login from '../views/Login.vue'
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
            name: 'select'
        },
        {
            path: '/changed',
            component: Changed,
            name: 'result'
        },
        {
            path: '/user/login',
            component: Login,
        }
    ]
})

export default router