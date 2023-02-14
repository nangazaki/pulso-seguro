<template>
  <NavbarComp />
  <main>
    <HeaderComp />

    <h1 class="font-montserrat mb-8 pl-2 text-2xl text-cinza-1">Estatísticas</h1>

    <div class="w-full h-72 border">

    </div>
  </main>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue"

export default {
  components:{ NavbarComp, HeaderComp }
}
</script>