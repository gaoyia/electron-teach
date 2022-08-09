<template>
  <div class="dev-router">
    当前路由:<input v-model="path" type="text" style="width: 200px;">
    <button @click="enter">
      ✔️
    </button>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

import { ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";


const router = useRouter();
console.log(router);
const defaultPath = router.currentRoute.value.fullPath;
const path = ref(defaultPath);

onBeforeRouteUpdate((to) => {
  path.value = to.fullPath;
});

function enter() {
  router.push(path.value);
}

</script>
<style scoped>
.dev-router {
  position: absolute;
  bottom: 10px;
  right: 200px;
  -webkit-app-region: no-drag;
  background: #fff;
}
</style>
