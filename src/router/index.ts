import { createRouter, createWebHistory } from "vue-router";
const RentCalculator = () => import("@/views/RentCalculator.vue");
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "rentCalc",
      component: RentCalculator,
    },
  ],
});

export default router;
