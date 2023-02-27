<template>
  <NavbarComp />
  <main>
    <HeaderComp />

    <h1 class="font-montserrat mb-8 pl-2 text-2xl text-cinza-1">Estatísticas</h1>

    <ChartGeral />
    
    <div class="w-full flex gap-16">
      <div class="w-1/2 h-96 bg-branco-claro rounded-lg p-8 card-shadow"></div>
      <div class="w-1/2 h-96 bg-branco-claro rounded-lg p-8 card-shadow"></div>
    </div>
      
  </main>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue"
import ChartGeral from "../components/ChartGeral.vue";
// import { mapActions, mapState } from "vuex";

export default {
  components:{ NavbarComp, HeaderComp, ChartGeral }
}
</script>