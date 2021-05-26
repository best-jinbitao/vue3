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
          path: "/",
          name: "简介",
        },
        {
          path: "/",
          name: "简介",
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style></style>
