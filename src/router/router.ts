import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

import Layout from "@/layout/index.vue";
import Dashboard from "@/views/dashboard/index.vue";
import UserList from "@/views/user/list.vue";
import Login from "@/views/auth/login.vue";
import { errorView } from "@/router/modules/errorView";
import UserRole from "@/views/user/role.vue";

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
        path: "/user",
        name: "User",
        meta: { title: "用户管理", icon: "UserOutlined" },
        children: [
          {
            path: "list",
            component: UserList,
            name: "UserList",
            meta: { title: "用户列表", icon: "UnorderedListOutlined" },
          },
          {
            path: "role",
            component: UserRole,
            name: "UserRole",
            meta: { title: "用户角色", icon: "UsergroupAddOutlined" },
          },
        ],
      },
      {
        path: "/content",
        component: () => import("@/views/content/index.vue"),
        name: "Content",
        meta: { title: "内容管理", icon: "FileTextOutlined" },
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  
  {
    path: "/error",
    redirect: { name: "404" },
    children: errorView,
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

export default router;
