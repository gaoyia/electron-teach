<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import DevRouter from './components/DevRouter.vue'
import { useRouter } from "vue-router";

const router = useRouter()
function toPath() {
  router.push("/path");
}
</script>

<template>
  <div>
    <router-view></router-view>
    <!-- <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view> -->
  </div>
  <HelloWorld msg="Vite + Vue" />
  <DevRouter />
  <button @click="toPath">toPath</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
