<script setup lang="ts">
import { useProductStore } from "../store";
import Back from "./back.vue";

const links = [
  { name: "Configuration", path: "/configuration" },
  { name: "Comparaison", path: "/comparaison" },
  { name: "Surface", path: "/surface/step1" },
];

const { currentProduct } = useProductStore();
</script>

<template>
  <header>
    <h1>Comparer "{{ currentProduct?.name }}"</h1>
    <nav>
      <ul>
        <li v-for="(link, index) in links" :key="link.name">
          <span v-if="index !== 0 && index !== links.length"> > </span>
          <router-link :to="link.path" active-class="active-link">{{
            link.name
          }}</router-link>
        </li>
      </ul>
    </nav>
    <Back />
  </header>
</template>

<style scoped>
nav > ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
}

.active-link {
  font-weight: bold;
  text-decoration: underline;
}
</style>
