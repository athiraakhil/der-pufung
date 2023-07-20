import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import QuestionsView from '../views/QuestionsView.vue'

const routes = [
  {
    path: '/',
    name: 'Question',
    component: QuestionsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
