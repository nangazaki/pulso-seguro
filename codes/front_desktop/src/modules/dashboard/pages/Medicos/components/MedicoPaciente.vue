<template>
  <div class="flex justify-between">
    <div class="flex gap-6">
      <div class="w-12 rounded-full overflow-hidden">
        <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/6.jpg" alt="">
      </div>
      <div>
        <p class="text-cinza-1">Nome do Paciente</p>
        <p class="text-sm text-cinza-3">Contacto do Paciente</p>
      </div>
    </div>
    <button class="rounded-md px-4 border border-primaria-claro text-primaria-claro transition duration-300 hover:bg-primaria-claro hover:text-white">
      <router-link to="/lista-pacientes/perfil-paciente/:id">Ver perfil do paciente</router-link>
    </button>
  </div>
</template>


