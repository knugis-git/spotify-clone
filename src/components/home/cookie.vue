<script setup lang="ts">
const emit = defineEmits(["cookieShow"]);

function cookieACC() {
  emit("cookieShow");
}
</script>

<template>
  <div class="cookie-wrapper">
    <div class="cookie-container">
      <H1>Våra cookievillkor</H1>
      <P
        >I enlighet med europeiska lagar samt för att hjälpa din upplevelse på
        våran webbsida samlar vi in kakor från denna webbsida.</P
      >
      <button @click="cookieACC">Acceptera cookies</button>
    </div>
  </div>
</template>
