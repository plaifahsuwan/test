import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'หน้าแรก' },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      meta: { title: 'ลงทะเบียน' },
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      meta: { title: 'เข้าสู่ระบบ' },
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'เกี่ยวกับเรา' },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/wonders',
      name: 'wonders',
      meta: { title: 'เทรนด์ธุรกิจน่าลงทุนสำหรับปี 2024' },
      component: () => import('../views/WonderView.vue')
    },
    {
      path: '/add-wonder',
      name: 'add-wonder',
      meta: { title: 'เพิ่มธุรกิจน่าลงทุนสำหรับปี 2024' },
      component: () => import('../components/Wonder/AddWonder.vue')
    },
    {
      path: '/:pachMatch(.*)*',
      name: 'NotFound',
      meta: { title: 'ไม่พบหน้าเพจ' },
      component: () => import('../views/ErrorView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // document.title = to.meta?.title ?? 'น้อยน่า'
  const titleFromParams = to.params?.pageTitle
  if (titleFromParams !== null) {
    document.title = ` ${to.name} | ${to.meta?.title}`
  } else {
    document.title = to.meta?.title ?? 'น้อยน่า'
  }
  next()
})
export default router
