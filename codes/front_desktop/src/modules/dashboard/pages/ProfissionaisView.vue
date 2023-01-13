<template>
  <NavbarComp />
  <main class="h-screen w-full p-8 overflow-auto">
    <HeaderComp />

    <div class="flex gap-8 mb-8">
      <div class="bg-branco-claro w-1/2 h-80 rounded-lg p-4 shadow-sm"></div>
      <div class="bg-branco-claro w-1/2 h-80 rounded-lg p-4 shadow-sm"></div>
    </div>

    <div class="flex gap-8">
      <div class="bg-branco-claro w-1/3 h-56 rounded-lg p-4 shadow-sm"></div>
      <div class="bg-branco-claro w-1/3 h-56 rounded-lg p-4 shadow-sm"></div>
      <div class="bg-branco-claro w-1/3 h-56 rounded-lg p-4 shadow-sm"></div>
    </div>
  
  </main>
</template>

<script setup>
import { defineComponent } from "vue";
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";

defineComponent({
  components: { NavbarComp, HeaderComp },
});
</script>