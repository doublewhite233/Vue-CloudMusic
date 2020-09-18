import Vue from 'vue'
import VueRouter from 'vue-router'

const Profile = () => import('../views/profile/Profile')
const Find = () => import('../views/find/Find')
const cloud = () => import('../views/cloud/Cloud')
const video = () => import('../views/video/Video')
const login = () => import('../views/login/Login')
const music = () => import('../views/music/Music')
const search = () => import('../views/search/Search')
const playlist = () => import('../views/playlist/PlayList')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/find'
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/find',
    component: Find
  },
  {
    path: '/cloud',
    component: cloud
  },
  {
    path: '/video',
    component: video
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/music',
    component: music
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/playlist',
    component: playlist
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
