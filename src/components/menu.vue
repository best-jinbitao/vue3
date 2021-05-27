<template>
  <el-menu default-active="ActiveSelection" class="el-menu-vertical-demo" router @select="handleSelect"
    background-color="rgb(248, 244, 239)">
    <el-menu-item v-for="(router, index) in routers" :key="index" :index="router.path" style="text-align: left">
      {{ router.name }}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      routers: [
        {
          path: "/",
          name: "简介",
        },
        {
          path: "/element",
          name: "element",
        },
        {
          path: "/copy",
          name: "copy",
        },
        {
          path: "/axios",
          name: "axios",
        },
        {
          path: "/pdfjs",
          name: "pdfjs",
        },
        {
          path: "/canvas",
          name: "canvas",
        },
        {
          path: "/fabricjs",
          name: "fabricjs",
        },
        {
          path: "/map",
          name: "map",
        },
        {
          path: "/echarts",
          name: "echarts",
        },
        {
          path: "/wordcloud",
          name: "wordcloud",
        },
        {
          path: "/database",
          name: "database",
        },
        {
          path: "/css",
          name: "布局",
        },
        {
          path: "/animation",
          name: "动画",
        },
        {
          path: "/qrcode",
          name: "二维码",
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('当前页面', key, keyPath);
    },
  },
};
</script>

<style></style>
