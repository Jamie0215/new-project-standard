import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    name: "Home", // 路徑位置
    component: Home,
  },
  {
    path: "/about", // 路徑位置
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/newpage", // 路徑位置
    name: "新增頁面",
    component: () => import("../views/NewPage.vue"),
    children: [
      // 巢狀路由NewPage底下有A與B模板,一個元件插入多個視圖 - 具名視圖
      {
        path: "a",
        component: () => import("../views/componentA.vue"),
      },
      {
        path: "b",
        component: () => import("../views/componentB.vue"),
      },
      {
        path: "dynamicRouter/:id",
        name: "新增頁面Router",
        component: () => import("../views/DynamicRouter.vue"),
      },
      {
        path: "dynamicRouterByProps/:id",
        // path: "dynamicRouterByProps",
        name: "新增頁面Props",
        component: () => import("../views/DynamicRouterByProps.vue"),
        props: (route) => {
          console.log("route:", route);
          return { id: route.params.id };
          // this.$router.push({ name: 'user', params: { userId: 1 }})
        },
      },
      {
        path: "namedView",
        component: () => import("../views/NamedView.vue"),
        children: [
          {
            path: "c2a",
            components: {
              left: () => import("../views/componentC.vue"),
              right: () => import("../views/componentA.vue"),
            },
          },
          {
            path: "a2b",
            components: {
              left: () => import("../views/componentA.vue"),
              right: () => import("../views/componentB.vue"),
            },
          },
        ],
      },
      {
        path: "routerNavigation",
        component: () => import("../views/RouterNavigation.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(), // 除#
  // history: VueRouter.createWebHistory(), //網址會看到#/表示已經準備好了
  // history: createWebHashHistory(),
  routes
});

export default router
