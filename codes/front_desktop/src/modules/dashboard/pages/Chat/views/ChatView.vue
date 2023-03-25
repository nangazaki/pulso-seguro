<template>
  <NavbarComp />

  <main>
    <HeaderComp />

    <div class="p-4 bg-white h-[calc(100%-100px)] w-full rounded-lg card-shadow">
      <h1 class="text-3xl">Chatroom</h1>
    </div>
  </main>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
export default {
  components: { NavbarComp, HeaderComp },
  
}
</script>
