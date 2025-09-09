import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from './pages/LoginPage.vue'
import HomePage from './pages/HomePage.vue'
import SignUp from './components/SignUp.vue'
import NewAddedTask from './components/NewAddedTask.vue'
import FinishedTask from './components/FinishedTask.vue'
import DeletedTask from './components/DeletedTask.vue'

const routes = [{
  path: "/",
  component: LoginPage
},
{
  path: "/home",
  component: HomePage
},
{
  path: "/signup",
  component: SignUp
},
{
  path: "/home/added",
  component: NewAddedTask
},
{
  path: "/home/finished",
  component: FinishedTask
},
{
  path: "/home/deleted",
  component: DeletedTask
},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;