import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/index.vue";
import Copy from "../views/copy/index.vue";
import DataBase from "../views/database/index.vue";
import Echarts from "../views/echarts/index.vue";
import Fabricjs from "../views/fabricjs/index.vue";
import Map from "../views/map/index.vue";
import QrCode from "../views/qr-code/index.vue";
import WorldCloud from "../views/word-cloud/index.vue";
import Element from "../views/element/index.vue";
import Css from "../views/css/index.vue";
import Animation from "../views/animation/index.vue";
import Canvas from "../views/canvas/index.vue";
import Pdfjs from "../views/pdfjs/index.vue";
import Axios from "../views/axios/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/copy",
    name: "Copy",
    component: Copy,
  },
  {
    path: "/axios",
    name: "Axios",
    component: Axios,
  },
  {
    path: "/canvas",
    name: "Canvas",
    component: Canvas,
  },
  {
    path: "/pdfjs",
    name: "Pdfjs",
    component: Pdfjs,
  },
  {
    path: "/animation",
    name: "Animation",
    component: Animation,
  },
  {
    path: "/css",
    name: "Css",
    component: Css,
  },
  {
    path: "/element",
    name: "Element",
    component: Element,
  },
  {
    path: "/database",
    name: "DataBase",
    component: DataBase,
  },
  {
    path: "/echarts",
    name: "Echarts",
    component: Echarts,
  },
  {
    path: "/fabricjs",
    name: "Fabricjs",
    component: Fabricjs,
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
  },
  {
    path: "/qrcode",
    name: "QrCode",
    component: QrCode,
  },
  {
    path: "/wordcloud",
    name: "WorldCloud",
    component: WorldCloud,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
