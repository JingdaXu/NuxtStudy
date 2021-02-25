import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9dc2d2f0 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _c8806086 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _471b1f6a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _62be5a0b = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _f3660ffe = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _b560866a = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _49889d58 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _9dc2d2f0,
    children: [{
      path: "",
      component: _c8806086,
      name: "home"
    }, {
      path: "/login",
      component: _471b1f6a,
      name: "login"
    }, {
      path: "/register",
      component: _471b1f6a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _62be5a0b,
      name: "profile"
    }, {
      path: "/settings",
      component: _f3660ffe,
      name: "settings"
    }, {
      path: "/editor",
      component: _b560866a,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _49889d58,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
