import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/khach-hang',
        component: ()=>import('../components/KhachHang/index.vue')
    },
    {
        path : '/mon-an',
        component: ()=>import('../components/MonAn/index.vue')
    },
    {
        path : '/shipper',
        component: ()=>import('../components/Shipper/index.vue')
    },
    {
        path : '/voucher',
        component: ()=>import('../components/Voucher/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router