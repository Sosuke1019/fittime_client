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
import TimeLab from '../components/TimeLab.vue'
import NewResist from '../components/NewResist.vue'


const routes = [
  {
    path: '/',
    name: 'MyHome',
    component: MyHome
  },

  {
    path: '/login',
    name: 'MyLogin',
    component: MyLogin
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
  {
    path: '/timelab',
    name: 'TimeLab',
    component: TimeLab
  },
  {
    path: '/resist',
    name: 'NewResist',
    component: NewResist
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router