import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/home-page/home-page.vue"
import DataBindingPage from "../views/data-binding/data-binding.vue"
import DirectivesPage from "../views/directives/directives.vue"
import ComputedPropertyPage from "../views/computed-property/computed-property.vue"
import LifecyclePage from '../views/lifecycle-hook/lifecycle-hook.vue'
import EventHandlerPage from '../views/event-handler/event-handler.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/data-binding",
    name: "data-binding",
    component: DataBindingPage
  },
  {
    path: "/directive",
    name: "directive",
    component: DirectivesPage
  },
  {
    path: "/computed-property",
    name: "computed-property",
    component: ComputedPropertyPage
  },
  {
    path: "/lifecycle",
    name: "lifecycle",
    component: LifecyclePage
  },
  {
    path: "/event-handler",
    name: "event-handler",
    component: EventHandlerPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
