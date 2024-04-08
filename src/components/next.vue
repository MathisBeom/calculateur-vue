<script setup lang="ts">
import { useProductStore } from "../store";

const { updateRouterState } = useProductStore();
</script>

<template>
  <button @click="updateRouterState('+')">Suivant</button>
</template>

<style scoped></style>
