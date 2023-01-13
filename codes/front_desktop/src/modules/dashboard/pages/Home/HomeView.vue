<template>
  <NavbarComp />
  <main class="h-screen w-full p-8 overflow-auto">
    <HeaderComp />

    <div class="flex gap-8 mb-8">
      <div class="bg-branco-claro w-1/2 h-80 rounded-lg p-4 shadow-sm">
        <h3 class="text-xl text-gray-600 mb-4">Sessions by device</h3>
        <apexchart
          type="donut"
          :height="300"
          :options="sessionsOptions"
          :series="sessionsSeries"
        ></apexchart>
      </div>
      <div class="bg-branco-claro w-1/2 h-80 rounded-lg p-4 shadow-sm"></div>
    </div>

    <div class="flex gap-8">
      <div class="bg-branco-claro w-1/3 h-56 rounded-lg p-4 shadow-sm"></div>
      <div class="bg-branco-claro w-1/3 h-56 rounded-lg p-4 shadow-sm"></div>
      <div class="bg-branco-claro w-1/3 h-56 rounded-lg p-4 shadow-sm"></div>
    </div>
  </main>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  data() {
    return {
      sessionsOptions: {
        chart: {
          id: "sessions-chart",
        },
        labels: ["Desktop", "Mobile", "Tablet"],
        legend: {
          position: "bottom",
        },
      },
    };
  },
  components: { NavbarComp, HeaderComp },
};
</script>