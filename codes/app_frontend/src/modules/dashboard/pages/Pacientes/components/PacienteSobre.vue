<template>
  <section>
    <h2 class="text-primary mb-3">Sobre</h2>
    <div
      class="w-[300px] px-8 py-6 bg-white text-gray-800 rounded-xl shadow-card"
    >
      <div class="mb-6 flex items-center flex-col">
        <div
          class="w-28 h-28 relative mb-3 rounded-full overflow-hidden object-cover"
        >
          <img
            src="https://img.freepik.com/fotos-gratis/retrato-de-homem-afro-americano_23-2149072178.jpg?w=740&t=st=1678925432~exp=1678926032~hmac=3a5c267e550607d8e22f2d3d0314179005b8feb6f556e40e24b576cf234383e0"
            class="w-full h-full object-cover"
            alt="thumb"
          />
        </div>
        <span class="text-lg mb-0">Nome do Paciente</span>
        <span class="block text-gray-600"> Idade 89 anos </span>
      </div>
      <div class="mb-6">
        <span class="text-gray-500 uppercase text-xs mb-4">
          Informações de contacto
        </span>
        <div class="mt-2">
          <div class="flex items-center gap-2 mb-2">
            <i class="ph ph-phone" :class="`text-primary`"></i>
            <p class="text-sm">927600056</p>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <i class="ph ph-envelope-simple" :class="`text-primary`"></i>
            <p class="text-sm">nangazaki44@gmail.com</p>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <i class="ph ph-map-pin" :class="`text-primary`"></i>
            <p class="text-sm">Luanda, Dimuca</p>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <span class="text-gray-500 uppercase text-xs mb-4">
          Doctor responsável
        </span>
        <div class="flex items-center gap-2 mt-2">
          <i class="ph ph-stethoscope" :class="`text-primary`"></i>
          <p class="text-sm">Donilson da Costa</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>