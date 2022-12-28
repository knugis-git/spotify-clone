<script setup lang="ts">
import { ref } from "vue";
import navbar from "./navbar.vue";
import front from "./home/front.vue";
import cookie from "./home/cookie.vue";

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
