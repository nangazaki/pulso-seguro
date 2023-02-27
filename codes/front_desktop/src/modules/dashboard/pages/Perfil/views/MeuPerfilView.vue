<template>
  <NavbarComp />
  <main>
    <HeaderComp />

    <div class="w-full flex gap-8 my-8">
      <div class="min-w-[400px] p-8 bg-white rounded-md card-shadow">
        <div class="mb-4 flex items-center flex-col">
        </div>
      </div>
      <div class="w-full p-8 bg-white rounded-md card-shadow">
        <h2 class="text-primaria-claro font-montserrat mb-4">Pacientes</h2>
        <div class="flex flex-col gap-4">
        </div>
      </div>
    </div>
  <div class="w-full flex gap-8 my-8">
  </div>
  </main>
</template>
  
<script>
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  components: { NavbarComp, HeaderComp },
};
</script>