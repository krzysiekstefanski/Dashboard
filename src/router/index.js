import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    // Example of Protected Route
    path: "/protected",
    name: "Protected",
    meta: { requiresAuth: true, },
  },
  // Example how to handle non exisiting route redirection
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../components/HelloWorld.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !useAuthStore().isAuthenticated) {
    next(from.path);
  } else {
    next();
  };
});

export default router;
