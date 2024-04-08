<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProductStore } from "../store";
import Next from "./next.vue";

const store = useProductStore();
const { currentProduct } = store;
const route = useRoute();
</script>

<template>
  <div class="bars">
    <div
      v-for="item in currentProduct?.routes"
      :key="item.name"
      :style="{
        backgroundColor: item.name === route.name ? 'lightblue' : 'lightgray',
      }"
    ></div>
  </div>
  <Next />
</template>

<style scoped>
.bars {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  div {
    width: 100%;
    height: 5px;
    border-radius: 0.25rem;
  }
}
</style>
