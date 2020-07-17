import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import QA from "../views/QA.vue";
import Services from "../views/Services.vue";
import JoinUs from "../views/JoinUs.vue";
import ContactUs from "../views/ContactUs.vue";






Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Services",
    name: "Servives",
    component: Services
  },
  {
    path: "/JoinUs",
    name: "JoinUs",
    component: JoinUs
  },
  {
    path: "/QA",
    name: "QA",
    component: QA
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
