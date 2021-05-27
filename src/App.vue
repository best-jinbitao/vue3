<template>
  <div id="nav">
    <div
      style="z-index:1200;background:rgb(248, 244, 239);width:100%;height:39px;position:fixed;top:0;text-align:left;font-size:30px;padding:10px;border-bottom:1px solid #E4E7ED">
      vue 全家桶
    </div>
    <div>
      <el-container>
        <el-aside width="160px">
          <Menu />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
// import Vue from "vue";
import Menu from "./components/menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style scoped>
#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
p {
  text-indent: 40px;
  text-align: justify;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
