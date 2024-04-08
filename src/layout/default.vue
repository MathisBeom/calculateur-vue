<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
</script>

<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
