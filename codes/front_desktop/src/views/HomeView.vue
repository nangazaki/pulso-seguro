<template>
    <HeaderComp />
    <main>
        <header class="flex">
            <div class="pesquisar bg-white h-20 w-28"></div>
            <div class="avatar"></div>
        </header>
        <div class="analises"></div>
        <div class="div-group">
            <div class="div-1"></div>
            <div class="div-2"></div>
        </div>
    </main>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'

export default {
    components: [ HeaderComp, ]
}
</script>