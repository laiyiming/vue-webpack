import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.async = false;

const router = new VueRouter({
    history: false
})
router.map({
    '/': {
        component: {
            template: "<p>This is Vue.js</p>"
        }
    }
})

export default router
