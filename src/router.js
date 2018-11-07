import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Admin from './components/admin/Admin.vue'
import AdminIndex from './components/admin/AdminIndex.vue'
import AdminSystem from './components/admin/AdminSystem.vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Index',
        component:Index,
        meta:{
            title:"0718网站首页"
        }
    },
    {
        path:'/Login',
        name:'Login',
        component:Login,
        meta:{
            title:"0718后管理登陆页面"
        }
    },
    {
        path: '/Admin',
        component: Admin,
        redirect: () => {
            return { path: '/Admin/AdminIndex' };
        },
        meta:{
            title:"0718后台管理系统"
        },
        children: [
        {
            path: '/Admin/AdminIndex',
            component: AdminIndex,
            meta:{
                title:"登陆页说明"
            },
        },
        {
            path: '/Admin/AdminSystem',
            component: AdminSystem,
            meta:{
                title:"网站基本信息设置"
            },
        }
        ]
    }
]
  

const router = new VueRouter({
    mode:'history',  
    routes:routes
})

router.beforeEach((to,from,next) =>{
    if(to.meta.title){
        document.title = to.meta.title
    }
    next()
})


export default router;