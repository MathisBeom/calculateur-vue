<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "../../store";

const store = useProductStore();
const { productFields } = storeToRefs(store);
</script>

<template>
  <div class="surface">
    <h1>{{ productFields.title }}</h1>
    <div v-for="item in productFields.fields" :key="item.name">
      <label v-if="item.label" :for="item.name">{{ item.label }}</label>
      <input
        :type="item.type"
        :placeholder="item.name"
        v-model="item.value"
        :name="item.name"
      />
      <span>{{ item.unite }}</span>
    </div>
  </div>
</template>

<style scoped>
.surface {
  padding-block: 1rem;
}
</style>
