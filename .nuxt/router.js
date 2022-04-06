import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5efc430a = () => interopDefault(import('..\\pages\\CreatePost\\index.vue' /* webpackChunkName: "pages/CreatePost/index" */))
const _290762ed = () => interopDefault(import('..\\pages\\EditPost\\index.vue' /* webpackChunkName: "pages/EditPost/index" */))
const _36b6d84a = () => interopDefault(import('..\\pages\\Posts\\index.vue' /* webpackChunkName: "pages/Posts/index" */))
const _62527a16 = () => interopDefault(import('..\\pages\\Users\\index.vue' /* webpackChunkName: "pages/Users/index" */))
const _be21d9e0 = () => interopDefault(import('..\\pages\\Posts\\_id\\index.vue' /* webpackChunkName: "pages/Posts/_id/index" */))
const _9403c976 = () => interopDefault(import('..\\pages\\Users\\_id\\index.vue' /* webpackChunkName: "pages/Users/_id/index" */))
const _8ba2ba52 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CreatePost",
    component: _5efc430a,
    name: "CreatePost"
  }, {
    path: "/EditPost",
    component: _290762ed,
    name: "EditPost"
  }, {
    path: "/Posts",
    component: _36b6d84a,
    name: "Posts"
  }, {
    path: "/Users",
    component: _62527a16,
    name: "Users"
  }, {
    path: "/Posts/:id",
    component: _be21d9e0,
    name: "Posts-id"
  }, {
    path: "/Users/:id",
    component: _9403c976,
    name: "Users-id"
  }, {
    path: "/",
    component: _8ba2ba52,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
