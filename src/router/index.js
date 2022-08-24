import { createRouter, createWebHistory } from "vue-router";
import Question from "../views/Question.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Question,
    }
  ],
});

export default router;
