import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

import Layout from "@/layout/index.vue";
import Dashboard from "@/views/dashboard/index.vue";
import Login from "@/views/auth/login.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard,
        meta: { title: "仪表盘", icon: "HomeOutlined" },
      },
      {
        path: "/test",
        name: "Test",
        component: () => import("@/views/test/index.vue"),
        meta: { title: "测试", icon: "FilterOutlined", keepAlive: true },
      },
      {
        path: "/error",
        redirect: { name: "404" },
        children: ["401", "403", "404", "500"].map(code => {
          return {
            path: code,
            name: code,
            component: () => import(`@/views/auth/error.vue`),
          };
        }),
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },

  {
    path: "/:pathMatch(.*)",
    redirect: { name: "404" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function getCacheNames(routes: RouteRecordRaw[]): string[] {
  return routes.reduce((names: string[], route) => {
    if (route.meta?.keepAlive) {
      names.push(route.name as string);
    }
    if (route.children) {
      names.push(...getCacheNames(route.children));
    }
    return names;
  }, []);
}

export const cacheNames = getCacheNames(routes);

export default router;
