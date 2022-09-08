import { createRouter, createWebHistory } from 'vue-router'
import MyHome from '../components/MyHome.vue'
import MyList from '../components/MyList.vue'
import MyFavo from '../components/MyFavo.vue'
import MyBar from '../components/MyBar.vue'
import LogIn from '../components/LogIn.vue'
import TimeLine from '../components/TimeLine.vue'
import ArticlPost from '../components/ArticlPost.vue'
import MyPage from '../components/MyPage.vue'
import MyLogin from '../components/MyLogin.vue'
import LogOut from '../components/LogOut.vue'


const routes = [
  {
    path: '/log',
    name: 'MyLogin',
    component: MyLogin
  },

  {
    path: '/',
    name: 'Home',
    component: MyHome
  },
  {
    path: '/list',
    name: 'About',
    component: MyList
    
  },
  {
    path: '/favo',
    name: 'Favo',
    component: MyFavo
  },
  {
    path: '/bar',
    name: 'Bar',
    omponent: MyBar
  },
  {
    path: '/login',
    name: 'Login',
    component: LogIn
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: TimeLine
  },
  {
    path: '/post',
    name: 'Post',
    component: ArticlPost
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  },
  {
    path: '/logout',
    name: 'MyLogout',
    component: LogOut
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router