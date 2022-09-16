import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

const routes = [
  {
    path: "/get-started",
    name: "CreateAccount",
    component: () => import("../components/pages/CreateAccountExperiance.vue"),
    props: { gettingStarted: true }
  },
  {
    path: "/get-started-mobile",
    name: "CreateAccountMobile",
    component: () => import("../components/pages/CreateAccountExperiance.vue"),
    props: { gettingStartedMobile: true }
  },
  {
    path: "/confirm-email",
    name: "Verify",
    component: () => import("../components/pages/CreateAccountExperiance.vue"),
    props: { confirmEmail: true }
  },
  {
    path: "/confirm-mobile",
    name: "VerifyMobile",
    component: () => import("../components/pages/CreateAccountExperiance.vue"),
    props: { confirmMobile: true }
  },
  {
    path: "/create-workspace",
    name: "CreateWorkspace",
    component: () => import("../components/pages/CreateAccountExperiance.vue"),
    props: { createWorkspace: true, }
  },
  {
    path: "/stage-selection",
    name: "StageSelection",
    component: () => import("../components/pages/Onboarding.vue"),
    props: { stageSelection: true }
  },
  {
    path: "/industry-search",
    name: "IndustrySearch",
    component: () => import("../components/pages/Onboarding.vue"),
    props: { industrySearch: true }
  },
  {
    path: "/work-time",
    name: "WorkTime",
    component: () => import("../components/pages/Onboarding.vue"),
    props: { workTime: true }
  },
  {
    path: "/business-place",
    name: "BusinessPlace",
    component: () => import("../components/pages/Onboarding.vue"),
    props: { businessPlace: true }
  },
  {
    path: "/interest-area",
    name: "InterestArea",
    component: () => import("../components/pages/Onboarding.vue"),
    props: { interestArea: true }
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
    component: () => import("../components/pages/CreateAccountExperiance.vue"),
    props: { gettingStarted: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next("/get-started")
  }

  if (to.meta.requiresAuth && !useAuthStore().isAuthenticated) {
    next(from.path);
  } else {
    next();
  };
});

export default router;