<template>
  <div
    class="w-[360px] h-auto flex flex-col min-w-0 bg-white rounded-xl overflow-hidden shadow-card"
  >
    <router-link :to="`/dashboard/pacientes/1/info`">
      <img
        src="https://img.freepik.com/fotos-gratis/retrato-de-homem-afro-americano_23-2149072178.jpg?w=740&t=st=1678925432~exp=1678926032~hmac=3a5c267e550607d8e22f2d3d0314179005b8feb6f556e40e24b576cf234383e0"
        class="w-full h-60 object-cover"
        alt="card image"
      />
    </router-link>
    <div class="p-6">
      <span class="font-montserrat text-gray-500 uppercase text-xs mb-4">
        Informações do Paciente
      </span>

      <div class="">
        <div class="mb-6">
          <router-link
            :to="`/dashboard/pacientes/1/info`"
            class="font-montserrat text-gray-800 text-lg text-primaria-claro"
          >
            Helder Cambuta
          </router-link>

          <div class="mt-2">
            <div class="flex items-center gap-2 mb-2">
              <div class="col-auto">
                <div class="w-4">
                  <i class="ph ph-phone" :class="`text-primary`"></i>
                </div>
              </div>
              <div class="text-gray-700">927600056</div>
            </div>

            <div class="flex items-center gap-2 mb-2">
              <div class="col-auto">
                <div class="w-4">
                  <i class="ph ph-envelope-simple" :class="`text-primary`"></i>
                </div>
              </div>
              <div class="text-gray-700">heldercambuta44@gmail.com</div>
            </div>
          </div>
        </div>
        <div class="mt-4 flex flex-col items-center justify-center">
          <div class="w-full flex justify-center gap-3 mb-3">
            <router-link
              :to="`/dashboard/pacientes/1/editar`"
              class="w-[40%] flex items-center justify-center gap-2 bg-white px-2 py-[6px] border border-gray-500 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              Editar
              <i class="ph ph-note-pencil" :class="`text-lg`"></i>
            </router-link>

            <button
              title="Eliminar"
              class="w-[40%] flex items-center justify-center gap-2 rounded-lg border border-red-500 py-[6px] px-2 text-red-500 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              Eliminar
              <i class="ph ph-trash" :class="`text-lg`"></i>
            </button>
          </div>

          <router-link
            :to="`/dashboard/pacientes/1/info`"
            :class="`w-[calc(80%+16px)] flex items-center justify-center gap-2 border border-gradient-1-lighter text-gradient-1-lighter nunito rounded-lg py-[6px] transition duration-300 hover:bg-gradient-1-darker hover:text-white`"
          >
            Ver perfil
            <i class="ph ph-user" :class="`text-lg`"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>