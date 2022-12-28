<script setup lang="ts">
import { ref } from "vue";
import navbar from "./components/navbar.vue";
import front from "./components/front.vue";
import cookie from "./components/cookie.vue";

const cookieShow = ref(true);

function hideCookie() {
  cookieShow.value = false;
}
</script>

<template>
  <cookie @cookieShow="hideCookie" v-if="cookieShow" />
  <navbar />
  <front />
</template>
